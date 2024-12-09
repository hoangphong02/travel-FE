import { createAction } from 'redux-actions';

export const getAllProductsRequest = createAction('GET_ALL_PRODUCTS_REQUEST');
export const getAllProductsSuccess = createAction('GET_ALL_PRODUCTS_SUCCESS');
export const getAllProductsFailure = createAction('GET_ALL_PRODUCTS_FAILURE');

export const createProductRequest = createAction('CREATE_PRODUCT_REQUEST');
export const createProductSuccess = createAction('CREATE_PRODUCT_SUCCESS');
export const createProductFailure = createAction('CREATE_PRODUCT_FAILURE');
export const resetCreateProduct = createAction('RESET_CREATE_PRODUCT');

export const updateProductRequest = createAction('UPDATE_PRODUCT_REQUEST');
export const updateProductSuccess = createAction('UPDATE_PRODUCT_SUCCESS');
export const updateProductFailure = createAction('UPDATE_PRODUCT_FAILURE');
export const resetUpdateProduct = createAction('RESET_UPDATE_PRODUCT');

export const deleteProductRequest = createAction('DELETE_PRODUCT_REQUEST');
export const deleteProductSuccess = createAction('DELETE_PRODUCT_SUCCESS');
export const deleteProductFailure = createAction('DELETE_PRODUCT_FAILURE');
export const resetDeleteProduct = createAction('RESET_DELETE_PRODUCT');

export const getListCategoriesRequest = createAction(
  'GET_LIST_CATEGORIES_REQUEST',
);
export const getListCategoriesSuccess = createAction(
  'GET_LIST_CATEGORIES_SUCCESS',
);
export const getListCategoriesFailure = createAction(
  'GET_LIST_CATEGORIES_FAILURE',
);
export const resetGetListCategories = createAction('RESET_GET_LIST_CATEGORIES');

export const getListProductsRequest = createAction('GET_LIST_PRODUCTS_REQUEST');
export const getListProductsSuccess = createAction('GET_LIST_PRODUCTS_SUCCESS');
export const getListProductsFailure = createAction('GET_LIST_PRODUCTS_FAILURE');
export const resetGetListProducts = createAction('RESET_GET_LIST_PRODUCTS');

export const resetProductState = createAction('RESET_PRODUCT_STATE');
