import { takeLatest } from 'redux-saga/effects';
import { genericSagaHandler } from '../../utils/sagaUtil';
import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_PRODUCT_REQUEST,
  CREATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
} from './constants';

export default function* productsSaga() {
  yield takeLatest(CREATE_PRODUCT_REQUEST, genericSagaHandler);
  yield takeLatest(GET_ALL_PRODUCTS_REQUEST, genericSagaHandler);
  yield takeLatest(GET_PRODUCT_REQUEST, genericSagaHandler);
  yield takeLatest(UPDATE_PRODUCT_REQUEST, genericSagaHandler);
  yield takeLatest(DELETE_PRODUCT_REQUEST, genericSagaHandler);
}
