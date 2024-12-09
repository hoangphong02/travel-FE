import { call, put, takeLatest } from "redux-saga/effects";

import { axiosMicro } from "../../services";
import * as Actions from "./actions";

function* getAllBookings({ payload }) {
  try {
    const response = yield call(
      typeof payload === "string"
        ? () => axiosMicro.get(`/booking?${payload}`)
        : () => axiosMicro.get("/booking", { params: payload })
    );
    yield put(Actions.getAllBookingSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllBookingFailure(messages));
    }
  }
}

function* getAllBookingGroup({ payload }) {
  try {
    const response = yield call(
      typeof payload === "string"
        ? () => axiosMicro.get(`/booking/groups?${payload}`)
        : () => axiosMicro.get("/booking/groups", { params: payload })
    );
    yield put(Actions.getAllBookingGroupSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllBookingGroupFailure(messages));
    }
  }
}

function* getDetailBookings({ payload }) {
  try {
    const response = yield call(
      typeof payload === "string"
        ? () => axiosMicro.get(`/booking/${payload.id}`)
        : () => axiosMicro.get(`/booking/${payload.id}`, { params: payload })
    );
    yield put(Actions.getDetailBookingSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getDetailBookingFailure(messages));
    }
  }
}

function* createBooking({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post("/booking", payload));
    if (response?.data?.status === "OK") {
      yield put(Actions.createBookingSuccess(response.data));
    } else {
      const messages = response.data.messages;
      yield put(Actions.createBookingFailure(messages));
    }
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createBookingFailure(messages));
    }
  }
}

function* getUserGuideBooking({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post("/user/list", payload));
    if (response?.data?.status === "OK") {
      yield put(Actions.getUserGuideBookingSuccess(response.data));
    } else {
      const messages = response.data.messages;
      yield put(Actions.getUserGuideBookingFailure(messages));
    }
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getUserGuideBookingFailure(messages));
    }
  }
}

function* getStatistical({ payload }) {
  try {
    const response = yield call(() => axiosMicro.get("/statistical", payload));
    if (response?.data?.status === "OK") {
      yield put(Actions.getStatisticalSuccess(response.data));
    } else {
      const messages = response.data.messages;
      yield put(Actions.getStatisticalFailure(messages));
    }
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getStatisticalFailure(messages));
    }
  }
}

function* updateBooking({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.put(`/booking/${payload.id}`, payload.body)
    );
    yield put(Actions.updateBookingSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateBookingFailure(messages));
    }
  }
}

function* deleteBooking({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/booking/${payload}`));
    yield put(Actions.deleteBookingSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteBookingFailure(messages));
    }
  }
}

function* addGuideBooking({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.post("/booking/group/assignment", payload)
    );
    if (response?.data?.status === "OK") {
      yield put(Actions.addGuideBookingSuccess(response.data));
    } else {
      const messages = response.data.messages;
      yield put(Actions.addGuideBookingFailure(messages));
    }
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.addGuideBookingFailure(messages));
    }
  }
}

function* updatePaymentBooking({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.put(`/booking/${payload.id}/paid`, payload.body)
    );
    yield put(Actions.updatePaymentBookingSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updatePaymentBookingFailure(messages));
    }
  }
}

function* updateChecking({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.put(`/booking/checking/${payload.id}`, payload.body)
    );
    yield put(Actions.updateCheckingSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateCheckingFailure(messages));
    }
  }
}
// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllBookingRequest, getAllBookings);
  yield takeLatest(Actions.getDetailBookingRequest, getDetailBookings);
  yield takeLatest(Actions.createBookingRequest, createBooking);
  yield takeLatest(Actions.updateBookingRequest, updateBooking);
  yield takeLatest(Actions.deleteBookingRequest, deleteBooking);
  yield takeLatest(Actions.getAllBookingGroupRequest, getAllBookingGroup);
  yield takeLatest(Actions.addGuideBookingRequest, addGuideBooking);
  yield takeLatest(Actions.getUserGuideBookingRequest, getUserGuideBooking);
  yield takeLatest(Actions.getStatisticalRequest, getStatistical);
  yield takeLatest(Actions.updatePaymentBookingRequest, updatePaymentBooking);
  yield takeLatest(Actions.updateCheckingRequest, updateChecking);
}
