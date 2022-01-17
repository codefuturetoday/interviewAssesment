import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import Layout from 'Components/layout';
import store from './store/store';

const StyledApp = styled.div`
  font-family: Arial, sans-serif;
`;
const App = () => {
  return (
    <StyledApp>
      <Layout></Layout>
    </StyledApp>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
