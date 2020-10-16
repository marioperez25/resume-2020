import React, {
    useState,
    useEffect
}  from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import profileLoader from './Services/profileLoader'
import Bio from './CustomComponents/Bio'
import Experience from './CustomComponents/Experience'
import Skills from './CustomComponents/Skills'
import Contact from './CustomComponents/Contact'
import { Nav } from './StyledComponents/Nav'

export default function Resume(props){
    const [ resume, setResume ] = useState({})
    const api = 'https://api.jsonbin.io/b/5f84d311302a837e95789669/9'
    const {
        skills,
        contact_info,
        devprofiles,
        bio,
        work_experience
    } = resume

    useEffect(()=>{
        profileLoader(api,setResume)
      },[])

    return(
        <Router>
            <div>
                <Nav>
                    <Link to="/">About me</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/contact">Contact</Link>
                </Nav>
                           
                <Switch>
                <Route path="/skills">
                    <Skills
                        skills={skills}
                    />
                </Route>
                <Route path="/contact">
                    <Contact
                        contact={contact_info}
                        devprofiles={devprofiles}    
                    />
                </Route>
                <Route path="/">
                    <Bio
                        bio={bio}
                    />
                    <Experience
                        jobs={work_experience}
                    />
                </Route>
                </Switch>
            </div>
        </Router>
    )
}