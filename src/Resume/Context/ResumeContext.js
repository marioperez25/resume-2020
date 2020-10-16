import React, {
    useState,
    useEffect,
}  from 'react'
import profileLoader from '../Services/profileLoader'

export default function ResumeContext(props){
    const [ resume, setResume ] = useState({})
    
    const API = 'https://api.jsonbin.io/b/5f84d311302a837e95789669/9'

    const ResumeContext = React.createContext(resume);

    useEffect(()=>{
        profileLoader(API,setResume)
      },[])

    return(
        <ResumeContext>
            {props.children}
        </ResumeContext>
    )
}