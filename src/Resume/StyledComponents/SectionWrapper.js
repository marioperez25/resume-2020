import styled from 'styled-components'

const SectionWrapper = styled.section`
    padding: 0px 30px;
    max-width: 600px;
    width: fit-content;
    margin: auto;
    @media(min-width: 768px){
        padding: 0px 30px;
    }
    font-family: 'Cabin', sans-serif;
    &:first-of-type {
        padding: 30px 30px;
        @media(min-width: 768px){
            padding: 30px 30px;
        }
    }
`;

export default SectionWrapper;