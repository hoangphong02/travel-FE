import { createAction } from 'redux-actions';

export const getAllPointHistoryRequest = createAction(
  'GET_ALL_POINT_HISTORY_REQUEST',
);
export const getAllPointHistorySuccess = createAction(
  'GET_ALL_POINT_HISTORY_SUCCESS',
);
export const getAllPointHistoryFailure = createAction(
  'GET_ALL_POINT_HISTORY_FAILURE',
);

export const getAllOrderRequest = createAction('GET_ALL_ORDER_REQUEST');
export const getAllOrderSuccess = createAction('GET_ALL_ORDER_SUCCESS');
export const getAllOrderFailure = createAction('GET_ALL_ORDER_FAILURE');

export const resetProductState = createAction('RESET_PRODUCT_STATE');
