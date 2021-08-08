import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the products state domain
 */

const selectProductsDomain = state => state.products || initialState;

/**
 * Other specific selectors
 */

const selectProductsList = () =>
  createSelector(
    selectProductsDomain,
    substate => substate.products,
  );

/**
 * Default selector used by Products
 */

const makeSelectProducts = () =>
  createSelector(
    selectProductsDomain,
    substate => substate,
  );

export default makeSelectProducts;
export { selectProductsDomain, selectProductsList };
