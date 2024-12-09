import { handleActions } from "redux-actions";

import * as Actions from "./actions";

const initialState = {
  // Get All Food
  isGetAllCategoryRequest: false,
  isGetAllCategorySuccess: false,
  isGetAllCategoryFailure: false,
  getAllCategoryState: {},
  // Create Food
  isCreateCategoryRequest: false,
  isCreateCategorySuccess: false,
  isCreateCategoryFailure: false,
  // Update Food
  isUpdateCategoryRequest: false,
  isUpdateCategorySuccess: false,
  isUpdateCategoryFailure: false,
  // Delete Food
  isDeleteCategoryRequest: false,
  isDeleteCategorySuccess: false,
  isDeleteCategoryFailure: false,
  // Get List Categories
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Food
    [Actions.getAllCategoryRequest]: (state) => ({
      ...state,
      isGetAllCategoryRequest: true,
      isGetAllCategorySuccess: false,
      isGetAllCategoryFailure: false,
    }),
    [Actions.getAllCategorySuccess]: (state, { payload }) => ({
      ...state,
      isGetAllCategoryRequest: false,
      isGetAllCategorySuccess: true,
      isGetAllCategoryFailure: false,
      getAllCategoryState: payload,
    }),
    [Actions.getAllCategoryFailure]: (state, { payload }) => ({
      ...state,
      isGetAllCategoryRequest: false,
      isGetAllCategorySuccess: false,
      isGetAllCategoryFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Food
    [Actions.createCategoryRequest]: (state) => ({
      ...state,
      isCreateCategoryRequest: true,
      isCreateCategorySuccess: false,
      isCreateCategoryFailure: false,
    }),
    [Actions.createCategorySuccess]: (state) => ({
      ...state,
      isCreateCategoryRequest: false,
      isCreateCategorySuccess: true,
      isCreateCategoryFailure: false,
    }),
    [Actions.createCategoryFailure]: (state, { payload }) => ({
      ...state,
      isCreateCategoryRequest: false,
      isCreateCategorySuccess: false,
      isCreateCategoryFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateCategory]: (state) => ({
      ...state,
      isCreateCategoryRequest: false,
      isCreateCategorySuccess: false,
      isCreateCategoryFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Update Food
    [Actions.updateCategoryRequest]: (state) => ({
      ...state,
      isUpdateCategoryRequest: true,
      isUpdateCategorySuccess: false,
      isUpdateCategoryFailure: false,
    }),
    [Actions.updateCategorySuccess]: (state) => ({
      ...state,
      isUpdateCategoryRequest: false,
      isUpdateCategorySuccess: true,
      isUpdateCategoryFailure: false,
    }),
    [Actions.updateCategoryFailure]: (state, { payload }) => ({
      ...state,
      isUpdateCategoryRequest: false,
      isUpdateCategorySuccess: false,
      isUpdateCategoryFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateCategory]: (state) => ({
      ...state,
      isUpdateCategoryRequest: false,
      isUpdateCategorySuccess: false,
      isUpdateCategoryFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Delete Food
    [Actions.deleteCategoryRequest]: (state) => ({
      ...state,
      isDeleteCategoryRequest: true,
      isDeleteCategorySuccess: false,
      isDeleteCategoryFailure: false,
    }),
    [Actions.deleteCategorySuccess]: (state) => ({
      ...state,
      isDeleteCategoryRequest: false,
      isDeleteCategorySuccess: true,
      isDeleteCategoryFailure: false,
    }),
    [Actions.deleteCategoryFailure]: (state, { payload }) => ({
      ...state,
      isDeleteCategoryRequest: false,
      isDeleteCategorySuccess: false,
      isDeleteCategoryFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteCategory]: (state) => ({
      ...state,
      isDeleteCategoryRequest: false,
      isDeleteCategorySuccess: false,
      isDeleteCategoryFailure: false,
      errorMessages: [],
    }),

    // #region : Local
    [Actions.resetCategoryState]: () => initialState,
    // #endregion
  },
  initialState
);

export default reducer;
