import './App.css';
import { Container } from 'semantic-ui-react';
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
