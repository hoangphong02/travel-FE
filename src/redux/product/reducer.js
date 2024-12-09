import { handleActions } from 'redux-actions';

import * as Actions from './actions';

const initialState = {
  // Get All Product
  isFirstGetAllProducts: false,
  isGetAllProductsRequest: false,
  isGetAllProductsSuccess: false,
  isGetAllProductsFailure: false,
  getAllProductsState: {},
  // Create Product
  isCreateProductRequest: false,
  isCreateProductSuccess: false,
  isCreateProductFailure: false,
  // Update Product
  isUpdateProductRequest: false,
  isUpdateProductSuccess: false,
  isUpdateProductFailure: false,
  // Delete Product
  isDeleteProductRequest: false,
  isDeleteProductSuccess: false,
  isDeleteProductFailure: false,
  // Get List Categories
  isGetListCategoriesRequest: false,
  isGetListCategoriesSuccess: false,
  isGetListCategoriesFailure: false,
  getListCategoriesState: {},
  // Get List Products
  isGetListProductsRequest: false,
  isGetListProductsSuccess: false,
  isGetListProductsFailure: false,
  getListProductsState: {},
  // Local
  errorMessages: [],
};

const reducer = handleActions(
  {
    // #region : Get All Product
    [Actions.getAllProductsRequest]: (state) => ({
      ...state,
      isGetAllProductsRequest: true,
      isGetAllProductsSuccess: false,
      isGetAllProductsFailure: false,
    }),
    [Actions.getAllProductsSuccess]: (state, { payload }) => ({
      ...state,
      isFirstGetAllProducts: true,
      isGetAllProductsRequest: false,
      isGetAllProductsSuccess: true,
      isGetAllProductsFailure: false,
      getAllProductsState: payload,
    }),
    [Actions.getAllProductsFailure]: (state, { payload }) => ({
      ...state,
      isGetAllProductsRequest: false,
      isGetAllProductsSuccess: false,
      isGetAllProductsFailure: true,
      errorMessages: payload,
    }),
    // #endregion
    // #region : Create Product
    [Actions.createProductRequest]: (state) => ({
      ...state,
      isCreateProductRequest: true,
      isCreateProductSuccess: false,
      isCreateProductFailure: false,
    }),
    [Actions.createProductSuccess]: (state) => ({
      ...state,
      isCreateProductRequest: false,
      isCreateProductSuccess: true,
      isCreateProductFailure: false,
    }),
    [Actions.createProductFailure]: (state, { payload }) => ({
      ...state,
      isCreateProductRequest: false,
      isCreateProductSuccess: false,
      isCreateProductFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetCreateProduct]: (state) => ({
      ...state,
      isCreateProductRequest: false,
      isCreateProductSuccess: false,
      isCreateProductFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Update Product
    [Actions.updateProductRequest]: (state) => ({
      ...state,
      isUpdateProductRequest: true,
      isUpdateProductSuccess: false,
      isUpdateProductFailure: false,
    }),
    [Actions.updateProductSuccess]: (state) => ({
      ...state,
      isUpdateProductRequest: false,
      isUpdateProductSuccess: true,
      isUpdateProductFailure: false,
    }),
    [Actions.updateProductFailure]: (state, { payload }) => ({
      ...state,
      isUpdateProductRequest: false,
      isUpdateProductSuccess: false,
      isUpdateProductFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetUpdateProduct]: (state) => ({
      ...state,
      isUpdateProductRequest: false,
      isUpdateProductSuccess: false,
      isUpdateProductFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Delete Product
    [Actions.deleteProductRequest]: (state) => ({
      ...state,
      isDeleteProductRequest: true,
      isDeleteProductSuccess: false,
      isDeleteProductFailure: false,
    }),
    [Actions.deleteProductSuccess]: (state) => ({
      ...state,
      isDeleteProductRequest: false,
      isDeleteProductSuccess: true,
      isDeleteProductFailure: false,
    }),
    [Actions.deleteProductFailure]: (state, { payload }) => ({
      ...state,
      isDeleteProductRequest: false,
      isDeleteProductSuccess: false,
      isDeleteProductFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetDeleteProduct]: (state) => ({
      ...state,
      isDeleteProductRequest: false,
      isDeleteProductSuccess: false,
      isDeleteProductFailure: false,
      errorMessages: [],
    }),
    // #endregion
    // #region : Get List Categories
    [Actions.getListCategoriesRequest]: (state) => ({
      ...state,
      isGetListCategoriesRequest: true,
      isGetListCategoriesSuccess: false,
      isGetListCategoriesFailure: false,
    }),
    [Actions.getListCategoriesSuccess]: (state, { payload }) => ({
      ...state,
      isGetListCategoriesRequest: false,
      isGetListCategoriesSuccess: true,
      isGetListCategoriesFailure: false,
      getListCategoriesState: payload,
    }),
    [Actions.getListCategoriesFailure]: (state, { payload }) => ({
      ...state,
      isGetListCategoriesRequest: false,
      isGetListCategoriesSuccess: false,
      isGetListCategoriesFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetListCategories]: (state) => ({
      ...state,
      isGetListCategoriesRequest: false,
      isGetListCategoriesSuccess: false,
      isGetListCategoriesFailure: false,
      getListCategoriesState: {},
      errorMessages: [],
    }),
    // #endregion
    // #region : Get List Products
    [Actions.getListProductsRequest]: (state) => ({
      ...state,
      isGetListProductsRequest: true,
      isGetListProductsSuccess: false,
      isGetListProductsFailure: false,
    }),
    [Actions.getListProductsSuccess]: (state, { payload }) => ({
      ...state,
      isGetListProductsRequest: false,
      isGetListProductsSuccess: true,
      isGetListProductsFailure: false,
      getListProductsState: payload,
    }),
    [Actions.getListProductsFailure]: (state, { payload }) => ({
      ...state,
      isGetListProductsRequest: false,
      isGetListProductsSuccess: false,
      isGetListProductsFailure: true,
      errorMessages: payload,
    }),
    [Actions.resetGetListProducts]: (state) => ({
      ...state,
      isGetListProductsRequest: false,
      isGetListProductsSuccess: false,
      isGetListProductsFailure: false,
      getListProductsState: {},
      errorMessages: [],
    }),
    // #endregion

    // #region : Local
    [Actions.resetProductState]: () => initialState,
    // #endregion
  },
  initialState,
);

export default reducer;
