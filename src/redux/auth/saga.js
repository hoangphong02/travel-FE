import { call, put, takeLatest } from "redux-saga/effects";

// import { routesAuth } from '~/configs';
import { STORAGE_KEY } from "../../constants";
import { axiosMicro } from "../../services";
import { Realtime } from "../../helpers/utils";
import * as Actions from "./actions";

function* loginRequest({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.post("/user/sign-in", payload)
    );
    if (response.data.status === "OK") {
      const { access_token: accessToken, refresh_token: refreshToken } =
        response.data;
      localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN, `Bearer ${accessToken}`);
      localStorage.setItem(STORAGE_KEY.REFRESH_TOKEN, refreshToken);
      yield put(Actions.loginSuccess(response.data));
    } else {
      yield put(Actions.loginFailure());
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.loginFailure(messages));
    }
  }
}

function* logoutRequest({ payload }) {
  try {
    localStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEY.REFRESH_TOKEN);
    // window.location.replace(routesAuth.login);
    yield call(() => axiosMicro.post("/user/log-out"));
  } catch {
    //
  }
}

function* checkUserExists({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.get("/authentications/check", { params: payload })
    );
    yield put(Actions.checkUserExistsSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.checkUserExistsFailure(messages));
    }
  }
}

function* register({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.post("/user/create-user", payload)
    );
    if (response.data.status === "OK") {
      yield put(Actions.registerSuccess(response.data));
    } else {
      const messages = response.data.message;
      yield put(Actions.registerFailure(messages));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.registerFailure(messages));
    }
  }
}

function* updateUser({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.put(`/user/update-user/${payload.id}`, payload.body)
    );
    if (response.data.status === "OK") {
      yield put(Actions.updateUserSuccess(response.data));
    } else {
      const messages = response.data.message;
      yield put(Actions.updateUserFailure(messages));
    }
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.updateUserFailure(messages));
    }
  }
}

function* uploadFile({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.post("/files/upload", payload)
    );
    yield put(Actions.uploadFileSuccess(response.data));
  } catch (e) {
    if (e?.response?.data) {
      const messages = e.response.data;
      yield put(Actions.uploadFileFailure(messages));
    }
  }
}

function* deleteUser({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/user/delete-user/${payload}`));
    yield put(Actions.deleteUserSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteUserFailure(messages));
    }
  }
}
// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.loginRequest, loginRequest);
  yield takeLatest(Actions.logoutRequest, logoutRequest);
  yield takeLatest(Actions.checkUserExistsRequest, checkUserExists);
  yield takeLatest(Actions.registerRequest, register);
  yield takeLatest(Actions.updateUserRequest, updateUser);
  yield takeLatest(Actions.uploadFileRequest, uploadFile);
  yield takeLatest(Actions.deleteUserRequest, deleteUser);
}
