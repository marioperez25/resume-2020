import React from 'react'
import { useSelector } from 'react-redux'
import SectionWrapper from '../StyledComponents/SectionWrapper'
import H3 from '../StyledComponents/H3'

export default function Bio(props){
    const originAmmount = useSelector(state => state.originAmmount)

    return(
            <SectionWrapper>
                <H3>Biography</H3>
                <p>{props.bio}</p>
                <h2>redux state test:</h2>
                <p>{originAmmount}</p>
            </SectionWrapper>
    )
}