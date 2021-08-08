/*
 *
 * GlobalModal reducer
 *
 */
import produce from 'immer';
import { OPEN_MODAL, CLOSE_MODAL } from './constants';

export const initialState = {
  content: null,
  isOpen: false,
};

/* eslint-disable default-case, no-param-reassign */
const modalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case OPEN_MODAL:
        draft.isOpen = true;
        draft.content = action.payload;
        break;
      case CLOSE_MODAL:
        draft.isOpen = false;
        draft.content = null;
        break;
      default:
        break;
    }
  });

export default modalReducer;
