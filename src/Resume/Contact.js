import React from 'react'
import SectionWrapper from './StyledComponents/SectionWrapper'
import UnorderedList from './StyledComponents/UnorderedList'
import ListItem from './StyledComponents/ListItem'
import H3 from './StyledComponents/H3'

export default function Contact(props){
    const { 
        email,
        phone 
    } = props.contact

    const profiles = props.devProfiles.map(
        profile => <ListItem>
            <a 
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"            
                >{profile.name}</a>
        </ListItem>
    )

    return(
        <SectionWrapper>
            <H3>Contact Information</H3>
            <UnorderedList>
                <ListItem><span role="img" aria-label="">📱</span> Phone Number:
                    <a href={`tel:+${phone}`}>
                        {phone.replace(/\D+/g, '')
                        .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}
                    </a>
                </ListItem>
                <ListItem><span role="img" aria-label="">📮</span> Email: <a href={`mailto:+${email}`}>{email}</a></ListItem>
                {profiles}
            </UnorderedList>
        </SectionWrapper>
    )

}