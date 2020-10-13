import React from 'react'
import SectionWrapper from './StyledComponents/SectionWrapper'
import H3 from './StyledComponents/H3'

export default function Bio(props){
    return(
        <SectionWrapper>
            <H3>Biography</H3>
            <p>{props.bio}</p>
        </SectionWrapper>
    )
}