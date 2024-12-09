import { createAction } from "redux-actions";

export const getAllBookingRequest = createAction("GET_ALL_BOOKING_REQUEST");
export const getAllBookingSuccess = createAction("GET_ALL_BOOKING_SUCCESS");
export const getAllBookingFailure = createAction("GET_ALL_BOOKING_FAILURE");

export const getDetailBookingRequest = createAction(
  "GET_DETAIL_BOOKING_REQUEST"
);
export const getDetailBookingSuccess = createAction(
  "GET_DETAIL_BOOKING_SUCCESS"
);
export const getDetailBookingFailure = createAction(
  "GET_DETAIL_BOOKING_FAILURE"
);

export const getAllBookingGroupRequest = createAction(
  "GET_ALL_BOOKING_GROUP_REQUEST"
);
export const getAllBookingGroupSuccess = createAction(
  "GET_ALL_BOOKING_GROUP_SUCCESS"
);
export const getAllBookingGroupFailure = createAction(
  "GET_ALL_BOOKING_GROUP_FAILURE"
);

export const getUserGuideBookingRequest = createAction(
  "GET_USER_GUIDE_BOOKING_REQUEST"
);
export const getUserGuideBookingSuccess = createAction(
  "GET_USER_GUIDE_BOOKING_SUCCESS"
);
export const getUserGuideBookingFailure = createAction(
  "GET_USER_GUIDE_BOOKING_FAILURE"
);
export const resetGetUserGuideBooking = createAction(
  "RESET_GET_USER_GUIDE_BOOKING"
);

export const getStatisticalRequest = createAction("GET_STATISTICAL_REQUEST");
export const getStatisticalSuccess = createAction("GET_STATISTICAL_SUCCESS");
export const getStatisticalFailure = createAction("GET_STATISTICAL_FAILURE");

export const addGuideBookingRequest = createAction("ADD_GUIDE_BOOKING_REQUEST");
export const addGuideBookingSuccess = createAction("ADD_GUIDE_BOOKING_SUCCESS");
export const addGuideBookingFailure = createAction("ADD_GUIDE_BOOKING_FAILURE");
export const resetAddGuideBooking = createAction("RESET_ADD_GUIDE_BOOKING");

export const createBookingRequest = createAction("CREATE_BOOKING_REQUEST");
export const createBookingSuccess = createAction("CREATE_BOOKING_SUCCESS");
export const createBookingFailure = createAction("CREATE_BOOKING_FAILURE");
export const resetCreateBooking = createAction("RESET_CREATE_BOOKING");
export const resetStateCreateBooking = createAction(
  "RESET_STATE_CREATE_BOOKING"
);

export const updateBookingRequest = createAction("UPDATE_BOOKING_REQUEST");
export const updateBookingSuccess = createAction("UPDATE_BOOKING_SUCCESS");
export const updateBookingFailure = createAction("UPDATE_BOOKING_FAILURE");
export const resetUpdateBooking = createAction("RESET_UPDATE_BOOKING");

export const updatePaymentBookingRequest = createAction(
  "UPDATE_PAYMENT_BOOKING_REQUEST"
);
export const updatePaymentBookingSuccess = createAction(
  "UPDATE_PAYMENT_BOOKING_SUCCESS"
);
export const updatePaymentBookingFailure = createAction(
  "UPDATE_PAYMENT_BOOKING_FAILURE"
);
export const resetUpdatePaymentBooking = createAction(
  "RESET_UPDATE_PAYMENT_BOOKING"
);

export const deleteBookingRequest = createAction("DELETE_BOOKING_REQUEST");
export const deleteBookingSuccess = createAction("DELETE_BOOKING_SUCCESS");
export const deleteBookingFailure = createAction("DELETE_BOOKING_FAILURE");
export const resetDeleteBooking = createAction("RESET_DELETE_BOOKING");

export const updateCheckingRequest = createAction("UPDATE_CHECKING_REQUEST");
export const updateCheckingSuccess = createAction("UPDATE_CHECKING_SUCCESS");
export const updateCheckingFailure = createAction("UPDATE_CHECKING_FAILURE");
export const resetUpdateChecking = createAction("RESET_UPDATE_CHECKING");

export const resetBookingState = createAction("RESET_Booking_STATE");
