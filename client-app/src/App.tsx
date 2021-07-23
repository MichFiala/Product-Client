import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react';
import ProductList from './features/products/ProductList';

function App() {
  return (
    <>
      <Container>
        <ProductList />
      </Container>
    </>
  );
}

export default App;
