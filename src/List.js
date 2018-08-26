import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Btn from './Btn';

const ListWrapper = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default class List extends React.Component {
  state = {
    items: [
      {
        id: 1,
        text: 'random text 1',
      },
      {
        id: 2,
        text: 'random text 2',
      },
      {
        id: 3,
        text: 'random text 3',
      },
      {
        id: 4,
        text: 'random text 4',
      },
      {
        id: 5,
        text: 'random text 5',
      },
      {
        id: 6,
        text: 'random text 6',
      },
    ],
    isModalOpen: false,
    currentText: null,
    currentId: null,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.escFunctionEvent, false);
  }

  toggleModal = (val) => {
    this.setState(state => ({
      isModalOpen: !state.isModalOpen,
      currentText: val.text,
      currentId: val.id,
    }));
  };

  escFunctionEvent = (event) => {
    if (event.keyCode === 27) {
      this.setState(state => ({ isModalOpen: !state.isModalOpen }));
    }
  };

  updateText = (e) => {
    this.setState({ currentText: e.target.value });
  };

  saveText = (id) => {
    const { items, currentText } = this.state;

    for (const item of items) {
      if (item.id === id) {
        item.text = currentText;
      }
    }

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
            <Btn key={item.id} text={item.text} toggleModal={() => this.toggleModal(item)} />
          ))}
        </ListWrapper>

        {isModalOpen && (
          <Modal
            updateText={this.updateText}
            onClose={this.toggleModal}
            isModalOpen={isModalOpen}
            currentText={currentText}
            currentId={currentId}
            onSave={this.saveText}
          />
        )}
      </React.Fragment>
    );
  }
}
