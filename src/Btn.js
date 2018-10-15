import React from 'react';

export default class Btn extends React.PureComponent {
  toggleModal = () => {
    const { toggleModal, item } = this.props;
    toggleModal(item);
  };

  render() {
    const { text } = this.props;
    return (
      <button type="button" onClick={this.toggleModal}>
        {text}
      </button>
    );
  }
}
