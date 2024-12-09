import { call, put, takeLatest } from "redux-saga/effects";

import { axiosMicro } from "../../services";
import * as Actions from "./actions";

function* getAllBlogs({ payload }) {
  try {
    const response = yield call(
      typeof payload === "string"
        ? () => axiosMicro.get(`/blog?${payload}`)
        : () => axiosMicro.get("/blog", { params: payload })
    );
    yield put(Actions.getAllBlogsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllBlogsFailure(messages));
    }
  }
}

function* getDetailBlog({ payload }) {
  try {
    const response = yield call(
      typeof payload === "string"
        ? () => axiosMicro.get(`/blog/${payload.id}`)
        : () => axiosMicro.get(`/blog/${payload.id}`, { params: payload })
    );
    yield put(Actions.getDetailBlogsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getDetailBlogsFailure(messages));
    }
  }
}

function* createBlogs({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post("/blog", payload));
    if (response?.data?.status === "OK") {
      yield put(Actions.createBlogsSuccess(response.data));
    } else {
      const messages = response.data.messages;
      yield put(Actions.createBlogsFailure(messages));
    }
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createBlogsFailure(messages));
    }
  }
}

function* updateBlogs({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.put(`/blog/${payload.id}`, payload.body)
    );
    if (response?.data?.status === "OK") {
      yield put(Actions.updateBlogsSuccess(response.data));
    } else {
      const messages = response.data.messages;
      yield put(Actions.updateBlogsFailure(messages));
    }
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateBlogsFailure(messages));
    }
  }
}

function* deleteBlogs({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/blog/${payload}`));
    yield put(Actions.deleteBlogsSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteBlogsFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllBlogsRequest, getAllBlogs);
  yield takeLatest(Actions.createBlogsRequest, createBlogs);
  yield takeLatest(Actions.updateBlogsRequest, updateBlogs);
  yield takeLatest(Actions.deleteBlogsRequest, deleteBlogs);
  yield takeLatest(Actions.getDetailBlogsRequest, getDetailBlog);
}
