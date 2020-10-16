import React, { Fragment } from 'react'
// import { createStore } from 'redux'
import Header from './Resume/Header'
import Main from './Resume/Main'
import Footer from './Resume/Footer'
import './App.css'

function App() {

  return (
    <Fragment>
      <Header/>
        <Main/>
      <Footer/>
    </Fragment>
  );
}

export default App;
