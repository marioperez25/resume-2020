import React from 'react'
import SectionWrapper from '../StyledComponents/SectionWrapper'
import UnorderedList from '../StyledComponents/UnorderedList'
import ListItem from '../StyledComponents/ListItem'
import H3 from '../StyledComponents/H3'

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