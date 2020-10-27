import React, { Fragment } from 'react'
import SectionWrapper from '../styled-components//SectionWrapper'
import UnorderedList from '../styled-components//UnorderedList'
import ListItem from '../styled-components//ListItem'
import H3 from '../styled-components//H3'
import ContactForm from './ContactForm'
import Phone from './Phone'
import Email from './Email'

export default function Contact(props){
    const { 
        email = '',
        phone =''
    } = props.contact || {}

    const profiles = props.devprofiles ? props.devprofiles.map(
        (profile, index) => 
        <ListItem
            key={index}>
            <a 
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"            
            >{profile.name}</a>
        </ListItem>
    ) : []

    return(
        <Fragment>
            <SectionWrapper>
                <H3>Contact Information</H3>
                <p>Phone Number:</p>
                <Phone
                    phone={phone}
                />
                <p>Email:</p>
                <Email
                    email={email}
                />
            </SectionWrapper>
            <SectionWrapper>            
                <H3>Write me:</H3>
                <ContactForm/>
            </SectionWrapper>
            <SectionWrapper>            
                <H3>Feel free to follow</H3>
                <UnorderedList>
                    {profiles}
                </UnorderedList>
            </SectionWrapper>
        </Fragment>
    )

}