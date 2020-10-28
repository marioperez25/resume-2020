import React from 'react'
import SectionWrapper from '../styled-components/SectionWrapper'
import H3 from '../styled-components/H3'

export default function Bio(props){
    return(
            <SectionWrapper>
                <H3>Biography</H3>
                <p>{props.bio}</p>
            </SectionWrapper>
    )
}