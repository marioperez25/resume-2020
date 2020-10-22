import React, { Fragment } from 'react'
// import { createStore } from 'redux'
import Header from './resume/Header'
import Main from './resume/Main'
import Footer from './resume/Footer'
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
