import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import { COLORS } from './Colors'

const Wrapper = styled.div`
    display: flex;
    background-color: ${COLORS.pink};
    flex-direction: column;
    margin: auto;
    width: 100%;
    justify-content: center;
    padding: 40px 0px;
    position: sticky;
    top: 0;
    -webkit-box-shadow: 0px 11px 5px -1px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px 11px 5px -1px rgba(0,0,0,0.33);
    box-shadow: 0px 11px 5px -1px rgba(0,0,0,0.33);
    @media (min-width: 768px) {
        flex-direction: row-reverse;
    }
`
const Name = styled.p`
    color: ${COLORS.purple};
    font-size: 36px;
    font-family: 'Anton', sans-serif;
`;
const Bio = styled.p`
    color: ${COLORS.purple};
    font-weight: bold;
    font-size: 16px;
`;
const LeftSideContainer = styled.div`
    text-align: center;
    margin-bottom: 10px;
    @media (min-width: 768px) {
        text-align: left;
        margin-left: 20px;
        line-height: 2;
        padding-top: 40px;
    }
`
const RightSideContainer = styled.div`
    margin-right: 20px;
    
`

function Header(props){

    const {
        name,
        bio,
        avatar_url
    } = props.profile;

    return(
        <Wrapper>
            <LeftSideContainer>
                <Name>{name ? name : 'name'}</Name>
                <Bio> {bio ? bio : 'lorem ipsum '}</Bio>
            </LeftSideContainer>
            <RightSideContainer>
                <Avatar
                    imageUrl={avatar_url}
                />
            </RightSideContainer>
        </Wrapper>
    )
}

export default Header;