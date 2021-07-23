import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, GridColumn } from 'semantic-ui-react';
import ProductList from './features/products/ProductList';
import ModalContainer from './app/common/ModalContainer';

function App() {
  return (
    <>
      <ModalContainer />
      <Container>
        <ProductList />
      </Container>
    </>
  );
}

export default App;
