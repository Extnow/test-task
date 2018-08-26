import React from 'react';

export default ({ text, toggleModal }) => (
  <button type="button" onClick={toggleModal}>
    {text}
  </button>
);
