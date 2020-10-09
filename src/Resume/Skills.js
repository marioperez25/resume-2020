import React from 'react'
import styled from 'styled-components'
import { COLORS } from './Colors'

const SkillsContainer = styled.section`
    background-color: ${COLORS.purple};
    padding: 15px;
`;
const Intro = styled.h3`
    color: ${COLORS.pink};
`;
const List = styled.ul`
    list-style-type: lower-alpha;
    display: block;
    width: 100%;
    margin: auto;
    padding-inline-start: 0px;
`;
const Skill = styled.li`
    color: white;
    list-style: inside;
`;

export default function Skills(props){
    const skills = (props.skills).map(
        (skill,index) => 
            <Skill
                key={index}
            >
                {skill}
            </Skill>
    )
    return(
        <SkillsContainer>
            <Intro>
                My skills:
            </Intro>
            <List>
                {skills}
            </List>
        </SkillsContainer>
    )
}