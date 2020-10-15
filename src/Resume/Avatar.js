import React, { Fragment }from 'react'
import styled from 'styled-components'
import { COLORS } from './Colors'

const AvatarContainer = styled.img`
    display: block;
    height: 195px;
    width: 195px;
    margin: auto;
    border: 5px dotted ${COLORS.lightBlue};
    border-radius: 50%;
    -webkit-box-shadow: 11px 8px 11px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 11px 8px 11px -2px rgba(0,0,0,0.75);
    box-shadow: 11px 8px 11px -2px rgba(0,0,0,0.75);
`

function Header(props){
    return(
        <Fragment>
            <AvatarContainer
                src={props.imageUrl}
                alt="avatar"
            />
        </Fragment>
    )
}

export default Header;