import React from 'react'
import SectionWrapper from './StyledComponents/SectionWrapper'
import UnorderedList from './StyledComponents/UnorderedList'
import ListItem from './StyledComponents/ListItem'
import H3 from './StyledComponents/H3'

export default function Experience(){
    return(
        <SectionWrapper>   
            <H3>Work Experience:</H3>
            <UnorderedList>
                <ListItem>Accenture | 2013 - OnGoing | Currently I’m a Software Developer for an Agroscience client. Amongst my duties I'm responsible for developing AEM components as well as leading the front end Development team and providing coaching to less experienced Developers,  Also I teach a Git and Git-Flow course for other Devs.  Prior to 2020 I performed as a Front End Developer for a fully remote telecom company where I was responsible for creating responsive sites that provide their customers with up-to-date info about plans and pricing. My contributions to the team include automating the data entry process using async calls, the automation of image sprite creation via gulp, as well as promoting the use of ES6 and the implementation of BABEL as part of  our build process allowing us to work with modern JavaScript features (ES6), later upgraded to a Webpack graph to improve performance and add modularity to our JS. My previous work in accenture includes performing functional and acceptance testing, content management  and later front end development with accessibility for a banking client, and  also Email development for Pitney Bowes.</ListItem>
                <ListItem>Western Union | 2008 - 2013 | Provided technical support to different POS applications. This was a great experience to develop my communication skills since we provided support for stores around the globe. In addition I perform functional testing tasks on the POS applications.</ListItem>
            </UnorderedList>
        </SectionWrapper>
    )
}