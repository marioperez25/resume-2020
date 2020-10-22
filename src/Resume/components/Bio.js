import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SectionWrapper from '../styled-components//SectionWrapper'
import H3 from '../styled-components//H3'

export default function Bio(props){
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return(
            <SectionWrapper>
                <H3>Biography</H3>
                <p>{props.bio}</p>
                <h2>redux state test:</h2>
                <p>{counter}</p>
                <button onClick={
                    () => dispatch({ 
                        type: 'INCREMENT'
                    })
                }>Increment counter
                </button>
                <button onClick={
                    () => dispatch({ 
                        type: 'DECREMENT'
                    })
                }>Increment counter
                </button>
            </SectionWrapper>
    )
}