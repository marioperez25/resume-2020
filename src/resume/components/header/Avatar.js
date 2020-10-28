import React, { Fragment }from 'react'
import AvatarPlaceholder from './AvatarPlaceholder'
import AvatarRound from './AvatarRound'

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