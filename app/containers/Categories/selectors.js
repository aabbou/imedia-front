import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the categories state domain
 */

const selectCategoriesDomain = state => state.categories || initialState;

/**
 * Other specific selectors
 */

const selectCategoriesList = () =>
  createSelector(
    selectCategoriesDomain,
    substate => substate.categories,
  );

const selectCategoriesOptions = () =>
  createSelector(
    selectCategoriesDomain,
    substate =>
      substate.categories.map(({ id, label }) => ({ value: id, label })),
  );

/**
 * Default selector used by Categories
 */

const makeSelectCategories = () =>
  createSelector(
    selectCategoriesDomain,
    substate => substate,
  );

export default makeSelectCategories;
export {
  selectCategoriesDomain,
  selectCategoriesList,
  selectCategoriesOptions,
};
