/*
 *
 * Categories actions
 *
 */

import {
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_FAILURE,
  CREATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILURE,
} from './constants';
import {
  createNewCategoryApi,
  updateCategoryApi,
  getAllCategoriesApi,
  getCategoryByIdApi,
  deleteCategoryByIdApi,
} from '../apis';
import { CloseModal } from '../Modal/actions';

export function createNewCategory(category) {
  return {
    type: CREATE_CATEGORY_REQUEST,
    routines: [CREATE_CATEGORY_SUCCESS, CREATE_CATEGORY_FAILURE],
    apiCall: () => createNewCategoryApi(category),
    afterActions: [CloseModal(), getAllCategories()],
  };
}

export function getAllCategories() {
  return {
    type: GET_ALL_CATEGORIES_REQUEST,
    routines: [GET_ALL_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_FAILURE],
    apiCall: () => getAllCategoriesApi(),
  };
}

export function getCategoryById(id) {
  return {
    type: GET_CATEGORY_REQUEST,
    routines: [GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE],
    apiCall: () => getCategoryByIdApi(id),
  };
}

export function updateCategory(category) {
  return {
    type: UPDATE_CATEGORY_REQUEST,
    routines: [UPDATE_CATEGORY_SUCCESS, UPDATE_CATEGORY_FAILURE],
    apiCall: () => updateCategoryApi(category),
    afterActions: [CloseModal(), getAllCategories()],
  };
}

export function deleteCategoryById(id) {
  return {
    type: DELETE_CATEGORY_REQUEST,
    routines: [DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE],
    apiCall: () => deleteCategoryByIdApi(id),
    afterActions: [getAllCategories()],
  };
}
