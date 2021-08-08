import { takeLatest } from 'redux-saga/effects';
import { genericSagaHandler } from '../../utils/sagaUtil';

import {
  GET_ALL_CATEGORIES_REQUEST,
  GET_CATEGORY_REQUEST,
  CREATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_REQUEST,
  DELETE_CATEGORY_REQUEST,
} from './constants';

export default function* categoriesSaga() {
  yield takeLatest(CREATE_CATEGORY_REQUEST, genericSagaHandler);
  yield takeLatest(GET_ALL_CATEGORIES_REQUEST, genericSagaHandler);
  yield takeLatest(GET_CATEGORY_REQUEST, genericSagaHandler);
  yield takeLatest(UPDATE_CATEGORY_REQUEST, genericSagaHandler);
  yield takeLatest(DELETE_CATEGORY_REQUEST, genericSagaHandler);
}
