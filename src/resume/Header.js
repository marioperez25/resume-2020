import React, {
    useState,
    useEffect
}  from 'react'
import profileLoader from './effects/profileLoader'
import Avatar from './components/Avatar'
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
      profileLoader(GIT_PROFILE_API,setgitAPI, 'gitProfile')
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