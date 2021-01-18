import React from 'react';
import Modal from 'react-modal';

const Selected = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.clearSelectedOption}
    contentLabel="Selected Option"
    ariaHideApp={false}>
    <h3>Selected Option</h3>
    {props.selectedOption && <span>{props.selectedOption}</span>}
    <button onClick={props.clearSelectedOption}>OK</button>
  </Modal>
);

export default Selected;