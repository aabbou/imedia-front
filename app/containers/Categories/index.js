/**
 *
 * Categories
 *
 */

import React, { memo, useEffect } from 'react';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import AddOrEditCategory from './components/AddOrEditCategory';
import { getAllCategories, deleteCategoryById } from './actions';
import { OpenModal } from '../Modal/actions';
import makeSelectCategories, { selectCategoriesList } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const mapStateToProps = createStructuredSelector({
  categoriesList: selectCategoriesList(),
});

export function Categories() {
  useInjectReducer({ key: 'categories', reducer });
  useInjectSaga({ key: 'categories', saga });

  const { categoriesList } = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <div>
      <Helmet>
        <title>Categories</title>
        <meta name="description" content="Description of Categories" />
      </Helmet>
      <Button
        variant="success"
        onClick={() => {
          dispatch(OpenModal(<AddOrEditCategory />));
        }}
      >
        Add
      </Button>
      <br />
      <br />
      <Table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Label</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoriesList.map(category => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.label}</td>
              <td>{category.description}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => {
                    dispatch(
                      OpenModal(
                        <AddOrEditCategory category={category} isEdit />,
                      ),
                    );
                  }}
                >
                  Edit
                </Button>
                &nbsp;
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteCategoryById(category.id));
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default memo(Categories);
