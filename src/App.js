import React, { useState, useEffect, Fragment } from 'react'
import { createStore } from 'redux'
import Header from './Resume/Header'
import Resume from './Resume/Resume'
import Footer from './Resume/Footer'
import './App.css'

function Home() {
  return <h2>Home</h2>;
}

function App() {
  const API_URL = 'https://api.github.com/users/marioperez25'
  const [ apiData, setApiData] = useState({})
  const profileLoader = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    setApiData(data);
  }
  
  useEffect(()=>{
    profileLoader(API_URL);
  },[])

  return (
    <Fragment>
      <Header
        profile={apiData}
      />
      <Resume/>
      <Footer/>
    </Fragment>
  );
}

export default App;
