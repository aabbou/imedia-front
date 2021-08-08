/*
 *
 * GlobalModal actions
 *
 */

import { OPEN_MODAL, CLOSE_MODAL } from './constants';

export function OpenModal(content) {
  return {
    type: OPEN_MODAL,
    payload: content,
  };
}

export function CloseModal() {
  return {
    type: CLOSE_MODAL,
  };
}
