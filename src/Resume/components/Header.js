import React, {
    useState,
    useEffect
}  from 'react'
import profileLoader from './Services/profileLoader'
import Avatar from './Avatar'
import { HeaderWrapper,
    Name,
    LeftSideContainer,
    RightSideContainer,
    Role
} from './styled-components/Header'

function Header(){
    const GIT_PROFILE_API = 'https://api.github.com/users/marioperez25'
    const [ gitAPI, setgitAPI] = useState({})
    const {
        name,
        avatar_url
    } = gitAPI;

    useEffect(()=>{
      profileLoader(GIT_PROFILE_API,setgitAPI)
    },[])

    return(
        <HeaderWrapper>
            <LeftSideContainer>
                <Name>{name 
                    ? name
                    : 'Mario Perez'}
                </Name>
                <Role>Web Developer</Role>
            </LeftSideContainer>
            <RightSideContainer>
                <Avatar
                    imageUrl={avatar_url}
                />
            </RightSideContainer>
        </HeaderWrapper>
    )
}

export default Header;