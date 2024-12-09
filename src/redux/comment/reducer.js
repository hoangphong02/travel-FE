import { handleActions } from "redux-actions";

import * as Actions from "./actions";

const initialState = {
  // Get All Comments
  isGetAllCommentsRequest: false,
  isGetAllCommentsSuccess: false,
  isGetAllCommentsFailure: false,
  getAllCommentsState: {},
  // Create Comments
  isCreateCommentsRequest: false,
  isCreateCommentsSuccess: false,
  isCreateCommentsFailure: false,
  // Update Comments
  isUpdateCommentsRequest: false,
  isUpdateCommentsSuccess: false,
  isUpdateCommentsFailure: false,
  // Delete Comments
  isDeleteCommentsRequest: false,
  isDeleteCommentsSuccess: false,
  isDeleteCommentsFailure: false,
  // Create Comments
  isReplyCommentsRequest: false,
  isReplyCommentsSuccess: false,
  isReplyCommentsFailure: false,

  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Comments
    [Actions.getAllCommentsRequest]: (state) => ({
      ...state,
      isGetAllCommentsRequest: true,
      isGetAllCommentsSuccess: false,
      isGetAllCommentsFailure: false,
    }),
    [Actions.getAllCommentsSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllCommentsRequest: false,
      isGetAllCommentsSuccess: true,
      isGetAllCommentsFailure: false,
      getAllCommentsState: payload,
    }),
    [Actions.getAllCommentsFailure]: (state, { payload }) => ({
      ...state,
      isGetAllCommentsRequest: false,
      isGetAllCommentsSuccess: false,
      isGetAllCommentsFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Comments
    [Actions.createCommentsRequest]: (state) => ({
      ...state,
      isCreateCommentsRequest: true,
      isCreateCommentsSuccess: false,
      isCreateCommentsFailure: false,
    }),
    [Actions.createCommentsSuccess]: (state) => ({
      ...state,
      isCreateCommentsRequest: false,
      isCreateCommentsSuccess: true,
      isCreateCommentsFailure: false,
    }),
    [Actions.createCommentsFailure]: (state, { payload }) => ({
      ...state,
      isCreateCommentsRequest: false,
      isCreateCommentsSuccess: false,
      isCreateCommentsFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateComments]: (state) => ({
      ...state,
      isCreateCommentsRequest: false,
      isCreateCommentsSuccess: false,
      isCreateCommentsFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Create Comments
    [Actions.replyCommentsRequest]: (state) => ({
      ...state,
      isReplyCommentsRequest: true,
      isReplyCommentsSuccess: false,
      isReplyCommentsFailure: false,
    }),
    [Actions.replyCommentsSuccess]: (state) => ({
      ...state,
      isReplyCommentsRequest: false,
      isReplyCommentsSuccess: true,
      isReplyCommentsFailure: false,
    }),
    [Actions.replyCommentsFailure]: (state, { payload }) => ({
      ...state,
      isReplyCommentsRequest: false,
      isReplyCommentsSuccess: false,
      isReplyCommentsFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetReplyComments]: (state) => ({
      ...state,
      isReplyCommentsRequest: false,
      isReplyCommentsSuccess: false,
      isReplyCommentsFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Update Comments
    [Actions.updateCommentsRequest]: (state) => ({
      ...state,
      isUpdateCommentsRequest: true,
      isUpdateCommentsSuccess: false,
      isUpdateCommentsFailure: false,
    }),
    [Actions.updateCommentsSuccess]: (state) => ({
      ...state,
      isUpdateCommentsRequest: false,
      isUpdateCommentsSuccess: true,
      isUpdateCommentsFailure: false,
    }),
    [Actions.updateCommentsFailure]: (state, { payload }) => ({
      ...state,
      isUpdateCommentsRequest: false,
      isUpdateCommentsSuccess: false,
      isUpdateCommentsFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateComments]: (state) => ({
      ...state,
      isUpdateCommentsRequest: false,
      isUpdateCommentsSuccess: false,
      isUpdateCommentsFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Delete Comments
    [Actions.deleteCommentsRequest]: (state) => ({
      ...state,
      isDeleteCommentsRequest: true,
      isDeleteCommentsSuccess: false,
      isDeleteCommentsFailure: false,
    }),
    [Actions.deleteCommentsSuccess]: (state) => ({
      ...state,
      isDeleteCommentsRequest: false,
      isDeleteCommentsSuccess: true,
      isDeleteCommentsFailure: false,
    }),
    [Actions.deleteCommentsFailure]: (state, { payload }) => ({
      ...state,
      isDeleteCommentsRequest: false,
      isDeleteCommentsSuccess: false,
      isDeleteCommentsFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteComments]: (state) => ({
      ...state,
      isDeleteCommentsRequest: false,
      isDeleteCommentsSuccess: false,
      isDeleteCommentsFailure: false,
      errorMessages: [],
    }),

    // #endregion

    // #region : Local
    [Actions.resetCommentsState]: () => initialState,
    // #endregion
  },
  initialState
);

export default reducer;
