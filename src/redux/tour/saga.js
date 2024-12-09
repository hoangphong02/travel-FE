import { call, put, takeLatest } from "redux-saga/effects";

import { axiosMicro } from "../../services";
import * as Actions from "./actions";

function* getAllTours({ payload }) {
  try {
    const response = yield call(
      typeof payload === "string"
        ? () => axiosMicro.get(`/tour?${payload}`)
        : () => axiosMicro.get("/tour", { params: payload })
    );
    yield put(Actions.getAllTourSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllTourFailure(messages));
    }
  }
}

function* getAllToursMain({ payload }) {
  try {
    const response = yield call(
      typeof payload === "string"
        ? () => axiosMicro.get(`/tour/main?${payload}`)
        : () => axiosMicro.get("/tour/main", { params: payload })
    );
    yield put(Actions.getAllTourMainSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllTourMainFailure(messages));
    }
  }
}

function* getAllToursFlop({ payload }) {
  try {
    const response = yield call(
      typeof payload === "string"
        ? () => axiosMicro.get(`/tour/flop?${payload}`)
        : () => axiosMicro.get("/tour/flop", { params: payload })
    );
    yield put(Actions.getAllTourFlopSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllTourFlopFailure(messages));
    }
  }
}

function* getDetailTours({ payload }) {
  try {
    const response = yield call(
      typeof payload === "string"
        ? () => axiosMicro.get(`/tour/${payload.id}`)
        : () => axiosMicro.get(`/tour/${payload.id}`, { params: payload })
    );
    yield put(Actions.getDetailTourSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getDetailTourFailure(messages));
    }
  }
}

function* createTour({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post("/tour", payload));
    if (response?.data?.status === "OK") {
      yield put(Actions.createTourSuccess(response.data));
    } else {
      const messages = response.data.messages;
      yield put(Actions.createTourFailure(messages));
    }
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createTourFailure(messages));
    }
  }
}

function* updateTour({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.put(`/tour/${payload.id}`, payload.body)
    );
    yield put(Actions.updateTourSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateTourFailure(messages));
    }
  }
}

function* deleteTour({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/tour/${payload}`));
    yield put(Actions.deleteTourSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteTourFailure(messages));
    }
  }
}

function* getSlidesTour({ payload }) {
  try {
    const response = yield call(
      typeof payload === "string"
        ? () => axiosMicro.get(`/tour/slides?${payload}`)
        : () => axiosMicro.get("/tour/slides", { params: payload })
    );
    yield put(Actions.getSlidesTourSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getSlidesTourFailure(messages));
    }
  }
}
// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllTourRequest, getAllTours);
  yield takeLatest(Actions.getDetailTourRequest, getDetailTours);
  yield takeLatest(Actions.createTourRequest, createTour);
  yield takeLatest(Actions.updateTourRequest, updateTour);
  yield takeLatest(Actions.deleteTourRequest, deleteTour);
  yield takeLatest(Actions.getSlidesTourRequest, getSlidesTour);
  yield takeLatest(Actions.getAllTourMainRequest, getAllToursMain);
  yield takeLatest(Actions.getAllTourFlopRequest, getAllToursFlop);
}
