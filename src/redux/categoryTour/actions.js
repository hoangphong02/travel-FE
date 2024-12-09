import { createAction } from "redux-actions";

export const getAllCategoryTourRequest = createAction(
  "GET_ALL_CATEGORY_TOUR_REQUEST"
);
export const getAllCategoryTourSuccess = createAction(
  "GET_ALL_CATEGORY_TOUR_SUCCESS"
);
export const getAllCategoryTourFailure = createAction(
  "GET_ALL_CATEGORY_TOUR_FAILURE"
);

export const createCategoryTourRequest = createAction(
  "CREATE_CATEGORY_TOUR_REQUEST"
);
export const createCategoryTourSuccess = createAction(
  "CREATE_CATEGORY_TOUR_SUCCESS"
);
export const createCategoryTourFailure = createAction(
  "CREATE_CATEGORY_TOUR_FAILURE"
);
export const resetCreateCategoryTour = createAction(
  "RESET_CREATE_CATEGORY_TOUR"
);

export const updateCategoryTourRequest = createAction(
  "UPDATE_CATEGORY_TOUR_REQUEST"
);
export const updateCategoryTourSuccess = createAction(
  "UPDATE_CATEGORY_TOUR_SUCCESS"
);
export const updateCategoryTourFailure = createAction(
  "UPDATE_CATEGORY_TOUR_FAILURE"
);
export const resetUpdateCategoryTour = createAction(
  "RESET_UPDATE_CATEGORY_TOUR"
);

export const deleteCategoryTourRequest = createAction(
  "DELETE_CATEGORY_TOUR_REQUEST"
);
export const deleteCategoryTourSuccess = createAction(
  "DELETE_CATEGORY_TOUR_SUCCESS"
);
export const deleteCategoryTourFailure = createAction(
  "DELETE_CATEGORY_TOUR_FAILURE"
);
export const resetDeleteCategoryTour = createAction(
  "RESET_DELETE_CATEGORY_TOUR"
);

export const resetCategoryTourState = createAction("RESET_CATEGORY_TOUR_STATE");
