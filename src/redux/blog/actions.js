import { createAction } from "redux-actions";

export const getAllBlogsRequest = createAction("GET_ALL_BLOGS_REQUEST");
export const getAllBlogsSuccess = createAction("GET_ALL_BLOGS_SUCCESS");
export const getAllBlogsFailure = createAction("GET_ALL_BLOGS_FAILURE");

export const getDetailBlogsRequest = createAction("GET_DETAIL_BLOGS_REQUEST");
export const getDetailBlogsSuccess = createAction("GET_DETAIL_BLOGS_SUCCESS");
export const getDetailBlogsFailure = createAction("GET_DETAIL_BLOGS_FAILURE");

export const createBlogsRequest = createAction("CREATE_BLOGS_REQUEST");
export const createBlogsSuccess = createAction("CREATE_BLOGS_SUCCESS");
export const createBlogsFailure = createAction("CREATE_BLOGS_FAILURE");
export const resetCreateBlogs = createAction("RESET_CREATE_BLOGS");

export const updateBlogsRequest = createAction("UPDATE_BLOGS_REQUEST");
export const updateBlogsSuccess = createAction("UPDATE_BLOGS_SUCCESS");
export const updateBlogsFailure = createAction("UPDATE_BLOGS_FAILURE");
export const resetUpdateBlogs = createAction("RESET_UPDATE_BLOGS");

export const deleteBlogsRequest = createAction("DELETE_BLOGS_REQUEST");
export const deleteBlogsSuccess = createAction("DELETE_BLOGS_SUCCESS");
export const deleteBlogsFailure = createAction("DELETE_BLOGS_FAILURE");
export const resetDeleteBlogs = createAction("RESET_DELETE_BLOGS");

export const getListBlogsRequest = createAction("GET_LIST_BLOGS_REQUEST");
export const getListBlogsSuccess = createAction("GET_LIST_BLOGS_SUCCESS");
export const getListBlogsFailure = createAction("GET_LIST_BLOGS_FAILURE");
export const resetGetListBlogs = createAction("RESET_GET_LIST_BLOGS");

export const resetBlogsState = createAction("RESET_BLOGS_STATE");
