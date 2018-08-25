import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const ModalWindow = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 100;
`;

const BtnClose = styled.button`
  position: absolute;
  bottom: 128px;
  cursor: pointer;
`;

const Text = styled.textarea`
  resize: none;
`;

export default class Modal extends React.Component {
  state = {};

  render() {
    return ReactDOM.createPortal(
      <ModalWindow>
        <BtnClose>Сохранить</BtnClose>
        <Text rows="10" cols="45" defaultValue="ss" />
      </ModalWindow>,
      document.getElementById('portal'),
    );
  }
}
