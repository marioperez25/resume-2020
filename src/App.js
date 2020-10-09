import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import { createStore } from 'redux'
import Header from './Resume/Header'
import Skills from './Resume/Skills'
import { COLORS } from './Resume/Colors.js'
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
  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setApiData(data);
  }

  useEffect(()=>{
    loadData();
  },[])

  const Footer = styled.p`
    display: block;
    background-color: ${COLORS.vanilla}
  `;

  return (
    <Fragment>
      <Header
        profile={apiData}/>
      <Skills
        skills={dude.skills}
      />
      <Footer>
        Feel free to reach me at <a href="mailto:mariofph@gmail.com">mariofph@gmail.com</a>
      </Footer>
    </Fragment>
  );
}



export default App;
