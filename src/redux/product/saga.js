import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosMicro } from '../../services';
import * as Actions from './actions';

function* getAllProducts({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/product/getAll?${payload}`)
        : () => axiosMicro.get('/product/getAll', { params: payload }),
    );
    yield put(Actions.getAllProductsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getAllProductsFailure(messages));
    }
  }
}

function* getListProducts({ payload }) {
  try {
    const response = yield call(
      typeof payload === 'string'
        ? () => axiosMicro.get(`/products/list?${payload}`)
        : () => axiosMicro.get('/products/list', { params: payload }),
    );
    yield put(Actions.getListProductsSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getListProductsFailure(messages));
    }
  }
}

function* createProduct({ payload }) {
  try {
    const response = yield call(() => axiosMicro.post('/products', payload));
    yield put(Actions.createProductSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.createProductFailure(messages));
    }
  }
}

function* updateProduct({ payload }) {
  try {
    const response = yield call(() =>
      axiosMicro.patch(`/products/${payload.id}`, payload.body),
    );
    yield put(Actions.updateProductSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.updateProductFailure(messages));
    }
  }
}

function* deleteProduct({ payload }) {
  try {
    yield call(() => axiosMicro.delete(`/products/${payload}`));
    yield put(Actions.deleteProductSuccess(payload));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.deleteProductFailure(messages));
    }
  }
}

function* getListCategories() {
  try {
    const response = yield call(() => axiosMicro.get('/categories?limit=0'));
    yield put(Actions.getListCategoriesSuccess(response.data));
  } catch (error) {
    if (error?.response?.data) {
      const messages = error.response.data;
      yield put(Actions.getListCategoriesFailure(messages));
    }
  }
}

// eslint-disable-next-line func-names
export default function* () {
  yield takeLatest(Actions.getAllProductsRequest, getAllProducts);
  yield takeLatest(Actions.createProductRequest, createProduct);
  yield takeLatest(Actions.updateProductRequest, updateProduct);
  yield takeLatest(Actions.deleteProductRequest, deleteProduct);
  yield takeLatest(Actions.getListCategoriesRequest, getListCategories);
  yield takeLatest(Actions.getListProductsRequest, getListProducts);
}
