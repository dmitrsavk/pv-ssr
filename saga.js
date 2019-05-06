import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { spawn } from "redux-saga/effects";

import userSaga from './store/user/saga';

es6promise.polyfill();

function* rootSaga() {
  yield spawn(userSaga);
}

export default rootSaga;
