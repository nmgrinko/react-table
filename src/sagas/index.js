import { put, takeLatest, all } from "redux-saga/effects";

const povider = 'https://cors-anywhere.herokuapp.com/';
const urlTest = 'http://users.bugred.ru/tasks/rest/list';

function* fetchJson() {
  const json = yield fetch(povider + urlTest).then(response => response.json());
  yield put({ type: "JSON_RECEIVED", data: json.resources });
}

function* actionWatcher() {
  yield takeLatest("GET_JSON", fetchJson);
}

export default function* rootSaga() {
  yield all([ actionWatcher() ]);
}

