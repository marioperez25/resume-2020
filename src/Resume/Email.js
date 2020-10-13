import React, { Fragment } from 'react'

export default function Email(props) {
    return(
        <Fragment>
                    <a href={`mailto:+${props.email}`}>{props.email}</a>
        </Fragment>
    )
}