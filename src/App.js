import React, { useState, useEffect, Fragment } from 'react'
// import { createStore } from 'redux'
import profileLoader from './Resume/Services/profileLoader'
import Header from './Resume/Header'
import Resume from './Resume/Resume'
import Footer from './Resume/Footer'
import './App.css'

function App() {
  const GIT_PROFILE_API = 'https://api.github.com/users/marioperez25'
  const JSONbin = 'https://api.jsonbin.io/b/5f84d311302a837e95789669/2'

  const [ gitAPI, setgitAPI] = useState({})
  const [ jsonBin, setJsonBin ] = useState({})
  const [ resume ] = useState({
    "contact" : {
        "phone": "50685681492",
        "email": "mariofph@gmail.com"
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
    "devProfiles": [
      {
        "name": "stackoverflow",
        "url": "https://stackoverflow.com/users/6465591/mario-perez"
      },
      {
        "name": "github",
        "url": "https://github.com/marioperez25"
      },
      {
        "name": "Pluralsight",
        "url": "https://app.pluralsight.com/profile/mariofrancisco-perez"
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
        resume={resume}
        jsonBin={jsonBin}
        bio={gitAPI.bio}
      />

      <Footer/>
    </Fragment>
  );
}

export default App;
