import React, { useState, useEffect, Fragment } from 'react'
// import { createStore } from 'redux'
import profileLoader from './Resume/Services/profileLoader'
import Header from './Resume/Header'
import Resume from './Resume/Resume'
import Footer from './Resume/Footer'
import './App.css'

function App() {
  const GIT_PROFILE_API = 'https://api.github.com/users/marioperez25'
  const JSONbin = 'https://jsonbin.io/5f84d311302a837e95789669/9'

  const [ gitAPI, setgitAPI] = useState({})
  const [ jsonBin, setJsonBin ] = useState({})

  useEffect(()=>{
    profileLoader(GIT_PROFILE_API,setgitAPI)
    profileLoader(JSONbin,setJsonBin)
  },[])

  return (
    <Fragment>
      <Header
        profile={gitAPI}
      />
      <Resume
        jsonBin={jsonBin}
      />
      <Footer/>
    </Fragment>
  );
}

export default App;
