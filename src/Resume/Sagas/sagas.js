import { 
  call,
  put,
  takeLatest
} from "redux-saga/effects";

import { 
  REQUEST_API_DATA,
  receiveApiData 
} from "./actions";

import { 
  fetchResume
} from "../apis/resume";

function* getApiData(action) {
  try {
    const data = yield call(fetchResume);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}