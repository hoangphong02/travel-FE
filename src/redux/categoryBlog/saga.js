import { call, put, takeLatest } from "redux-saga/effects";

import { axiosMicro } from "../../services";
import * as Actions from "./actions";

function* getAllCategoryBlogs({ payload }) {
  try {
    const response = yield call(
      typeof payload === "string"
        ? () => axiosMicro.get(`/category?${payload}`)
        : () => axiosMicro.get("/category", { params: payload })
    );
    yield put(Actions.getAllCategorySuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllCategoryFailure(messages));
    }
  }
}

function* createCategory({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post("/category", payload));
    if (response?.data?.status === "OK") {
      yield put(Actions.createCategorySuccess(response.data));
    } else {
      const messages = response.data.messages;
      yield put(Actions.createCategoryFailure(messages));
    }
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createCategoryFailure(messages));
    }
  }
}

function* updateCategory({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.put(`/category/${payload.id}`, payload.body)
    );
    if (response?.data?.status === "OK") {
      yield put(Actions.updateCategorySuccess(response.data));
    } else {
      const messages = response.data.messages;
      yield put(Actions.updateCategoryFailure(messages));
    }
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateCategoryFailure(messages));
    }
  }
}

function* deleteCategory({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/category/${payload}`));
    yield put(Actions.deleteCategorySuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteCategoryFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllCategoryRequest, getAllCategoryBlogs);
  yield takeLatest(Actions.createCategoryRequest, createCategory);
  yield takeLatest(Actions.updateCategoryRequest, updateCategory);
  yield takeLatest(Actions.deleteCategoryRequest, deleteCategory);
}
