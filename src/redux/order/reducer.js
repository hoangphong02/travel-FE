import { handleActions } from 'redux-actions';

import * as Actions from './actions';

const initialState = {
  // Get All Point History
  isFirstGetAllPointHistory: false,
  isGetAllPointHistoryRequest: false,
  isGetAllPointHistorySuccess: false,
  isGetAllPointHistoryFailure: false,
  getAllPointHistoryState: {},
  // Get All Order
  isFirstGetAllOrder: false,
  isGetAllOrderRequest: false,
  isGetAllOrderSuccess: false,
  isGetAllOrderFailure: false,
  getAllOrderState: {},
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Point history
    [Actions.getAllPointHistoryRequest]: (state) => ({
      ...state,
      isGetAllPointHistoryRequest: true,
      isGetAllPointHistorySuccess: false,
      isGetAllPointHistoryFailure: false,
    }),
    [Actions.getAllPointHistorySuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllPointHistory: true,
      isGetAllPointHistoryRequest: false,
      isGetAllPointHistorySuccess: true,
      isGetAllPointHistoryFailure: false,
      getAllPointHistoryState: payload,
    }),
    [Actions.getAllPointHistoryFailure]: (state, { payload }) => ({
      ...state,
      isGetAllPointHistoryRequest: false,
      isGetAllPointHistorySuccess: false,
      isGetAllPointHistoryFailure: true,
      errorMessages: payload,
    }),

    // #region : Get All Order
    [Actions.getAllOrderRequest]: (state) => ({
      ...state,
      isGetAllOrderRequest: true,
      isGetAllOrderSuccess: false,
      isGetAllOrderFailure: false,
    }),
    [Actions.getAllOrderSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllOrder: true,
      isGetAllOrderRequest: false,
      isGetAllOrderSuccess: true,
      isGetAllOrderFailure: false,
      getAllOrderState: payload,
    }),
    [Actions.getAllOrderFailure]: (state, { payload }) => ({
      ...state,
      isGetAllOrderRequest: false,
      isGetAllOrderSuccess: false,
      isGetAllOrderFailure: true,
      errorMessages: payload,
    }),
    // #endregion

    // #region : Local
    [Actions.resetProductState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
