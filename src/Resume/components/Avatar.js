import React, { Fragment }from 'react'
import AvatarPlaceholder from '../styled-components/AvatarPlaceholder'
import AvatarRound from '../styled-components/AvatarRound'

function Header(props){
    return(
        <Fragment>
            {props.imageUrl ?
                <AvatarRound
                    src={props.imageUrl}
                    alt="avatar"
                /> : <AvatarPlaceholder/>}
        </Fragment>
    )
}

export default Header;