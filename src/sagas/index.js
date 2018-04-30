import { delay } from 'redux-saga';
import { fork, select, call, put, takeEvery } from 'redux-saga/effects';
import Api from '../services/api';
import * as systemActions from '../actions/system';
import * as notificationActions from '../actions/notifications';

function* fetchData() {
  let moreDataToFetch = true;
  let dataUrl =
    'https://collections.museumvictoria.com.au/api/search?keyword=Models+%26+Modelmaking&hasimages=yes';
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

  yield put(notificationActions.showSuccess(`Collection data loaded`));
  yield put(systemActions.recievedObjects(data));
}

function* showNotifications(action) {
  if (!action.payload.persist) {
    yield call(delay, 2000);
    if (yield select(state => state.notification.active)) {
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
