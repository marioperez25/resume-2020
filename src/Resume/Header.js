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
    @media (min-width: 768px) {
        flex-direction: row;
    }
`
const Name = styled.p`
    color: ${COLORS.purple};
    font-weight: bold;
    font-size: 28px;
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
        margin-right: 20px;
        line-height: 2;
    }
`

const RightSideContainer = styled.div`

`

function Header(props){
    console.log(props);
    return(
        <Wrapper>
            <LeftSideContainer>
                <Name>{props.profile.name} {props.profile.lastName}</Name>
                <Bio> {props.profile.bio} </Bio>
            </LeftSideContainer>
            <RightSideContainer>
                <Avatar
                    imageUrl={props.profile.avatar}
                />
            </RightSideContainer>
        </Wrapper>
    )
}

export default Header;