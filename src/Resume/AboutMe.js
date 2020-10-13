import React from 'react'
import styled from 'styled-components'

const AboutMeContainer = styled.section`
    padding: 30px 30px;
    max-width: fit-content;
    margin: auto;
    @media(min-width: 768px){
        padding: 70px 30px;
    }
    font-family: 'Cabin', sans-serif;
    p {
        font-size: 20px;
    }
`;

export default function Bio(props){
    return(
        <AboutMeContainer>
            <p>{props.bio}</p>
        </AboutMeContainer>
    )
}
