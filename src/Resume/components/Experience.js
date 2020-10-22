import React from 'react'
import SectionWrapper from '../styled-components//SectionWrapper'
import UnorderedList from '../styled-components//UnorderedList'
import ListItem from '../styled-components//ListItem'
import H3 from '../styled-components//H3'

export default function Experience(props){
    const yearOf = (date) => new Date(date).getFullYear()

    const jobs = props.jobs ? (props.jobs).map(
        (job,index) => 
            <ListItem
                key={index}
            >{job.company_name} | {yearOf(job.entry_date)} - {yearOf(job.exit_date) || "Current"} : {job.experience_summary}
            </ListItem>
    ) : []

    return(
        <SectionWrapper>   
            <H3>Work Experience:</H3>
            <UnorderedList>
                {jobs}
            </UnorderedList>
        </SectionWrapper>
    )
}