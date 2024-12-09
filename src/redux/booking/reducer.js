import { handleActions } from "redux-actions";

import * as Actions from "./actions";

const initialState = {
  // Get All Food
  isGetAllBookingRequest: false,
  isGetAllBookingSuccess: false,
  isGetAllBookingFailure: false,
  getAllBookingState: {},
  // Get All Food
  isGetAllBookingGroupRequest: false,
  isGetAllBookingGroupSuccess: false,
  isGetAllBookingGroupFailure: false,
  getAllBookingGroupState: {},
  // Get All Food
  isGetDetailBookingRequest: false,
  isGetDetailBookingSuccess: false,
  isGetDetailBookingFailure: false,
  getDetailBookingState: {},
  // Get Statistic
  isGetStatisticalRequest: false,
  isGetStatisticalSuccess: false,
  isGetStatisticalFailure: false,
  getStatisticalState: {},
  // Create Food
  isCreateBookingRequest: false,
  isCreateBookingSuccess: false,
  isCreateBookingFailure: false,
  createBookingState: {},
  // Update Food
  isUpdateBookingRequest: false,
  isUpdateBookingSuccess: false,
  isUpdateBookingFailure: false,
  // Delete Food
  isDeleteBookingRequest: false,
  isDeleteBookingSuccess: false,
  isDeleteBookingFailure: false,
  // Create Food
  isAddGuideBookingRequest: false,
  isAddGuideBookingSuccess: false,
  isAddGuideBookingFailure: false,

  // Get user guide
  isGetUserGuideBookingRequest: false,
  isGetUserGuideBookingSuccess: false,
  isGetUserGuideBookingFailure: false,
  getUserGuideBookingState: {},
  //
  isUpdatePaymentBookingRequest: false,
  isUpdatePaymentBookingSuccess: false,
  isUpdatePaymentBookingFailure: false,

  //
  isUpdateCheckingRequest: false,
  isUpdateCheckingSuccess: false,
  isUpdateCheckingFailure: false,
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Food
    [Actions.getStatisticalRequest]: (state) => ({
      ...state,
      isGetStatisticalRequest: true,
      isGetStatisticalSuccess: false,
      isGetStatisticalFailure: false,
    }),
    [Actions.getStatisticalSuccess]: (state, { payload }) => ({
      ...state,
      isGetStatisticalRequest: false,
      isGetStatisticalSuccess: true,
      isGetStatisticalFailure: false,
      getStatisticalState: payload,
    }),
    [Actions.getStatisticalFailure]: (state, { payload }) => ({
      ...state,
      isGetStatisticalRequest: false,
      isGetStatisticalSuccess: false,
      isGetStatisticalFailure: true,
      errorMessages: payload,
    }),
    // #region : Get All Food
    [Actions.getAllBookingRequest]: (state) => ({
      ...state,
      isGetAllBookingRequest: true,
      isGetAllBookingSuccess: false,
      isGetAllBookingFailure: false,
    }),
    [Actions.getAllBookingSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllBookingRequest: false,
      isGetAllBookingSuccess: true,
      isGetAllBookingFailure: false,
      getAllBookingState: payload,
    }),
    [Actions.getAllBookingFailure]: (state, { payload }) => ({
      ...state,
      isGetAllBookingRequest: false,
      isGetAllBookingSuccess: false,
      isGetAllBookingFailure: true,
      errorMessages: payload,
    }),
    // #region : Get All booking group
    [Actions.getAllBookingGroupRequest]: (state) => ({
      ...state,
      isGetAllBookingGroupRequest: true,
      isGetAllBookingGroupSuccess: false,
      isGetAllBookingGroupFailure: false,
    }),
    [Actions.getAllBookingGroupSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllBookingGroupRequest: false,
      isGetAllBookingGroupSuccess: true,
      isGetAllBookingGroupFailure: false,
      getAllBookingGroupState: payload,
    }),
    [Actions.getAllBookingGroupFailure]: (state, { payload }) => ({
      ...state,
      isGetAllBookingGroupRequest: false,
      isGetAllBookingGroupSuccess: false,
      isGetAllBookingGroupFailure: true,
      errorMessages: payload,
    }),
    // #region : Get detail tour
    [Actions.getDetailBookingRequest]: (state) => ({
      ...state,
      isGetDetailBookingRequest: true,
      isGetDetailBookingSuccess: false,
      isGetDetailBookingFailure: false,
    }),
    [Actions.getDetailBookingSuccess]: (state, { payload }) => ({
      ...state,
      isGetDetailBookingRequest: false,
      isGetDetailBookingSuccess: true,
      isGetDetailBookingFailure: false,
      getDetailBookingState: payload,
    }),
    [Actions.getDetailBookingFailure]: (state, { payload }) => ({
      ...state,
      isGetDetailBookingRequest: false,
      isGetDetailBookingSuccess: false,
      isGetDetailBookingFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Food
    [Actions.createBookingRequest]: (state) => ({
      ...state,
      isCreateBookingRequest: true,
      isCreateBookingSuccess: false,
      isCreateBookingFailure: false,
    }),
    [Actions.createBookingSuccess]: (state, { payload }) => ({
      ...state,
      isCreateBookingRequest: false,
      isCreateBookingSuccess: true,
      isCreateBookingFailure: false,
      createBookingState: payload,
    }),
    [Actions.createBookingFailure]: (state, { payload }) => ({
      ...state,
      isCreateBookingRequest: false,
      isCreateBookingSuccess: false,
      isCreateBookingFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateBooking]: (state) => ({
      ...state,
      isCreateBookingRequest: false,
      isCreateBookingSuccess: false,
      isCreateBookingFailure: false,
      errorMessages: [],
    }),
    [Actions.resetStateCreateBooking]: (state) => ({
      ...state,
      isCreateBookingRequest: false,
      isCreateBookingSuccess: false,
      isCreateBookingFailure: false,
      createBookingState: {},
      errorMessages: [],
    }),
    // #endregion
    // #region : Create Food
    [Actions.getUserGuideBookingRequest]: (state) => ({
      ...state,
      isGetUserGuideBookingRequest: true,
      isGetUserGuideBookingSuccess: false,
      isGetUserGuideBookingFailure: false,
    }),
    [Actions.getUserGuideBookingSuccess]: (state, { payload }) => ({
      ...state,
      isGetUserGuideBookingRequest: false,
      isGetUserGuideBookingSuccess: true,
      isGetUserGuideBookingFailure: false,
      getUserGuideBookingState: payload,
    }),
    [Actions.getUserGuideBookingFailure]: (state, { payload }) => ({
      ...state,
      isGetUserGuideBookingRequest: false,
      isGetUserGuideBookingSuccess: false,
      isGetUserGuideBookingFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetUserGuideBooking]: (state) => ({
      ...state,
      isGetUserGuideBookingRequest: false,
      isGetUserGuideBookingSuccess: false,
      isGetUserGuideBookingFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Update Food
    [Actions.updateBookingRequest]: (state) => ({
      ...state,
      isUpdateBookingRequest: true,
      isUpdateBookingSuccess: false,
      isUpdateBookingFailure: false,
    }),
    [Actions.updateBookingSuccess]: (state) => ({
      ...state,
      isUpdateBookingRequest: false,
      isUpdateBookingSuccess: true,
      isUpdateBookingFailure: false,
    }),
    [Actions.updateBookingFailure]: (state, { payload }) => ({
      ...state,
      isUpdateBookingRequest: false,
      isUpdateBookingSuccess: false,
      isUpdateBookingFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateBooking]: (state) => ({
      ...state,
      isUpdateBookingRequest: false,
      isUpdateBookingSuccess: false,
      isUpdateBookingFailure: false,
      errorMessages: [],
    }),
    // #region : Update Food
    [Actions.updatePaymentBookingRequest]: (state) => ({
      ...state,
      isUpdatePaymentBookingRequest: true,
      isUpdatePaymentBookingSuccess: false,
      isUpdatePaymentBookingFailure: false,
    }),
    [Actions.updatePaymentBookingSuccess]: (state) => ({
      ...state,
      isUpdatePaymentBookingRequest: false,
      isUpdatePaymentBookingSuccess: true,
      isUpdatePaymentBookingFailure: false,
    }),
    [Actions.updatePaymentBookingFailure]: (state, { payload }) => ({
      ...state,
      isUpdatePaymentBookingRequest: false,
      isUpdatePaymentBookingSuccess: false,
      isUpdatePaymentBookingFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdatePaymentBooking]: (state) => ({
      ...state,
      isUpdatePaymentBookingRequest: false,
      isUpdatePaymentBookingSuccess: false,
      isUpdatePaymentBookingFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Delete Food
    [Actions.deleteBookingRequest]: (state) => ({
      ...state,
      isDeleteBookingRequest: true,
      isDeleteBookingSuccess: false,
      isDeleteBookingFailure: false,
    }),
    [Actions.deleteBookingSuccess]: (state) => ({
      ...state,
      isDeleteBookingRequest: false,
      isDeleteBookingSuccess: true,
      isDeleteBookingFailure: false,
    }),
    [Actions.deleteBookingFailure]: (state, { payload }) => ({
      ...state,
      isDeleteBookingRequest: false,
      isDeleteBookingSuccess: false,
      isDeleteBookingFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteBooking]: (state) => ({
      ...state,
      isDeleteBookingRequest: false,
      isDeleteBookingSuccess: false,
      isDeleteBookingFailure: false,
      errorMessages: [],
    }),

    // #endregion
    // #region : Create Food
    [Actions.addGuideBookingRequest]: (state) => ({
      ...state,
      isAddGuideBookingRequest: true,
      isAddGuideBookingSuccess: false,
      isAddGuideBookingFailure: false,
    }),
    [Actions.addGuideBookingSuccess]: (state) => ({
      ...state,
      isAddGuideBookingRequest: false,
      isAddGuideBookingSuccess: true,
      isAddGuideBookingFailure: false,
    }),
    [Actions.addGuideBookingFailure]: (state, { payload }) => ({
      ...state,
      isAddGuideBookingRequest: false,
      isAddGuideBookingSuccess: false,
      isAddGuideBookingFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetAddGuideBooking]: (state) => ({
      ...state,
      isAddGuideBookingRequest: false,
      isAddGuideBookingSuccess: false,
      isAddGuideBookingFailure: false,
      errorMessages: [],
    }),

    // #region : Update Food
    [Actions.updateCheckingRequest]: (state) => ({
      ...state,
      isUpdateCheckingRequest: true,
      isUpdateCheckingSuccess: false,
      isUpdateCheckingFailure: false,
    }),
    [Actions.updateCheckingSuccess]: (state) => ({
      ...state,
      isUpdateCheckingRequest: false,
      isUpdateCheckingSuccess: true,
      isUpdateCheckingFailure: false,
    }),
    [Actions.updateCheckingFailure]: (state, { payload }) => ({
      ...state,
      isUpdateCheckingRequest: false,
      isUpdateCheckingSuccess: false,
      isUpdateCheckingFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateChecking]: (state) => ({
      ...state,
      isUpdateCheckingRequest: false,
      isUpdateCheckingSuccess: false,
      isUpdateCheckingFailure: false,
      errorMessages: [],
    }),

    // #region : Local
    [Actions.resetBookingState]: () => initialState,
    // #endregion
  },
  initialState
);

export default reducer;
