import { handleActions } from "redux-actions";

import * as Actions from "./actions";

const initialState = {
  // Get All Food
  isGetAllCategoryTourRequest: false,
  isGetAllCategoryTourSuccess: false,
  isGetAllCategoryTourFailure: false,
  getAllCategoryTourState: {},
  // Create Food
  isCreateCategoryTourRequest: false,
  isCreateCategoryTourSuccess: false,
  isCreateCategoryTourFailure: false,
  // Update Food
  isUpdateCategoryTourRequest: false,
  isUpdateCategoryTourSuccess: false,
  isUpdateCategoryTourFailure: false,
  // Delete Food
  isDeleteCategoryTourRequest: false,
  isDeleteCategoryTourSuccess: false,
  isDeleteCategoryTourFailure: false,
  // Get List Categories
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Food
    [Actions.getAllCategoryTourRequest]: (state) => ({
      ...state,
      isGetAllCategoryTourRequest: true,
      isGetAllCategoryTourSuccess: false,
      isGetAllCategoryTourFailure: false,
    }),
    [Actions.getAllCategoryTourSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllCategoryTourRequest: false,
      isGetAllCategoryTourSuccess: true,
      isGetAllCategoryTourFailure: false,
      getAllCategoryTourState: payload,
    }),
    [Actions.getAllCategoryTourFailure]: (state, { payload }) => ({
      ...state,
      isGetAllCategoryTourRequest: false,
      isGetAllCategoryTourSuccess: false,
      isGetAllCategoryTourFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Food
    [Actions.createCategoryTourRequest]: (state) => ({
      ...state,
      isCreateCategoryTourRequest: true,
      isCreateCategoryTourSuccess: false,
      isCreateCategoryTourFailure: false,
    }),
    [Actions.createCategoryTourSuccess]: (state) => ({
      ...state,
      isCreateCategoryTourRequest: false,
      isCreateCategoryTourSuccess: true,
      isCreateCategoryTourFailure: false,
    }),
    [Actions.createCategoryTourFailure]: (state, { payload }) => ({
      ...state,
      isCreateCategoryTourRequest: false,
      isCreateCategoryTourSuccess: false,
      isCreateCategoryTourFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateCategoryTour]: (state) => ({
      ...state,
      isCreateCategoryTourRequest: false,
      isCreateCategoryTourSuccess: false,
      isCreateCategoryTourFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Update Food
    [Actions.updateCategoryTourRequest]: (state) => ({
      ...state,
      isUpdateCategoryTourRequest: true,
      isUpdateCategoryTourSuccess: false,
      isUpdateCategoryTourFailure: false,
    }),
    [Actions.updateCategoryTourSuccess]: (state) => ({
      ...state,
      isUpdateCategoryTourRequest: false,
      isUpdateCategoryTourSuccess: true,
      isUpdateCategoryTourFailure: false,
    }),
    [Actions.updateCategoryTourFailure]: (state, { payload }) => ({
      ...state,
      isUpdateCategoryTourRequest: false,
      isUpdateCategoryTourSuccess: false,
      isUpdateCategoryTourFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateCategoryTour]: (state) => ({
      ...state,
      isUpdateCategoryTourRequest: false,
      isUpdateCategoryTourSuccess: false,
      isUpdateCategoryTourFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Delete Food
    [Actions.deleteCategoryTourRequest]: (state) => ({
      ...state,
      isDeleteCategoryTourRequest: true,
      isDeleteCategoryTourSuccess: false,
      isDeleteCategoryTourFailure: false,
    }),
    [Actions.deleteCategoryTourSuccess]: (state) => ({
      ...state,
      isDeleteCategoryTourRequest: false,
      isDeleteCategoryTourSuccess: true,
      isDeleteCategoryTourFailure: false,
    }),
    [Actions.deleteCategoryTourFailure]: (state, { payload }) => ({
      ...state,
      isDeleteCategoryTourRequest: false,
      isDeleteCategoryTourSuccess: false,
      isDeleteCategoryTourFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteCategoryTour]: (state) => ({
      ...state,
      isDeleteCategoryTourRequest: false,
      isDeleteCategoryTourSuccess: false,
      isDeleteCategoryTourFailure: false,
      errorMessages: [],
    }),

    // #region : Local
    [Actions.resetCategoryTourState]: () => initialState,
    // #endregion
  },
  initialState
);

export default reducer;
