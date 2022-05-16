import { all, fork } from 'redux-saga/effects';
import {dataSaga} from "../../saga/sample/ducks";

export default function* rootSaga() {
  yield all([
    fork(dataSaga),
  ]);
}
