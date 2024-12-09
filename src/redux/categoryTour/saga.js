import { call, put, takeLatest } from "redux-saga/effects";

import { axiosMicro } from "../../services";
import * as Actions from "./actions";

function* getAllCategoryTours({ payload }) {
  try {
    const response = yield call(
      typeof payload === "string"
        ? () => axiosMicro.get(`/category-tour?${payload}`)
        : () => axiosMicro.get("/category-tour", { params: payload })
    );
    yield put(Actions.getAllCategoryTourSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllCategoryTourFailure(messages));
    }
  }
}

function* createCategoryTour({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.post("/category-tour", payload)
    );
    if (response?.data?.status === "OK") {
      yield put(Actions.createCategoryTourSuccess(response.data));
    } else {
      const messages = response.data.messages;
      yield put(Actions.createCategoryTourFailure(messages));
    }
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createCategoryTourFailure(messages));
    }
  }
}

function* updateCategoryTour({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.put(`/category-tour/${payload.id}`, payload.body)
    );
    if (response?.data?.status === "OK") {
      yield put(Actions.updateCategoryTourSuccess(response.data));
    } else {
      const messages = response.data.messages;
      yield put(Actions.updateCategoryTourFailure(messages));
    }
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateCategoryTourFailure(messages));
    }
  }
}

function* deleteCategoryTour({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/category-tour/${payload}`));
    yield put(Actions.deleteCategoryTourSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteCategoryTourFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllCategoryTourRequest, getAllCategoryTours);
  yield takeLatest(Actions.createCategoryTourRequest, createCategoryTour);
  yield takeLatest(Actions.updateCategoryTourRequest, updateCategoryTour);
  yield takeLatest(Actions.deleteCategoryTourRequest, deleteCategoryTour);
}
