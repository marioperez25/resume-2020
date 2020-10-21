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
import { createStore } from 'redux'
import profileLoader from './Services/profileLoader'
import Bio from './CustomComponents/Bio'
import Experience from './CustomComponents/Experience'
import Skills from './CustomComponents/Skills'
import Contact from './CustomComponents/Contact'
import { Nav } from './StyledComponents/Nav'

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

    // state:
    var defaultState = {
        originAmmount: '0.00'
    }
    
    // reducer:
    function  ammount(state = defaultState,action){
        if (action.type === 'INCREMENT') {
            /* return Object.assign(
                {},
                state,
                { originAmmount : action.data } 
            ) */
            return {
                ...state,
                originAmmount: action.data
            }
        }
        return state
    }
    
    // store:
    var store = createStore(ammount);

    // subscribe to updates from the store
    store.subscribe(
        function() {
            // access the state with store.getState()
            console.log('state', store.getState())
        }
    )
    
    // dispatch:
    store.dispatch({
        type: 'INCREMENT',
        data: '300.00'
    })

    useEffect(()=>{
        profileLoader(API,setResume)
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