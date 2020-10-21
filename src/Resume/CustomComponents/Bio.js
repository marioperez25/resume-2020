import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SectionWrapper from '../StyledComponents/SectionWrapper'
import H3 from '../StyledComponents/H3'

export default function Bio(props){
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return(
            <SectionWrapper>
                <H3>Biography</H3>
                <p>{props.bio}</p>
                <h2>redux state test:</h2>
                <p>{counter}</p>
                <button onClick={() => dispatch(
                    { 
                        type: 'INCREMENT'
                    })
                }>
                    Increment counter
                </button>
                <button onClick={() => dispatch(
                    { 
                        type: 'DECREMENT'
                    })
                }>
                    DECREMENT counter
                </button>
            </SectionWrapper>
    )
}