import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Todos from '../Todos/Todos';

import styles from './App.module.scss';

const internName = 'Nataliia Varbenska';

function App() {
  const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
  });
  return (
    <div className={ styles.app }>
      <Header/>
      <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route path='/todos' component={Todos}/>
            <Redirect from="/" to="/todos" exact />
            <Route path='*'>Oops..not found</Route>
          </Switch>
        </div>
      </BrowserRouter>
      <Footer internName={ internName }/>
    </div>
  );
}

export default App;
