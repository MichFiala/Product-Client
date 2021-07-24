import './App.css';
import { Container } from 'semantic-ui-react';
import ProductList from './features/products/ProductList';
import { Route, Switch, useLocation } from 'react-router-dom';
import ModalContainer from './app/common/ModalContainer';
import { ToastContainer } from 'react-toastify';
import TestErrors from './features/errors/TestError';

function App() {
  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />
      <ModalContainer />
      {/* <Route
        path={'/(.+)'}
        render={() => (
          <> */}
            {/* <Navbar /> */}
            <Container style={{ marginTop: '7em' }}>
              <Switch>
                <Route exact path='/' component={ProductList} />
                <Route exact path='/products' component={ProductList} />
                <Route path='/errors' component={TestErrors} />
              </Switch>
            </Container>
          {/* </>
        )}
      /> */}
    </>
  );
}

export default App;
