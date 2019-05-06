import { put, takeLatest, call, spawn } from "redux-saga/effects";

const userApiUrl = "https://privateblog.ru/api/user";

const fetchUser = ({ isServer, sessionId }) => {
  return isServer
    ? fetch(userApiUrl, { headers: { sid: sessionId } }).then(data =>
        data.json()
      )
    : fetch(userApiUrl, { credentials: "include" }).then(data => data.json());
};

function* getUserData({ payload }) {
  const user = yield call(fetchUser, payload);
  yield put({ type: "user/getDataSuccess", payload: user });
}

function* watchUserGetData() {
  yield takeLatest("user/getData", getUserData);
}

export default function* watchAll() {
  yield spawn(watchUserGetData);
}
