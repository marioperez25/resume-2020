import React, { Fragment } from 'react'
import store from './resume/store/configureStore'
import { Provider } from 'react-redux'
import Header from './resume/Header'
import Main from './resume/Main'
import Footer from './resume/Footer'
import './App.css'

function App() {

  return (
    <Fragment>
      <Provider
          store={store}
      >
        <Header/>
        <Main/>
        <Footer/>
      </Provider>
    </Fragment>
  );
}

export default App;
