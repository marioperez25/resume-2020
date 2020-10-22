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
// State Management:
import store from './store/configureStore'
import { Provider } from 'react-redux'
// Custom Components:
import profileLoader from './services/profileLoader'
import Bio from './components/Bio'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { Nav } from './styled-components//Nav'

export default function Main(props){
    const [ resume, setResume ] = useState({})
    const API = 'https://api.jsonbin.io/b/5f84d311302a837e95789669/9'
    const {
        skills,
        contact_info,
        devprofiles,
        bio,
        work_experience
    } = resume

    useEffect(()=>{
        profileLoader(API,setResume);
      },[])

    return(
        <Provider
                store={store}
            >
        <Router>
                <div>
                    <Nav>
                        <Link
                            to="/"
                        >About me</Link>
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
        </Provider>
    )
}