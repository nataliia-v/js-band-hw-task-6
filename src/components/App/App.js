import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Todos from '../Todos/Todos';

import styles from './App.module.scss';

const internName = 'Nataliia Varbenska';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Todos />
              </Route>
              <Route exact path="/todos">
                <Todos />
              </Route>
              <Route path="*">Oops..not found</Route>
            </Switch>
          </div>
        </Router>
        <Footer internName={internName} />
      </div>
    </Router>

  );
}

export default App;
