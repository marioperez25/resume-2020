import styled from 'styled-components'
import { COLORS } from '../Colors'

export const HeaderWrapper = styled.div`
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

export const Name = styled.h1`
    color: ${COLORS.lightBlue};
    font-size: 36px;
    font-family: 'Anton', sans-serif;
`;

export const LeftSideContainer = styled.div`
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

export const RightSideContainer = styled.div`
    @media(min-width: 768px){
        margin-right: 20px;
    }
`

export const Role = styled.h2`
    font-size: 25px;
    color: white;
    font-family: 'Anton', sans-serif;
`;

