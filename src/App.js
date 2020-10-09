import React, { useState, useEffect, Fragment } from 'react'
// import { createStore } from 'redux'
import Header from './Resume/Header'
import Skills from './Resume/Skills'
import Footer from './Resume/Footer'
import './App.css'

function App() {
  const [ dude ] = useState({
    "profile": {
        "name": "Mario",
        "lastName": "Perez",
        "avatar": "https://avatars1.githubusercontent.com/u/8365575?s=460&u=8556da9f8f81b116fc20f928ba421155b59ee6db&v=4",
        "bio": "Web Developer from Costa Rica."
    },
    "skills": [
        "Great problem solving and debugging skills.",
        "Always looking to improve and learn.",
        "3+ years of experience working with JS, HTML and CSS.",
        "Experience working with Webpack",
        "Experience working with Gulp",
        "Experience with VUE/VUEX",
        "Knowledge of React/Redux",
        "Experience with TDD using Jest.",
        "Experience working with and teaching Git"
    ],
    "webProfiles": [
      {
        "name": "stackoverflow",
        "apiUrl": "https://api.github.com/users/marioperez25"
      },
      {
        "name": "github",
        "apiUrl": "https://stackoverflow.com/users/6465591/mario-perez"
      }
    ],
    "experience": [
        {
            "companyName": "company 1",
            "entryDate": "25/07/2009"
        },
        {
            "companyName": "company 2",
            "entryDate": "25/07/2009"
        }
    ]
});
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
        profile={apiData}/>
      <Skills
        skills={dude.skills}
      />
      <Footer/>
    </Fragment>
  );
}



export default App;
