/*
 *
 * Products actions
 *
 */

import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
} from './constants';
import {
  createNewProductApi,
  updateProductApi,
  getAllProductsApi,
  getProductByIdApi,
  deleteProductByIdApi,
} from '../apis';
import { CloseModal } from '../Modal/actions';

export function createNewProduct(product) {
  return {
    type: CREATE_PRODUCT_REQUEST,
    routines: [CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE],
    apiCall: () => createNewProductApi(product),
    afterActions: [CloseModal(), getAllProducts()],
  };
}

export function getAllProducts() {
  return {
    type: GET_ALL_PRODUCTS_REQUEST,
    routines: [GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAILURE],
    apiCall: () => getAllProductsApi(),
  };
}

export function getProductById(id) {
  return {
    type: GET_PRODUCT_REQUEST,
    routines: [GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE],
    apiCall: () => getProductByIdApi(id),
  };
}

export function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT_REQUEST,
    routines: [UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE],
    apiCall: () => updateProductApi(product),
    afterActions: [CloseModal(), getAllProducts()],
  };
}

export function deleteProductById(id) {
  return {
    type: DELETE_PRODUCT_REQUEST,
    routines: [DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE],
    apiCall: () => deleteProductByIdApi(id),
    afterActions: [getAllProducts()],
  };
}
