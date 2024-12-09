import { createAction } from "redux-actions";

export const callApiFirstTimeRequest = createAction(
  "CALL_API_FIRST_TIME_REQUEST"
);

export const getAllUserRequest = createAction("GET_ALL_USER_REQUEST");
export const getAllUserSuccess = createAction("GET_ALL_USER_SUCCESS");
export const getAllUserFailure = createAction("GET_ALL_USER_FAILURE");

export const getProfileRequest = createAction("GET_PROFILE_REQUEST");
export const getProfileSuccess = createAction("GET_PROFILE_SUCCESS");
export const getProfileFailure = createAction("GET_PROFILE_FAILURE");
export const resetProfileState = createAction("RESET_PROFILE_STATE");

export const getConfigRequest = createAction("GET_CONFIG_REQUEST");
export const getConfigSuccess = createAction("GET_CONFIG_SUCCESS");
export const getConfigFailure = createAction("GET_CONFIG_FAILURE");

export const updateAddressesConfig = createAction("UPDATE_ADDRESSES_CONFIG");
export const updateAddressesProfile = createAction("UPDATE_ADDRESSES_PROFILE");

export const updateInformationUserRequest = createAction(
  "UPDATE_INFORMATION_USER_REQUEST"
);

export const getWorkSchedulesRequest = createAction(
  "GET_WORK_SCHEDULES_REQUEST"
);
export const getWorkSchedulesSuccess = createAction(
  "GET_WORK_SCHEDULES_SUCCESS"
);
export const getWorkSchedulesFailure = createAction(
  "GET_WORK_SCHEDULES_FAILURE"
);

export const changePointRequest = createAction("CHANGE_POINT_REQUEST");

export const resetUserState = createAction("RESET_USER_STATE");
