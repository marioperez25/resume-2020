import React from 'react'
import SectionWrapper from '../styled-components//SectionWrapper'
import UnorderedList from '../styled-components//UnorderedList'
import ListItem from '../styled-components//ListItem'
import H3 from '../styled-components//H3'

export default function Skills(props){
    
    const skills = props.skills ? (props.skills).map(
        (skill,index) => 
            <ListItem
                key={index}
            >
                {skill}
            </ListItem>
    ) : []

    return(
        <SectionWrapper>
            <H3>Skills</H3>
            <UnorderedList>
                {skills}
            </UnorderedList>
        </SectionWrapper>
    )
}