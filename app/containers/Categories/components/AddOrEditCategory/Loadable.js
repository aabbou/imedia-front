/**
 *
 * Asynchronously loads the component for AddOrEditCategory
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
