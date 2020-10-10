import React, { useState, useEffect, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import styled from 'styled-components'
import { COLORS } from './Colors'

import Skills from './Skills'
import Contact from './Contact'

const Navigation = styled.nav`
    width: 100%;
    height: 50px;
    background-color: ${COLORS.dark};
    justify-content: center;
    display: flex;
    position: sticky;
    top: 0;
    a {
        padding: 10px;
        font-size: 22px;
        border: 1px solid ${COLORS.dark};
        color: white;
        text-decoration: none;
        background-color: ${COLORS.dark};
        &:hover {
            color: ${COLORS.red}
        }
    }
`;


export default function Resume(){
    const [ resume ] = useState({
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
    
    return(
        <Fragment>
            <Router>
            <div>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
                
                <Switch>
                <Route path="/skills">
                    <Skills
                        skills={resume.skills}
                    />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Skills
                        skills={resume.skills}
                    />
                </Route>
                </Switch>
            </div>
            </Router>
        </Fragment>
    )
}