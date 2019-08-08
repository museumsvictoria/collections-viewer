import { delay } from 'redux-saga';
import { fork, select, call, put, takeEvery } from 'redux-saga/effects';
import Api from '../services/api';
import * as systemActions from '../actions/system';
import * as notificationActions from '../actions/notifications';
import * as routes from '../store/routesMap';

function* fetchData() {
  let moreDataToFetch = true;
  let dataUrl =
    'https://collections.museumvictoria.com.au/api/search?recordtype=item&collectingarea=social+spaces+%26+youth&hasimages=yes';
  let data = [];

  while (moreDataToFetch) {
    const response = yield call(Api.getResponse, dataUrl);
    const newData = yield response.json;
    data = data.concat(Api.transformData(newData));

    if (response.link && response.link.next) {
      dataUrl = response.link.next.url;
    } else {
      moreDataToFetch = false;
    }
  }

  const location = yield select(state => state.location);
  const activeObject =
    location.type === routes.OBJECT_PAGE
      ? data.find(
          object =>
            object.id === `${location.payload.type}/${location.payload.id}`,
        )
      : null;

  yield put(
    systemActions.recievedObjects(data, activeObject ? activeObject : null),
  );
  yield put(notificationActions.showSuccess(`Collection data loaded`));
}

function* showNotifications(action) {
  if (!action.payload.persist) {
    yield call(delay, 2000);
    if (yield select(state => state.notifications.active)) {
      yield put(notificationActions.hideNotification());
    }
  }
}

function* watchNotifications() {
  yield takeEvery(notificationActions.NOTIFICATION_SHOW, showNotifications);
}

export default function* root() {
  yield fork(watchNotifications);
  yield fork(fetchData);
}
