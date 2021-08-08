/**
 *
 * Modal
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import Modal from 'react-modal';

import { useInjectReducer } from 'utils/injectReducer';
import { selectModalOpenessState, selectModalContent } from './selectors';
import reducer from './reducer';
import { CloseModal } from './actions';

const mapStateToProps = createStructuredSelector({
  isOpen: selectModalOpenessState(),
  content: selectModalContent(),
});

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app');

export function GlobalModal() {
  useInjectReducer({ key: 'modal', reducer });

  const { isOpen, content } = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  return (
    <div>
      <Helmet>
        <title>Modal</title>
        <meta name="description" content="Description of GlobalModal" />
      </Helmet>
      <Modal
        isOpen={isOpen}
        onAfterOpen={() => {}}
        onRequestClose={() => {
          dispatch(CloseModal());
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {content}
      </Modal>
    </div>
  );
}

GlobalModal.propTypes = {};

export default memo(GlobalModal);
