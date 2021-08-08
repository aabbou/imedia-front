/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'imedia.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  products: {
    id: `${scope}.products`,
    defaultMessage: 'Products',
  },
  categories: {
    id: `${scope}.categories`,
    defaultMessage: 'Categories',
  },
});
