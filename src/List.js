import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Btn from './Btn';
import itemsData from './itemsData.json';

const ListWrapper = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default class List extends React.Component {
  state = {
    items: itemsData,
    isModalOpen: false,
    currentText: null,
    currentId: null,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.escFunctionEvent, false);
  }

  toggleModal = (item) => {
    this.setState(state => ({
      isModalOpen: !state.isModalOpen,
      currentText: item.text,
      currentId: item.id,
    }));
  };

  escFunctionEvent = (event) => {
    const { isModalOpen } = this.state;

    if (event.keyCode === 27 && isModalOpen === true) {
      this.setState(state => ({ isModalOpen: !state.isModalOpen }));
    }
  };

  updateText = (e) => {
    this.setState({ currentText: e.target.value });
  };

  saveText = (id) => {
    const { items, currentText } = this.state;

    function isEqualId(array) {
      return array.id === id;
    }
    items.find(isEqualId).text = currentText;

    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  };

  render() {
    const {
      items, isModalOpen, currentText, currentId,
    } = this.state;

    return (
      <React.Fragment>
        <ListWrapper>
          {items.map(item => (
            <Btn key={item.id} text={item.text} toggleModal={this.toggleModal} item={item} />
          ))}
        </ListWrapper>

        {isModalOpen && (
          <Modal
            updateText={this.updateText}
            onClose={this.toggleModal}
            saveText={this.saveText}
            currentText={currentText}
            currentId={currentId}
          />
        )}
      </React.Fragment>
    );
  }
}
