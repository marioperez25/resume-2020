import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { COLORS } from '../Colors'

const Wrapper = styled.div`
    display: block;
    height: fit-content;
    width:  fit-content;
    backgroun-color: white;

    button {
        background-color: ${COLORS.lightBlue};
        border-radius: 3px;
        border: 1px solid ${COLORS.lightBlue};
        margin: 1px;
        color: white;
        &:disabled {
            background-color: ${COLORS.dark};
            border-radius: 3px;
            border: 1px solid ${COLORS.dark};
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