import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '../../services';
import * as Actions from './actions';

function* getAllPointHistory({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/point-histories?${payload}`)
        : () => axiosMicro.get('/point-histories?', { params: payload }),
    );
    yield put(Actions.getAllPointHistorySuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllPointHistoryFailure(messages));
    }
  }
}

function* getAllOrder({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/orders?${payload}`)
        : () => axiosMicro.get('/orders?', { params: payload }),
    );
    yield put(Actions.getAllOrderSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllOrderFailure(messages));
    }
  }
}
// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllPointHistoryRequest, getAllPointHistory);
  yield takeLatest(Actions.getAllOrderRequest, getAllOrder);
}
