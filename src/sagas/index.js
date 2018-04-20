import { fork, call, put } from 'redux-saga/effects';
import Api from '../services/api';
import * as systemActions from '../actions/system';

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

  yield put(systemActions.recievedObjects(data));
}

export default function* root() {
  yield fork(fetchData);
}
