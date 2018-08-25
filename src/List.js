import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Modal from './Modal';

const ListWrapper = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class List extends React.Component {
  // componentDidMount() {
  //   document.addEventListener('keydown', this.escFunctionEvent, false);
  // }

  // toggleModal = () => {
  //   this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  // };

  // escFunctionEvent = (event) => {
  //   if (event.keyCode === 27) {
  //     this.setState({ isModalOpen: false });
  //   }
  // };

  render() {
    const { items, isModalOpen } = this.props;

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
          <Modal>
            <p />
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  console.log(store);

  return {
    items: store.items,
  };
};

export default connect(mapStateToProps)(List);
