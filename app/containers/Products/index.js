/**
 *
 * Products
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { selectProductsList } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getAllProducts, deleteProductById } from './actions';
import { OpenModal } from '../Modal/actions';
import AddOrEditProduct from './components/AddOrEditProduct';
import { selectCategoriesOptions } from '../Categories/selectors';

const mapStateToProps = createStructuredSelector({
  productsList: selectProductsList(),
  categoriesOptions: selectCategoriesOptions(),
});

export function Products() {
  useInjectReducer({ key: 'products', reducer });
  useInjectSaga({ key: 'products', saga });
  const { productsList, categoriesOptions } = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <Helmet>
        <title>Products</title>
        <meta name="description" content="Description of Products" />
      </Helmet>
      <Button
        variant="success"
        onClick={() => {
          dispatch(OpenModal(<AddOrEditProduct options={categoriesOptions} />));
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
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Currency</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.currency}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => {
                    dispatch(
                      OpenModal(
                        <AddOrEditProduct
                          product={product}
                          isEdit
                          options={categoriesOptions}
                        />,
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
                    dispatch(deleteProductById(product.id));
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

Products.propTypes = {};

export default memo(Products);
