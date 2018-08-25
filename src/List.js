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
        text: 'random text',
      },
      {
        id: 2,
        text: 'random text',
      },
      {
        id: 3,
        text: 'random text',
      },
      {
        id: 4,
        text: 'random text',
      },
      {
        id: 5,
        text: 'random text',
      },
      {
        id: 6,
        text: 'random text',
      },
    ],
    isModalOpen: true,
  };

  toggleModal = () => {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  };

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
          <Modal onClose={this.toggleModal}>
            <p />
          </Modal>
        )}
      </React.Fragment>
    );
  }
}
