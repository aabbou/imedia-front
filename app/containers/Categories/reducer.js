/*
 *
 * Categories reducer
 *
 */
import produce from 'immer';
import {
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
} from './constants';

export const initialState = {
  categories: [],
  categorie: {},
  loading: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const categoriesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ALL_CATEGORIES_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case GET_ALL_CATEGORIES_SUCCESS:
        draft.loading = false;
        draft.categories = action.payload;
        break;
      case GET_ALL_CATEGORIES_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case GET_CATEGORY_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case GET_CATEGORY_SUCCESS:
        draft.loading = false;
        draft.category = action.payload;
        break;
      case GET_CATEGORY_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case CREATE_CATEGORY_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case CREATE_CATEGORY_SUCCESS:
        draft.loading = false;
        draft.category = action.payload;
        break;
      case CREATE_CATEGORY_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case UPDATE_CATEGORY_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case UPDATE_CATEGORY_SUCCESS:
        draft.loading = false;
        draft.category = action.payload;
        break;
      case UPDATE_CATEGORY_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case DELETE_CATEGORY_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case DELETE_CATEGORY_SUCCESS:
        draft.loading = false;
        break;
      case DELETE_CATEGORY_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      default:
        break;
    }
  });

export default categoriesReducer;
