import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import { COLORS } from './Colors'

const HeaderWrapper = styled.div`
    display: flex;
    background-color: ${COLORS.dark};
    flex-direction: column;
    margin: auto;
    width: 100%;
    justify-content: center;
    padding: 40px 0px;
    -webkit-box-shadow: 0px 11px 5px -1px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px 11px 5px -1px rgba(0,0,0,0.33);
    box-shadow: 0px 11px 5px -1px rgba(0,0,0,0.33);
    @media (min-width: 768px) {
        flex-direction: row-reverse;
    }
`
const Name = styled.h1`
    color: ${COLORS.red};
    font-size: 36px;
    font-family: 'Anton', sans-serif;
`;
const LeftSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 10px;
    @media (min-width: 768px) {
        text-align: left;
        margin-left: 20px;
        line-height: 2;
    }
`
const RightSideContainer = styled.div`
    @media(min-width: 768px){
        margin-right: 20px;
    }
`
const Role = styled.h2`
    font-size: 20px;
    color: white;
    font-family: 'Anton', sans-serif;
`;
function Header(props){

    const {
        name,
        avatar_url
    } = props.profile;

    return(
        <HeaderWrapper>
            <LeftSideContainer>
                <Name>{name ? name : 'loading...'}</Name>
                <Role>Web Developer</Role>
            </LeftSideContainer>
            <RightSideContainer>
                <Avatar
                    imageUrl={avatar_url}
                />
            </RightSideContainer>
        </HeaderWrapper>
    )
}

export default Header;