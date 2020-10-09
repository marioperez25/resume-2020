import React, { Fragment }from 'react'
import styled from 'styled-components'

const AvatarContainer = styled.img`
    display: block;
    border-radius: 50%;
    border: 1px solid black;
    height: 150px;
    margin: auto;
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