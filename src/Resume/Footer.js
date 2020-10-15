import React from 'react'
import styled from 'styled-components'
import { COLORS } from './Colors'

const FooterWrapper = styled.div`
    background-color: ${COLORS.dark};
    color: ${COLORS.lightBlue};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
    padding: 15px 0px;
    a {
        color: ${COLORS.lightBlue};
    }
`;

export default function Footer(){
    return (
        <FooterWrapper>
            <p>This site was built using <a href="https://reactjs.org/">React</a> with <a href="https://reactjs.org/docs/hooks-intro.html">hooks</a></p>
            <p>Hosted and deployed in Netlify</p>
            <p>Feel free to snoop the <a href="https://github.com/marioperez25/resume-2020">git repo</a>, star if you may</p>
            <p>Developed by Mario Perez, 2020 all rigths reserved</p>
        </FooterWrapper>
    )
}