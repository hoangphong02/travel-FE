import { handleActions } from "redux-actions";

import * as Actions from "./actions";

const initialState = {
  // Get All Blogs
  isGetAllBlogsRequest: false,
  isGetAllBlogsSuccess: false,
  isGetAllBlogsFailure: false,
  getAllBlogsState: {},
  // Get All Food
  isGetDetailBlogRequest: false,
  isGetDetailBlogSuccess: false,
  isGetDetailBlogFailure: false,
  getDetailBlogState: {},
  // Create Blogs
  isCreateBlogsRequest: false,
  isCreateBlogsSuccess: false,
  isCreateBlogsFailure: false,
  // Update Blogs
  isUpdateBlogsRequest: false,
  isUpdateBlogsSuccess: false,
  isUpdateBlogsFailure: false,
  // Delete Blogs
  isDeleteBlogsRequest: false,
  isDeleteBlogsSuccess: false,
  isDeleteBlogsFailure: false,

  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Food
    [Actions.getAllBlogsRequest]: (state) => ({
      ...state,
      isGetAllBlogsRequest: true,
      isGetAllBlogsSuccess: false,
      isGetAllBlogsFailure: false,
    }),
    [Actions.getAllBlogsSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllBlogsRequest: false,
      isGetAllBlogsSuccess: true,
      isGetAllBlogsFailure: false,
      getAllBlogsState: payload,
    }),
    [Actions.getAllBlogsFailure]: (state, { payload }) => ({
      ...state,
      isGetAllBlogsRequest: false,
      isGetAllBlogsSuccess: false,
      isGetAllBlogsFailure: true,
      errorMessages: payload,
    }),
    // #endregion

    // #region : Get detail tour
    [Actions.getDetailBlogsRequest]: (state) => ({
      ...state,
      isGetDetailBlogRequest: true,
      isGetDetailBlogSuccess: false,
      isGetDetailBlogFailure: false,
    }),
    [Actions.getDetailBlogsSuccess]: (state, { payload }) => ({
      ...state,
      isGetDetailBlogRequest: false,
      isGetDetailBlogSuccess: true,
      isGetDetailBlogFailure: false,
      getDetailBlogState: payload,
    }),
    [Actions.getListBlogsFailure]: (state, { payload }) => ({
      ...state,
      isGetDetailBlogRequest: false,
      isGetDetailBlogSuccess: false,
      isGetDetailBlogFailure: true,
      errorMessages: payload,
    }),

    // #region : Create blog
    [Actions.createBlogsRequest]: (state) => ({
      ...state,
      isCreateBlogsRequest: true,
      isCreateBlogsSuccess: false,
      isCreateBlogsFailure: false,
    }),
    [Actions.createBlogsSuccess]: (state) => ({
      ...state,
      isCreateBlogsRequest: false,
      isCreateBlogsSuccess: true,
      isCreateBlogsFailure: false,
    }),
    [Actions.createBlogsFailure]: (state, { payload }) => ({
      ...state,
      isCreateBlogsRequest: false,
      isCreateBlogsSuccess: false,
      isCreateBlogsFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateBlogs]: (state) => ({
      ...state,
      isCreateBlogsRequest: false,
      isCreateBlogsSuccess: false,
      isCreateBlogsFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Update Food
    [Actions.updateBlogsRequest]: (state) => ({
      ...state,
      isUpdateBlogsRequest: true,
      isUpdateBlogsSuccess: false,
      isUpdateBlogsFailure: false,
    }),
    [Actions.updateBlogsSuccess]: (state) => ({
      ...state,
      isUpdateBlogsRequest: false,
      isUpdateBlogsSuccess: true,
      isUpdateBlogsFailure: false,
    }),
    [Actions.updateBlogsFailure]: (state, { payload }) => ({
      ...state,
      isUpdateBlogsRequest: false,
      isUpdateBlogsSuccess: false,
      isUpdateBlogsFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateBlogs]: (state) => ({
      ...state,
      isUpdateBlogsRequest: false,
      isUpdateBlogsSuccess: false,
      isUpdateBlogsFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Delete Food
    [Actions.deleteBlogsRequest]: (state) => ({
      ...state,
      isDeleteBlogsRequest: true,
      isDeleteBlogsSuccess: false,
      isDeleteBlogsFailure: false,
    }),
    [Actions.deleteBlogsSuccess]: (state) => ({
      ...state,
      isDeleteBlogsRequest: false,
      isDeleteBlogsSuccess: true,
      isDeleteBlogsFailure: false,
    }),
    [Actions.deleteBlogsFailure]: (state, { payload }) => ({
      ...state,
      isDeleteBlogsRequest: false,
      isDeleteBlogsSuccess: false,
      isDeleteBlogsFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteBlogs]: (state) => ({
      ...state,
      isDeleteBlogsRequest: false,
      isDeleteBlogsSuccess: false,
      isDeleteBlogsFailure: false,
      errorMessages: [],
    }),

    // #region : Local
    [Actions.resetBlogsState]: () => initialState,
    // #endregion
  },
  initialState
);

export default reducer;
