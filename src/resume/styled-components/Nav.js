import styled from 'styled-components'
import { COLORS } from '../Colors'

export const Nav = styled.nav`
    background-color: ${COLORS.dark};
    justify-content: center;
    display: flex;
    position: sticky;
    top: 0;
    font-family: 'Cabin', sans-serif;
    a {
        padding: 10px;
        font-size: 22px;
        border: 1px solid ${COLORS.dark};
        color: white;
        text-decoration: none;
        background-color: ${COLORS.dark};
        &:hover {
            color: ${COLORS.lightBlue}
        }
    }
`;
