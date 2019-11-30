import React from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const internName = "Nataliia Varbenska";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Footer internName={internName}/>
    </div>
  );
}

export default App;