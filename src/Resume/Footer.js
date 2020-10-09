import React, { Fragment } from 'react'
import styled from 'styled-components'
import { COLORS } from './Colors.js'

const Contact = styled.p`
    display: block;
    background-color: ${COLORS.vanilla};
    color: ${COLORS.graphite};
    height: 100px;
    text-align: center;
    padding-top: 15px;
`;
const Anchor = styled.a`
    color: ${COLORS.purple};
    &:hover {
        color: ${COLORS.gray};
    }
`;

export default function Footer(props){
    return (
        <Fragment>
            <Contact>
                <p>Feel free to reach me at <Anchor href="mailto:mariofph@gmail.com">mariofph@gmail.com <span role="img" aria-label="none">🚀</span></Anchor></p>
                <p>this site was built using react+hooks</p>
                <p>comming soon: redux</p>
            </Contact>
            
        </Fragment>
    )
}