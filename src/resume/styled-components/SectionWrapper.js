import styled from 'styled-components'

const SectionWrapper = styled.section`
    padding: 0px 30px 30px 30px;
    width: 100%;
    margin: auto;
    font-family: 'Cabin', sans-serif;
    &:first-of-type {
        padding: 30px 30px;
    }
    @media(min-width: 768px){
        width: 600px
    }
    p, li, a, label {
        font-size: 20px;
        @media(min-width: 768px){
            font-size: 22px;
            text-align: justify;
        }
    }
`;

export default SectionWrapper;