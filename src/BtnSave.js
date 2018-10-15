import React from 'react';
import styled from 'styled-components';

const BtnSaveStyled = styled.button`
  position: absolute;
  bottom: 160px;
  cursor: pointer;
`;

export default class BtnSave extends React.PureComponent {
  saveText = () => {
    const { saveText, currentId } = this.props;
    saveText(currentId);
  };

  render() {
    return <BtnSaveStyled onClick={this.saveText}>Сохранить</BtnSaveStyled>;
  }
}
