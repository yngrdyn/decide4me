import React from 'react';
import Modal from 'react-modal';

const Selected = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.clearSelectedOption}
    contentLabel="Selected Option"
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal">
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <span className="modal__body">{props.selectedOption}</span>}
    <button className="button" onClick={props.clearSelectedOption}>OK</button>
  </Modal>
);

export default Selected;