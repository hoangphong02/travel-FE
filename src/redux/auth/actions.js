import { createAction } from "redux-actions";

export const checkUserExistsRequest = createAction("CHECK_USER_EXISTS_REQUEST");
export const checkUserExistsSuccess = createAction("CHECK_USER_EXISTS_SUCCESS");
export const checkUserExistsFailure = createAction("CHECK_USER_EXISTS_FAILURE");

export const loginRequest = createAction("LOGIN_REQUEST");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const loginFailure = createAction("LOGIN_FAILURE");

export const logoutRequest = createAction("LOGOUT_REQUEST");

export const registerRequest = createAction("REGISTER_REQUEST");
export const registerSuccess = createAction("REGISTER_SUCCESS");
export const registerFailure = createAction("REGISTER_FAILURE");
export const resetRegisterState = createAction("RESET_REGISTER_STATE");

export const updateUserRequest = createAction("UPDATE_USER_REQUEST");
export const updateUserSuccess = createAction("UPDATE_USER_SUCCESS");
export const updateUserFailure = createAction("UPDATE_USER_FAILURE");
export const resetUpdateUserState = createAction("RESET_UPDATE_USER_STATE");

export const uploadFileRequest = createAction("UPLOAD_FILE_REQUEST");
export const uploadFileSuccess = createAction("UPLOAD_FILE_SUCCESS");
export const uploadFileFailure = createAction("UPLOAD_FILE_FAILURE");
export const resetUploadFile = createAction("RESET_UPLOAD_FILE");

export const deleteUserRequest = createAction("DELETE_USER_REQUEST");
export const deleteUserSuccess = createAction("DELETE_USER_SUCCESS");
export const deleteUserFailure = createAction("DELETE_USER_FAILURE");
export const resetDeleteUserState = createAction("RESET_DELETE_USER");

export const resetAuthState = createAction("RESET_AUTH_STATE");
