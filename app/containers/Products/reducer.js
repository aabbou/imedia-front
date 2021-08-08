/*
 *
 * Products reducer
 *
 */
import produce from 'immer';
import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
} from './constants';

export const initialState = {
  products: [],
  product: {},
  loading: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const productsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ALL_PRODUCTS_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case GET_ALL_PRODUCTS_SUCCESS:
        draft.loading = false;
        draft.products = action.payload;
        break;
      case GET_ALL_PRODUCTS_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case GET_PRODUCT_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case GET_PRODUCT_SUCCESS:
        draft.loading = false;
        draft.product = action.payload;
        break;
      case GET_PRODUCT_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case CREATE_PRODUCT_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case CREATE_PRODUCT_SUCCESS:
        draft.loading = false;
        draft.product = action.payload;
        break;
      case CREATE_PRODUCT_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case UPDATE_PRODUCT_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case UPDATE_PRODUCT_SUCCESS:
        draft.loading = false;
        draft.product = action.payload;
        break;
      case UPDATE_PRODUCT_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case DELETE_PRODUCT_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case DELETE_PRODUCT_SUCCESS:
        draft.loading = false;
        break;
      case DELETE_PRODUCT_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      default:
        break;
    }
  });

export default productsReducer;
