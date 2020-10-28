import React, { Fragment } from 'react'

export default function Phone(props) {
    const phone = props.phone
    return (
        <Fragment>
            <a href={`tel:+${phone}`}>
                        {phone.replace(/\D+/g, '')
                        .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}
                    </a>
        </Fragment>
    )
}