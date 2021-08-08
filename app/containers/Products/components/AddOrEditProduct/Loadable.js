/**
 *
 * Asynchronously loads the component for AddOrEditProduct
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
