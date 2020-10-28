// React:
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
// Redux:
import { useDispatch } from 'react-redux'
// Custom Components:
import isDaytime from './effects/isDaytime'
import profileLoader from './effects/profileLoader'
import Bio from './components/Bio'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/contact/Contact'
import { Nav } from './styled-components/Nav'

export default function Main(){
    
    const [ resume, setResume ] = useState({})

    const API = 'https://api.jsonbin.io/b/5f84d311302a837e95789669/9'

    const {
        skills,
        contact_info,
        devprofiles,
        bio,
        work_experience,
    } = resume
    const dispatch = useDispatch()

    function dayTimeEffect(){
        let daytime = isDaytime();
        daytime ? dispatch({type: 'SET_REACT_THEME'})
        : dispatch({type: 'SET_REDUX_THEME'})
    }

    useEffect(() => {
        dayTimeEffect()
    },[])

    useEffect(() => {
        profileLoader(API,setResume,'JSONresume')
    },[])

    return(
        <div>
            <Router>
                <div>
                    <Nav>
                        <Link
                            to="/"
                        >About</Link>
                        <Link
                            to="/skills"
                        >Skills</Link>
                        <Link
                            to="/contact"
                        >Contact</Link>
                    </Nav>
                            
                    <Switch>
                    <Route 
                        path="/skills">
                        <Skills
                            skills={skills}
                        />
                    </Route>
                    <Route 
                        path="/contact">
                        <Contact
                            contact={contact_info}
                            devprofiles={devprofiles}    
                        />
                    </Route>
                    <Route 
                        path="/">
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
        </div>
    )
}