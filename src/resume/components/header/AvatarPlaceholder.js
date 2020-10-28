import styled from 'styled-components'
import { COLORS } from '../../Colors'

const AvatarPlaceholder = styled.span`
    display: block;
    height: 195px;
    width: 195px;
    margin: auto;
    border: 5px dotted ${COLORS.lightBlue};
    background:
    linear-gradient(63deg, #999 23%, transparent 23%) 7px 0,
    linear-gradient(63deg, transparent 74%, #999 78%),
    linear-gradient(63deg, transparent 34%, #999 38%, #999 58%, transparent 62%),
    #444;
    background-size: 16px 48px;
    border-radius: 50%;
    -webkit-box-shadow: 11px 8px 11px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 11px 8px 11px -2px rgba(0,0,0,0.75);
    box-shadow: 11px 8px 11px -2px rgba(0,0,0,0.75);
`

export default AvatarPlaceholder;