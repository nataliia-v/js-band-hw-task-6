import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Todos from '../Todos/Todos';

import styles from './App.module.scss';

const internName = 'Nataliia Varbenska';

function App() {
  return (
    <div className={ styles.app }>
      <Header/>
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <div>
          <Switch>
            <Route path="/todos">
              <Todos/>
            </Route>
            <Redirect from="/" to="/todos" exact />
            <Route path="*">Oops..not found</Route>
          </Switch>
        </div>
      </BrowserRouter>
      <Footer internName={ internName }/>
    </div>
  );
}

export default App;
