import { call, put, takeLatest } from "redux-saga/effects";

import { axiosMicro } from "../../services";
import * as Actions from "./actions";

function* getAllFoods({ payload }) {
  try {
    const response = yield call(
      typeof payload === "string"
        ? () => axiosMicro.get(`/food?${payload}`)
        : () => axiosMicro.get("/food", { params: payload })
    );
    yield put(Actions.getAllFoodsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllFoodsFailure(messages));
    }
  }
}

function* createFood({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post("/food", payload));
    if (response?.data?.status === "OK") {
      yield put(Actions.createFoodsSuccess(response.data));
    } else {
      const messages = response.data.messages;
      yield put(Actions.createFoodsFailure(messages));
    }
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createFoodsFailure(messages));
    }
  }
}

function* updateFood({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.put(`/food/${payload.id}`, payload.body)
    );
    yield put(Actions.updateFoodsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateFoodsFailure(messages));
    }
  }
}

function* deleteFood({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/food/${payload}`));
    yield put(Actions.deleteFoodsSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteFoodsFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllFoodsRequest, getAllFoods);
  yield takeLatest(Actions.createFoodsRequest, createFood);
  yield takeLatest(Actions.updateFoodsRequest, updateFood);
  yield takeLatest(Actions.deleteFoodsRequest, deleteFood);
}
