import { call, put, takeLatest } from "redux-saga/effects";

import { axiosMicro } from "../../services";
import * as Actions from "./actions";

function* getAllComments({ payload }) {
  try {
    const response = yield call(
      typeof payload === "string"
        ? () => axiosMicro.get(`/comment?${payload}`)
        : () => axiosMicro.get("/comment", { params: payload })
    );
    yield put(Actions.getAllCommentsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllCommentsFailure(messages));
    }
  }
}

function* createComment({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post("/comment", payload));
    if (response?.data?.status === "OK") {
      yield put(Actions.createCommentsSuccess(response.data));
    } else {
      const messages = response.data.messages;
      yield put(Actions.createCommentsFailure(messages));
    }
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createCommentsFailure(messages));
    }
  }
}

function* updateComment({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.put(`/comment/${payload.id}`, payload.body)
    );
    yield put(Actions.updateCommentsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateCommentsFailure(messages));
    }
  }
}

function* deleteComment({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/comment/${payload}`));
    yield put(Actions.deleteCommentsSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteCommentsFailure(messages));
    }
  }
}

function* replyComment({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.post(`/comment/${payload.id}/reply`, payload.body)
    );
    if (response?.data?.status === "OK") {
      yield put(Actions.replyCommentsSuccess(response.data));
    } else {
      const messages = response.data.messages;
      yield put(Actions.replyCommentsFailure(messages));
    }
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.replyCommentsFailure(messages));
    }
  }
}
// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllCommentsRequest, getAllComments);
  yield takeLatest(Actions.createCommentsRequest, createComment);
  yield takeLatest(Actions.updateCommentsRequest, updateComment);
  yield takeLatest(Actions.deleteCommentsRequest, deleteComment);
  yield takeLatest(Actions.deleteCommentsRequest, deleteComment);
  yield takeLatest(Actions.replyCommentsRequest, replyComment);
}
