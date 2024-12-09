import { handleActions } from "redux-actions";

import * as Actions from "./actions";

const initialState = {
  //
  isCheckUserExistsRequest: false,
  isCheckUserExistsSuccess: false,
  isCheckUserExistsFailure: false,
  checkUserExistsResponse: {},
  //
  isLoginRequest: false,
  isLoginSuccess: false,
  isLoginFailure: false,
  loginResponse: {},
  //
  isRegisterRequest: false,
  isRegisterSuccess: false,
  isRegisterFailure: false,
  //
  isUpdateUserRequest: false,
  isUpdateUserSuccess: false,
  isUpdateUserFailure: false,
  updateUserResponse: {},
  //
  isUploadFileRequest: false,
  isUploadFileSuccess: false,
  isUploadFileFailure: false,
  uploadFileResponse: {},

  // Delete user
  isDeleteUserRequest: false,
  isDeleteUserSuccess: false,
  isDeleteUserFailure: false,
  //
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Check User Exists
    [Actions.checkUserExistsRequest]: (state) => ({
      ...state,
      isCheckUserExistsRequest: true,
      isCheckUserExistsSuccess: false,
      isCheckUserExistsFailure: false,
    }),
    [Actions.checkUserExistsSuccess]: (state, { payload }) => ({
      ...state,
      isCheckUserExistsRequest: false,
      isCheckUserExistsSuccess: true,
      isCheckUserExistsFailure: false,
      checkUserExistsResponse: payload,
    }),
    [Actions.checkUserExistsFailure]: (state, { payload }) => ({
      ...state,
      isCheckUserExistsRequest: false,
      isCheckUserExistsSuccess: false,
      isCheckUserExistsFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Login
    [Actions.loginRequest]: (state) => ({
      ...state,
      isLoginRequest: true,
      isLoginSuccess: false,
      isLoginFailure: false,
    }),
    [Actions.loginSuccess]: (state, { payload }) => ({
      ...state,
      isLoginRequest: false,
      isLoginSuccess: true,
      isLoginFailure: false,
      loginResponse: payload,
    }),
    [Actions.loginFailure]: (state, { payload }) => ({
      ...state,
      isLoginRequest: false,
      isLoginSuccess: false,
      isLoginFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Register
    [Actions.registerRequest]: (state) => ({
      ...state,
      isRegisterRequest: true,
      isRegisterSuccess: false,
      isRegisterFailure: false,
    }),
    [Actions.registerSuccess]: (state) => ({
      ...state,
      isRegisterRequest: false,
      isRegisterSuccess: true,
      isRegisterFailure: false,
    }),
    [Actions.registerFailure]: (state, { payload }) => ({
      ...state,
      isRegisterRequest: false,
      isRegisterSuccess: false,
      isRegisterFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetRegisterState]: (state) => ({
      ...state,
      isRegisterRequest: false,
      isRegisterSuccess: false,
      isRegisterFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Register
    [Actions.uploadFileRequest]: (state) => ({
      ...state,
      isUploadFileRequest: true,
      isUploadFileSuccess: false,
      isUploadFileFailure: false,
    }),
    [Actions.uploadFileSuccess]: (state, { payload }) => ({
      ...state,
      isUploadFileRequest: false,
      isUploadFileSuccess: true,
      isUploadFileFailure: false,
      uploadFileResponse: payload,
    }),
    [Actions.uploadFileFailure]: (state, { payload }) => ({
      ...state,
      isUploadFileRequest: false,
      isUploadFileSuccess: false,
      isUploadFileFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUploadFile]: (state) => ({
      ...state,
      isUploadFileRequest: false,
      isUploadFileSuccess: false,
      isUploadFileFailure: false,
      uploadFileResponse: {},
      errorMessages: [],
    }),
    // #endregion
    // #region : Update User
    [Actions.updateUserRequest]: (state) => ({
      ...state,
      isUpdateUserRequest: true,
      isUpdateUserSuccess: false,
      isUpdateUserFailure: false,
    }),
    [Actions.updateUserSuccess]: (state, { payload }) => ({
      ...state,
      isUpdateUserRequest: false,
      isUpdateUserSuccess: true,
      isUpdateUserFailure: false,
      updateUserResponse: payload,
    }),
    [Actions.updateUserFailure]: (state, { payload }) => ({
      ...state,
      isUpdateUserRequest: false,
      isUpdateUserSuccess: false,
      isUpdateUserFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateUserState]: (state) => ({
      ...state,
      isUpdateUserRequest: false,
      isUpdateUserSuccess: false,
      isUpdateUserFailure: false,
      updateUserResponse: {},
      errorMessages: [],
    }),

    // #region : Delete User
    [Actions.deleteUserRequest]: (state) => ({
      ...state,
      isDeleteUserRequest: true,
      isDeleteUserSuccess: false,
      isDeleteUserFailure: false,
    }),
    [Actions.deleteUserSuccess]: (state) => ({
      ...state,
      isDeleteUserRequest: false,
      isDeleteUserSuccess: true,
      isDeleteUserFailure: false,
    }),
    [Actions.deleteUserFailure]: (state, { payload }) => ({
      ...state,
      isDeleteUserRequest: false,
      isDeleteUserSuccess: false,
      isDeleteUserFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteUserState]: (state) => ({
      ...state,
      isDeleteUserRequest: false,
      isDeleteUserSuccess: false,
      isDeleteUserFailure: false,
      errorMessages: [],
    }),

    // #endregion
    // #region : Local
    [Actions.resetAuthState]: () => initialState,
    // #endregion
  },
  initialState
);

export default reducer;
