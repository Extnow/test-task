import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

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
  };

  componentDidMount() {
    document.addEventListener('keydown', this.escFunctionEvent, false);
  }

  toggleModal = () => {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  };

  escFunctionEvent = (event) => {
    if (event.keyCode === 27) {
      this.setState(state => ({ isModalOpen: !state.isModalOpen }));
    }
  };

  // new
  handleUpdateText = (data) => {
    const { items } = this.state;
    const newText = [data, ...items];

    this.setState(state => ({ items: newText, isModalOpen: !state.isModalOpen }));
  };
  // ----------------------------

  render() {
    const { items, isModalOpen } = this.state;

    return (
      <React.Fragment>
        <ListWrapper>
          {items.map(item => (
            <button onClick={this.toggleModal} key={item.id} type="button">
              {item.text}
            </button>
          ))}
        </ListWrapper>

        {isModalOpen && (
          <Modal
            onUpdateText={this.handleUpdateText}
            onClose={this.toggleModal}
            isModalOpen={isModalOpen}
            items={items}
          />
        )}
      </React.Fragment>
    );
  }
}
