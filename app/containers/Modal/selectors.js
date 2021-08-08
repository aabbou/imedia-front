import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the modal state domain
 */

const selectModalDomain = state => state.modal || initialState;

/**
 * Other specific selectors
 */

const selectModalContent = () =>
  createSelector(
    selectModalDomain,
    substate => substate.content,
  );

const selectModalOpenessState = () =>
  createSelector(
    selectModalDomain,
    substate => substate.isOpen,
  );

/**
 * Default selector used by Modal
 */

const makeSelectModal = () =>
  createSelector(
    selectModalDomain,
    substate => substate,
  );

export default makeSelectModal;
export { selectModalDomain, selectModalOpenessState, selectModalContent };
