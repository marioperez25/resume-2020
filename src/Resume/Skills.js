import React from 'react'
import styled from 'styled-components'
import { COLORS } from './Colors'

const SkillsContainer = styled.section`
    background-color: ${COLORS.purple};
    padding: 30px 30px;
    @media(min-width: 768px){
        padding: 70px 30px;
    }
    font-family: 'Cabin', sans-serif;
`;
const Intro = styled.h3`
    font-size: 30px;
    color: ${COLORS.pink};
    margin-bottom: 15px;
    text-align: center;
`;
const List = styled.ul`
    display: block;
    width: 100%;
    margin: auto;
    padding-inline-start: 0px;
    width: fit-content;
    margin: auto!important;
`;
const Skill = styled.li`
    width: fit-content;
    color: ${COLORS.vanilla};
    font-size: 19px;
    margin-bottom: 10px;
    @media (min-width: 768px){
        font-size: 20px;
    }
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