/**
 *
 * AddOrEditCategory
 *
 */

import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { createNewCategory, updateCategory } from '../../actions';

function AddOrEditCategory({ category = {}, isEdit = false }) {
  const dispatch = useDispatch();
  const { id, label, description } = category;
  return (
    <div>
      <Formik
        initialValues={{
          description: isEdit ? description : '',
          label: isEdit ? label : '',
        }}
        validationSchema={Yup.object({
          label: Yup.string()
            .max(100, 'Must be 100 characters or less')
            .required('Required'),
          description: Yup.string()
            .max(1000, 'Must be 1000 characters or less')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          if (isEdit) {
            dispatch(updateCategory({ id, ...values }));
          } else {
            dispatch(createNewCategory(values));
          }

          setSubmitting(false);
        }}
      >
        {formik => (
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="categoryLabel">
              <Form.Label>Label</Form.Label>
              <Form.Control
                type="text"
                name="categoryLabel"
                {...formik.getFieldProps('label')}
                placeholder="Category Label"
                readOnly={isEdit}
              />
              {formik.touched.label && formik.errors.label ? (
                <div>{formik.errors.label}</div>
              ) : null}
            </Form.Group>
            <Form.Group controlId="categoryDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="categoryDescription"
                rows={3}
                {...formik.getFieldProps('description')}
                placeholder="Category Description"
              />
              {formik.touched.description && formik.errors.description ? (
                <div>{formik.errors.description}</div>
              ) : null}
            </Form.Group>

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

AddOrEditCategory.propTypes = {};

export default memo(AddOrEditCategory);
