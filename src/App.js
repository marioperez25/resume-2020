import React, { useState, Fragment } from 'react'
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

  return (
    <Fragment>
      <Header
        profile={dude.profile}/>
      <Skills
        skills={dude.skills}
      />
    </Fragment>
  );
}



export default App;
