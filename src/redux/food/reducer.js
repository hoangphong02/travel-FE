import { handleActions } from "redux-actions";

import * as Actions from "./actions";

const initialState = {
  // Get All Food
  isGetAllFoodsRequest: false,
  isGetAllFoodsSuccess: false,
  isGetAllFoodsFailure: false,
  getAllFoodsState: {},
  // Create Food
  isCreateFoodRequest: false,
  isCreateFoodSuccess: false,
  isCreateFoodFailure: false,
  // Update Food
  isUpdateFoodRequest: false,
  isUpdateFoodSuccess: false,
  isUpdateFoodFailure: false,
  // Delete Food
  isDeleteFoodRequest: false,
  isDeleteFoodSuccess: false,
  isDeleteFoodFailure: false,
  // Get List Categories
  isGetListCategoriesRequest: false,
  isGetListCategoriesSuccess: false,
  isGetListCategoriesFailure: false,
  getListCategoriesState: {},
  // Get List Foods
  isGetListFoodsRequest: false,
  isGetListFoodsSuccess: false,
  isGetListFoodsFailure: false,
  getListFoodsState: {},
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Food
    [Actions.getAllFoodsRequest]: (state) => ({
      ...state,
      isGetAllFoodsRequest: true,
      isGetAllFoodsSuccess: false,
      isGetAllFoodsFailure: false,
    }),
    [Actions.getAllFoodsSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllFoodsRequest: false,
      isGetAllFoodsSuccess: true,
      isGetAllFoodsFailure: false,
      getAllFoodsState: payload,
    }),
    [Actions.getAllFoodsFailure]: (state, { payload }) => ({
      ...state,
      isGetAllFoodsRequest: false,
      isGetAllFoodsSuccess: false,
      isGetAllFoodsFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Food
    [Actions.createFoodsRequest]: (state) => ({
      ...state,
      isCreateFoodRequest: true,
      isCreateFoodSuccess: false,
      isCreateFoodFailure: false,
    }),
    [Actions.createFoodsSuccess]: (state) => ({
      ...state,
      isCreateFoodRequest: false,
      isCreateFoodSuccess: true,
      isCreateFoodFailure: false,
    }),
    [Actions.createFoodsFailure]: (state, { payload }) => ({
      ...state,
      isCreateFoodRequest: false,
      isCreateFoodSuccess: false,
      isCreateFoodFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateFoods]: (state) => ({
      ...state,
      isCreateFoodRequest: false,
      isCreateFoodSuccess: false,
      isCreateFoodFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Update Food
    [Actions.updateFoodsRequest]: (state) => ({
      ...state,
      isUpdateFoodRequest: true,
      isUpdateFoodSuccess: false,
      isUpdateFoodFailure: false,
    }),
    [Actions.updateFoodsSuccess]: (state) => ({
      ...state,
      isUpdateFoodRequest: false,
      isUpdateFoodSuccess: true,
      isUpdateFoodFailure: false,
    }),
    [Actions.updateFoodsFailure]: (state, { payload }) => ({
      ...state,
      isUpdateFoodRequest: false,
      isUpdateFoodSuccess: false,
      isUpdateFoodFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateFoods]: (state) => ({
      ...state,
      isUpdateFoodRequest: false,
      isUpdateFoodSuccess: false,
      isUpdateFoodFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Delete Food
    [Actions.deleteFoodsRequest]: (state) => ({
      ...state,
      isDeleteFoodRequest: true,
      isDeleteFoodSuccess: false,
      isDeleteFoodFailure: false,
    }),
    [Actions.deleteFoodsSuccess]: (state) => ({
      ...state,
      isDeleteFoodRequest: false,
      isDeleteFoodSuccess: true,
      isDeleteFoodFailure: false,
    }),
    [Actions.deleteFoodsFailure]: (state, { payload }) => ({
      ...state,
      isDeleteFoodRequest: false,
      isDeleteFoodSuccess: false,
      isDeleteFoodFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteFoods]: (state) => ({
      ...state,
      isDeleteFoodRequest: false,
      isDeleteFoodSuccess: false,
      isDeleteFoodFailure: false,
      errorMessages: [],
    }),

    // #endregion
    // #region : Get List Foods
    [Actions.getListFoodsRequest]: (state) => ({
      ...state,
      isGetListFoodsRequest: true,
      isGetListFoodsSuccess: false,
      isGetListFoodsFailure: false,
    }),
    [Actions.getListFoodsSuccess]: (state, { payload }) => ({
      ...state,
      isGetListFoodsRequest: false,
      isGetListFoodsSuccess: true,
      isGetListFoodsFailure: false,
      getListFoodsState: payload,
    }),
    [Actions.getListFoodsFailure]: (state, { payload }) => ({
      ...state,
      isGetListFoodsRequest: false,
      isGetListFoodsSuccess: false,
      isGetListFoodsFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetListFoods]: (state) => ({
      ...state,
      isGetListFoodsRequest: false,
      isGetListFoodsSuccess: false,
      isGetListFoodsFailure: false,
      getListFoodsState: {},
      errorMessages: [],
    }),
    // #endregion

    // #region : Local
    [Actions.resetFoodState]: () => initialState,
    // #endregion
  },
  initialState
);

export default reducer;
