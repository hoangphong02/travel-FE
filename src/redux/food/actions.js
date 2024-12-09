import { createAction } from "redux-actions";

export const getAllFoodsRequest = createAction("GET_ALL_FOODS_REQUEST");
export const getAllFoodsSuccess = createAction("GET_ALL_FOODS_SUCCESS");
export const getAllFoodsFailure = createAction("GET_ALL_FOODS_FAILURE");

export const createFoodsRequest = createAction("CREATE_FOODS_REQUEST");
export const createFoodsSuccess = createAction("CREATE_FOODS_SUCCESS");
export const createFoodsFailure = createAction("CREATE_FOODS_FAILURE");
export const resetCreateFoods = createAction("RESET_CREATE_FOODS");

export const updateFoodsRequest = createAction("UPDATE_FOODS_REQUEST");
export const updateFoodsSuccess = createAction("UPDATE_FOODS_SUCCESS");
export const updateFoodsFailure = createAction("UPDATE_FOODS_FAILURE");
export const resetUpdateFoods = createAction("RESET_UPDATE_FOODS");

export const deleteFoodsRequest = createAction("DELETE_FOODS_REQUEST");
export const deleteFoodsSuccess = createAction("DELETE_FOODS_SUCCESS");
export const deleteFoodsFailure = createAction("DELETE_FOODS_FAILURE");
export const resetDeleteFoods = createAction("RESET_DELETE_FOODS");

export const getListFoodsRequest = createAction("GET_LIST_FOODS_REQUEST");
export const getListFoodsSuccess = createAction("GET_LIST_FOODS_SUCCESS");
export const getListFoodsFailure = createAction("GET_LIST_FOODS_FAILURE");
export const resetGetListFoods = createAction("RESET_GET_LIST_FOODS");

export const resetFoodState = createAction("RESET_FOODS_STATE");
