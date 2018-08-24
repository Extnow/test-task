import React from 'react';
import styled from 'styled-components';
import List from './List';

const App = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <App>
    <List />
  </App>
);
