import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    width: 100%;
    text-align: center;
    padding-top: 15px;
`;

export default function Footer(props){
    return (
        <FooterWrapper>
            <p>this site was built using react+hooks</p>
            <p>comming soon: redux</p>
        </FooterWrapper>
    )
}