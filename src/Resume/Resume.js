import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Navigation from './StyledComponents/Navigation'
import Bio from './Bio'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'

export default function Resume(props){
    const {
        contact,
        experience
    } = props.resume;

    const {
        contact_info,
        skills,
        devprofiles
    } = props.jsonBin

    console.log(contact_info)

    return(
        <Router>
            <div>
                <Navigation>
                    <Link to="/">About me</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
                           
                <Switch>
                <Route path="/skills">
                    <Skills
                        skills={skills}
                    />
                </Route>
                <Route path="/contact">
                    <Contact
                        contact={contact}
                        devprofiles={devprofiles}    
                    />
                </Route>
                <Route path="/">
                    <Bio
                        bio={props.bio}
                    />
                    <Experience
                        exp={experience}
                    />
                </Route>
                </Switch>
            </div>
        </Router>
    )
}