import React, { Fragment }from 'react'
import AvatarPlaceholder from '../StyledComponents/AvatarPlaceholder'
import AvatarRound from '../StyledComponents/AvatarRound'

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