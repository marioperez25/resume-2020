import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { COLORS } from '../Colors'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width:  fit-content;
    position: fixed;
    top: 0;
    button {
        font-weight: bold;
        font-size: 14px;
        background-color: ${COLORS.lightBlue};
        color: ${COLORS.dark};
        border-radius: 3px;
        border: 1px solid ${COLORS.lightBlue};
        margin: 1px;
        &:disabled {
            background-color: ${COLORS.dark};
            color: ${COLORS.lightBlue};
            border-radius: 3px;
            border: 1px solid ${COLORS.lightBlue};
        }
    }
`

export default function Bio(props){
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    return(
            <Wrapper>
                <button 
                    disabled={
                        theme === 'dark'
                    }
                    onClick={
                    () => dispatch({ 
                        type: 'SET_DARK_THEME'
                    })
                }>dark
                </button>
                <button 
                    disabled={
                        theme === 'light'
                    }
                    onClick={
                    () => dispatch({ 
                        type: 'SET_LIGHT_THEME'
                    })
                }>light
                </button>
            </Wrapper>
    )
}