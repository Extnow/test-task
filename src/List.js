import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { itemsFetchData } from './actions';
import Modal from './Modal';
import Btn from './Btn';

const ListWrapper = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class List extends React.Component {
  state = {
    isModalOpen: false,
    currentText: null,
    currentId: null,
  };

  componentDidMount() {
    const { fetchData } = this.props;

    fetchData('http://localhost:3000/data/itemsData.json');
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
    const { currentText } = this.state;
    const { items } = this.props;

    function isEqualId(array) {
      return array.id === id;
    }
    items.find(isEqualId).text = currentText;

    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  };

  render() {
    const { items, isLoading } = this.props;
    const { isModalOpen, currentText, currentId } = this.state;

    if (isLoading) {
      return <p>Загрузка...</p>;
    }

    return (
      <React.Fragment>
        {Array.isArray(items) && (
          <ListWrapper>
            {items.map(item => (
              <Btn key={item.id} text={item.text} toggleModal={() => this.toggleModal(item)} />
            ))}
          </ListWrapper>
        )}
        {isModalOpen && (
          <Modal
            updateText={this.updateText}
            onClose={this.toggleModal}
            onSave={this.saveText}
            currentText={currentText}
            currentId={currentId}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  isLoading: state.itemsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
