import { createAction } from "redux-actions";

export const getAllCommentsRequest = createAction("GET_ALL_COMMENTS_REQUEST");
export const getAllCommentsSuccess = createAction("GET_ALL_COMMENTS_SUCCESS");
export const getAllCommentsFailure = createAction("GET_ALL_COMMENTS_FAILURE");

export const createCommentsRequest = createAction("CREATE_COMMENTS_REQUEST");
export const createCommentsSuccess = createAction("CREATE_COMMENTS_SUCCESS");
export const createCommentsFailure = createAction("CREATE_COMMENTS_FAILURE");
export const resetCreateComments = createAction("RESET_CREATE_COMMENTS");

export const updateCommentsRequest = createAction("UPDATE_COMMENTS_REQUEST");
export const updateCommentsSuccess = createAction("UPDATE_COMMENTS_SUCCESS");
export const updateCommentsFailure = createAction("UPDATE_COMMENTS_FAILURE");
export const resetUpdateComments = createAction("RESET_UPDATE_COMMENTS");

export const deleteCommentsRequest = createAction("DELETE_COMMENTS_REQUEST");
export const deleteCommentsSuccess = createAction("DELETE_COMMENTS_SUCCESS");
export const deleteCommentsFailure = createAction("DELETE_COMMENTS_FAILURE");
export const resetDeleteComments = createAction("RESET_DELETE_COMMENTS");

export const replyCommentsRequest = createAction("REPLY_COMMENTS_REQUEST");
export const replyCommentsSuccess = createAction("REPLY_COMMENTS_SUCCESS");
export const replyCommentsFailure = createAction("REPLY_COMMENTS_FAILURE");
export const resetReplyComments = createAction("RESET_REPLY_COMMENTS");

export const resetCommentsState = createAction("RESET_COMMENTS_STATE");
