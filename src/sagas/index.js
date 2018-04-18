import { fork, call, put } from 'redux-saga/effects';
import Api from '../services/api';
import * as systemActions from '../actions/system';

function* fetchData() {
  let moreDataToFetch = true;
  let dataUrl =
    'https://collections.museumvictoria.com.au/api/search?classification=Centenary+of+victoria&hasimages=yes';
  let data = [];

  while (moreDataToFetch) {
    const response = yield call(Api.getResponse, dataUrl);
    const newData = yield response.json;
    data = data.concat(newData);

    if (response.link.next) {
      dataUrl = response.link.next.url;
    } else {
      moreDataToFetch = false;
    }
  }

  data = data.map(object => ({
    id: object.id,
    title: object.objectName,
    media: object.media.filter(media => media.medium)[0],
    description: object.objectSummary,
  }));

  yield put(systemActions.recievedObjects(data));
}

export default function* root() {
  yield fork(fetchData);
}
