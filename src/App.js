import React, { useState, useEffect, Fragment } from 'react'
import Header from './Resume/Header'
import Skills from './Resume/Skills'
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
        "Great problem solving and debugging skills",
        "Always looking to improve and learn",
        "3+ years of experience working with JS, HTML and CSS",
        "Experience with VUE",
        "Experience with TDD using Jest"
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
  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setApiData(data);
  }

  useEffect(()=>{
    loadData();
  },[])

  return (
    <Fragment>
      <Header
        profile={apiData}/>
      <Skills
        skills={dude.skills}
      />
    </Fragment>
  );
}



export default App;
