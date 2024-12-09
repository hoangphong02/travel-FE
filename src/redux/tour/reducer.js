import { handleActions } from "redux-actions";

import * as Actions from "./actions";

const initialState = {
  // Get All Food
  isGetAllTourRequest: false,
  isGetAllTourSuccess: false,
  isGetAllTourFailure: false,
  getAllTourState: {},
  // Get All Food
  isGetDetailTourRequest: false,
  isGetDetailTourSuccess: false,
  isGetDetailTourFailure: false,
  getDetailTourState: {},

  // Get All Food
  isGetAllTourMainRequest: false,
  isGetAllTourMainSuccess: false,
  isGetAllTourMainFailure: false,
  getAllTourMainState: {},

  // Get All Food
  isGetAllTourFlopRequest: false,
  isGetAllTourFlopSuccess: false,
  isGetAllTourFlopFailure: false,
  getAllTourFlopState: {},

  // Create Food
  isCreateTourRequest: false,
  isCreateTourSuccess: false,
  isCreateTourFailure: false,
  // Update Food
  isUpdateTourRequest: false,
  isUpdateTourSuccess: false,
  isUpdateTourFailure: false,
  // Delete Food
  isDeleteTourRequest: false,
  isDeleteTourSuccess: false,
  isDeleteTourFailure: false,
  // Get All Food
  isGetSlidesTourRequest: false,
  isGetSlidesTourSuccess: false,
  isGetSlidesTourFailure: false,
  getSlidesTourState: {},

  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Food
    [Actions.getAllTourRequest]: (state) => ({
      ...state,
      isGetAllTourRequest: true,
      isGetAllTourSuccess: false,
      isGetAllTourFailure: false,
    }),
    [Actions.getAllTourSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllTourRequest: false,
      isGetAllTourSuccess: true,
      isGetAllTourFailure: false,
      getAllTourState: payload,
    }),
    [Actions.getAllTourFailure]: (state, { payload }) => ({
      ...state,
      isGetAllTourRequest: false,
      isGetAllTourSuccess: false,
      isGetAllTourFailure: true,
      errorMessages: payload,
    }),
    // #region : Get All slides
    [Actions.getSlidesTourRequest]: (state) => ({
      ...state,
      isGetSlidesTourRequest: true,
      isGetSlidesTourSuccess: false,
      isGetSlidesTourFailure: false,
    }),
    [Actions.getSlidesTourSuccess]: (state, { payload }) => ({
      ...state,
      isGetSlidesTourRequest: false,
      isGetSlidesTourSuccess: true,
      isGetSlidesTourFailure: false,
      getSlidesTourState: payload,
    }),
    [Actions.getSlidesTourFailure]: (state, { payload }) => ({
      ...state,
      isGetSlidesTourRequest: false,
      isGetSlidesTourSuccess: false,
      isGetSlidesTourFailure: true,
      errorMessages: payload,
    }),

    // #region : Get All Food
    [Actions.getAllTourMainRequest]: (state) => ({
      ...state,
      isGetAllTourMainRequest: true,
      isGetAllTourMainSuccess: false,
      isGetAllTourMainFailure: false,
    }),
    [Actions.getAllTourMainSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllTourMainRequest: false,
      isGetAllTourMainSuccess: true,
      isGetAllTourMainFailure: false,
      getAllTourMainState: payload,
    }),
    [Actions.getAllTourMainFailure]: (state, { payload }) => ({
      ...state,
      isGetAllTourMainRequest: false,
      isGetAllTourMainSuccess: false,
      isGetAllTourMainFailure: true,
      errorMessages: payload,
    }),

    // #region : Get All Food
    [Actions.getAllTourFlopRequest]: (state) => ({
      ...state,
      isGetAllTourFlopRequest: true,
      isGetAllTourFlopSuccess: false,
      isGetAllTourFlopFailure: false,
    }),
    [Actions.getAllTourFlopSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllTourFlopRequest: false,
      isGetAllTourFlopSuccess: true,
      isGetAllTourFlopFailure: false,
      getAllTourFlopState: payload,
    }),
    [Actions.getAllTourFlopFailure]: (state, { payload }) => ({
      ...state,
      isGetAllTourFlopRequest: false,
      isGetAllTourFlopSuccess: false,
      isGetAllTourFlopFailure: true,
      errorMessages: payload,
    }),
    // #region : Get detail tour
    [Actions.getDetailTourRequest]: (state) => ({
      ...state,
      isGetDetailTourRequest: true,
      isGetDetailTourSuccess: false,
      isGetDetailTourFailure: false,
    }),
    [Actions.getDetailTourSuccess]: (state, { payload }) => ({
      ...state,
      isGetDetailTourRequest: false,
      isGetDetailTourSuccess: true,
      isGetDetailTourFailure: false,
      getDetailTourState: payload,
    }),
    [Actions.getDetailTourFailure]: (state, { payload }) => ({
      ...state,
      isGetDetailTourRequest: false,
      isGetDetailTourSuccess: false,
      isGetDetailTourFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Food
    [Actions.createTourRequest]: (state) => ({
      ...state,
      isCreateTourRequest: true,
      isCreateTourSuccess: false,
      isCreateTourFailure: false,
    }),
    [Actions.createTourSuccess]: (state) => ({
      ...state,
      isCreateTourRequest: false,
      isCreateTourSuccess: true,
      isCreateTourFailure: false,
    }),
    [Actions.createTourFailure]: (state, { payload }) => ({
      ...state,
      isCreateTourRequest: false,
      isCreateTourSuccess: false,
      isCreateTourFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateTour]: (state) => ({
      ...state,
      isCreateTourRequest: false,
      isCreateTourSuccess: false,
      isCreateTourFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Update Food
    [Actions.updateTourRequest]: (state) => ({
      ...state,
      isUpdateTourRequest: true,
      isUpdateTourSuccess: false,
      isUpdateTourFailure: false,
    }),
    [Actions.updateTourSuccess]: (state) => ({
      ...state,
      isUpdateTourRequest: false,
      isUpdateTourSuccess: true,
      isUpdateTourFailure: false,
    }),
    [Actions.updateTourFailure]: (state, { payload }) => ({
      ...state,
      isUpdateTourRequest: false,
      isUpdateTourSuccess: false,
      isUpdateTourFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateTour]: (state) => ({
      ...state,
      isUpdateTourRequest: false,
      isUpdateTourSuccess: false,
      isUpdateTourFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Delete Food
    [Actions.deleteTourRequest]: (state) => ({
      ...state,
      isDeleteTourRequest: true,
      isDeleteTourSuccess: false,
      isDeleteTourFailure: false,
    }),
    [Actions.deleteTourSuccess]: (state) => ({
      ...state,
      isDeleteTourRequest: false,
      isDeleteTourSuccess: true,
      isDeleteTourFailure: false,
    }),
    [Actions.deleteTourFailure]: (state, { payload }) => ({
      ...state,
      isDeleteTourRequest: false,
      isDeleteTourSuccess: false,
      isDeleteTourFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteTour]: (state) => ({
      ...state,
      isDeleteTourRequest: false,
      isDeleteTourSuccess: false,
      isDeleteTourFailure: false,
      errorMessages: [],
    }),

    // #region : Local
    [Actions.resetTourState]: () => initialState,
    // #endregion
  },
  initialState
);

export default reducer;
