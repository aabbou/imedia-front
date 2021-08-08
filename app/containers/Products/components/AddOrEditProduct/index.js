/**
 *
 * AddOrEditProduct
 *
 */

import React, { memo, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';
import http from '../../../../utils/http';

import messages from './messages';
import { createNewProduct, updateProduct } from '../../actions';
import { getCurrencyRates } from '../../../apis';

function AddOrEditProduct({ product = {}, isEdit = false, options }) {
  const dispatch = useDispatch();
  let rates = { USD: 1.176394, MAD: 10.529185 };
  const { id, name, description, price, currency, relatedCategories } = product;
  const [productCategories, setProductCategories] = useState(
    isEdit
      ? relatedCategories.map(({ id, label }) => ({ value: id, label }))
      : [],
  );
  useEffect(() => {
    getCurrencyRates()
      .then(response => {
        rates = { ...response.data.rates };
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Formik
        initialValues={{
          name: isEdit ? name : '',
          description: isEdit ? description : '',
          price: isEdit ? price : '',
          currency: isEdit ? currency : 'EUR',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(100, 'Must be 100 characters or less')
            .required('Required'),
          description: Yup.string()
            .max(1000, 'Must be 1000 characters or less')
            .required('Required'),
          price: Yup.number().required('Required'),
          currency: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          let rate;
          if (values.currency !== 'EUR') {
            rate = rates[values.currency];
            if (isEdit) {
              dispatch(
                updateProduct({
                  id,
                  ...values,
                  price: values.price * rate,
                  relatedCategories: productCategories.map(
                    ({ value, label }) => ({ id: value, label }),
                  ),
                }),
              );
            } else {
              dispatch(
                createNewProduct({
                  ...values,
                  price: values.price * rate,
                  relatedCategories: productCategories.map(
                    ({ value, label }) => ({ id: value, label }),
                  ),
                }),
              );
            }
          } else if (isEdit) {
            dispatch(
              updateProduct({
                id,
                ...values,
                relatedCategories: productCategories.map(
                  ({ value, label }) => ({ id: value, label }),
                ),
              }),
            );
          } else {
            dispatch(
              createNewProduct({
                ...values,
                relatedCategories: productCategories.map(
                  ({ value, label }) => ({ id: value, label }),
                ),
              }),
            );
          }
          setSubmitting(false);
        }}
      >
        {formik => (
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="productName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                {...formik.getFieldProps('name')}
                placeholder="Product Name"
              />
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}
            </Form.Group>

            <Form.Group controlId="productDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="productDescription"
                rows={3}
                {...formik.getFieldProps('description')}
                placeholder="Product Description"
              />
              {formik.touched.description && formik.errors.description ? (
                <div>{formik.errors.description}</div>
              ) : null}
            </Form.Group>

            <Form.Group controlId="productCategories">
              <Form.Label>Categories</Form.Label>
              <Select
                value={productCategories}
                isMulti
                name="productCategories"
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={setProductCategories}
              />
            </Form.Group>

            <Form.Group controlId="productPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="productPrice"
                {...formik.getFieldProps('price')}
                placeholder="Product Price"
              />
              {formik.touched.price && formik.errors.price ? (
                <div>{formik.errors.price}</div>
              ) : null}
            </Form.Group>

            <Form.Group controlId="productCurrency">
              <Form.Label>Currency</Form.Label>
              <Field name="currency" as="select" className="form-control">
                <option value="EUR">EUR</option>
                <option value="MAD">MAD</option>
                <option value="USD">USD</option>
              </Field>
              {formik.touched.currency && formik.errors.currency ? (
                <div>{formik.errors.currency}</div>
              ) : null}
            </Form.Group>

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

AddOrEditProduct.propTypes = {};

export default memo(AddOrEditProduct);
