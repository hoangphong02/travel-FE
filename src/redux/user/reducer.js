import { handleActions } from "redux-actions";

import * as Actions from "./actions";

const initialState = {
  isCallApiFirstTime: false,
  //
  isGetProfileRequest: false,
  isGetProfileSuccess: false,
  isGetProfileFailure: false,
  profileResponse: {},
  //
  isGetConfigRequest: false,
  isGetConfigSuccess: false,
  isGetConfigFailure: false,
  configResponse: {},

  isGetAllUsersRequest: false,
  isGetAllUsersSuccess: false,
  isGetAllUsersFailure: false,
  getAllUsersState: {},
  //

  isGetWorkSchedulesRequest: false,
  isGetWorkSchedulesSuccess: false,
  isGetWorkSchedulesFailure: false,
  getWorkSchedulesState: {},
  errorMessages: [],
};

const reducer = handleActions(
  {
    [Actions.getAllUserRequest]: (state) => ({
      ...state,
      isGetAllUsersRequest: true,
      isGetAllUsersSuccess: false,
      isGetAllUsersFailure: false,
    }),
    [Actions.getAllUserSuccess]: (state, { payload }) => ({
      ...state,
      isGetAllUsersRequest: false,
      isGetAllUsersSuccess: true,
      isGetAllUsersFailure: false,
      getAllUsersState: payload,
    }),
    [Actions.getAllUserFailure]: (state, { payload }) => ({
      ...state,
      isGetAllUsersRequest: false,
      isGetAllUsersSuccess: false,
      isGetAllUsersFailure: true,
      errorMessages: payload,
    }),
    // get work schedules
    [Actions.getWorkSchedulesRequest]: (state) => ({
      ...state,
      isGetWorkSchedulesRequest: true,
      isGetWorkSchedulesSuccess: false,
      isGetWorkSchedulesFailure: false,
      getWorkSchedulesState: {},
    }),
    [Actions.getWorkSchedulesSuccess]: (state, { payload }) => ({
      ...state,
      isGetWorkSchedulesRequest: false,
      isGetWorkSchedulesSuccess: true,
      isGetWorkSchedulesFailure: false,
      getWorkSchedulesState: payload,
    }),
    [Actions.getWorkSchedulesFailure]: (state, { payload }) => ({
      ...state,
      isGetWorkSchedulesRequest: false,
      isGetWorkSchedulesSuccess: false,
      isGetWorkSchedulesFailure: true,
      errorMessages: payload,
    }),
    // #region : Get Profile
    [Actions.getProfileRequest]: (state) => ({
      ...state,
      isCallApiFirstTime: false,
      isGetProfileRequest: true,
      isGetProfileSuccess: false,
      isGetProfileFailure: false,
    }),
    [Actions.getProfileSuccess]: (state, { payload }) => ({
      ...state,
      isCallApiFirstTime: true,
      isGetProfileRequest: false,
      isGetProfileSuccess: true,
      isGetProfileFailure: false,
      profileResponse: payload,
    }),
    [Actions.getProfileFailure]: (state, { payload }) => ({
      ...state,
      isCallApiFirstTime: false,
      isGetProfileRequest: false,
      isGetProfileSuccess: false,
      isGetProfileFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetProfileState]: (state) => ({
      ...state,
      isGetProfileRequest: false,
      isGetProfileSuccess: false,
      isGetProfileFailure: false,
      profileResponse: {},
      errorMessages: [],
    }),
    // #endregion
    // #region : Get Profile
    [Actions.getConfigRequest]: (state) => ({
      ...state,
      isGetConfigRequest: true,
      isGetConfigSuccess: false,
      isGetConfigFailure: false,
    }),
    [Actions.getConfigSuccess]: (state, { payload }) => ({
      ...state,
      isGetConfigRequest: false,
      isGetConfigSuccess: true,
      isGetConfigFailure: false,
      configResponse: payload,
    }),
    [Actions.getConfigFailure]: (state, { payload }) => ({
      ...state,
      isGetConfigRequest: false,
      isGetConfigSuccess: false,
      isGetConfigFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Local
    [Actions.updateAddressesConfig]: (state, { payload }) => ({
      ...state,
      configResponse: {
        ...state.configResponse,
        data: {
          ...state.configResponse.data,
          addresses:
            payload.type === "create"
              ? [
                  ...state.configResponse.data.addresses.map((item) => {
                    const response = payload.data;
                    if (response.apply) {
                      return {
                        ...item,
                        apply: false,
                      };
                    } else {
                      return item;
                    }
                  }),
                  payload.data,
                ]
              : payload.type === "update"
                ? [
                    ...state.configResponse.data.addresses.map((item) => {
                      const response = payload.data;
                      if (item.id === response.id) {
                        return response;
                      } else if (item.id !== response.id) {
                        if (response.apply) {
                          return {
                            ...item,
                            apply: false,
                          };
                        } else {
                          return item;
                        }
                      }
                    }),
                  ]
                : payload.type === "delete"
                  ? [
                      ...state.configResponse.data.addresses.filter(
                        (item) => item.id !== payload.id
                      ),
                    ]
                  : [...state.configResponse.data.addresses],
        },
      },
    }),
    [Actions.updateAddressesProfile]: (state, { payload }) => ({
      ...state,
      profileResponse: {
        ...state.profileResponse,
        data: {
          ...state.profileResponse.data,
          address: {
            data: { ...payload },
          },
        },
      },
    }),
    [Actions.updateInformationUserRequest]: (state, { payload }) => ({
      ...state,
      profileResponse: {
        ...state.profileResponse,
        data: {
          ...payload.data,
        },
      },
    }),
    [Actions.changePointRequest]: (state, { payload }) => ({
      ...state,
      profileResponse: {
        ...state.profileResponse,
        data: {
          ...state.profileResponse.data,
          point: state.profileResponse.data.point - payload.point,
        },
      },
    }),
    [Actions.callApiFirstTimeRequest]: (state) => ({
      ...state,
      isCallApiFirstTime: false,
    }),
    [Actions.resetUserState]: () => initialState,
    // #endregion
  },
  initialState
);

export default reducer;
