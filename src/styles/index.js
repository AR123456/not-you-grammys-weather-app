import styled from "styled-components";
import { Container, Card, Form } from "reactstrap";

const teal = "#17a2b8";
const outline = `2px solid ${teal}`;

export const Wrapper = styled(Container)`
    .row:first-child {
        margin: 1.5em -15px;
    }
    .col > h2 {
        margin-top: 1em;
    }
`

export const FormWrapper = styled(Form)`
    justify-content: flex-end;
    margin-top: 1em;
    input.form-control {
        border-radius: .25rem 0 0 .25rem;
        width: 325px;
    }
    button {
        border-radius: 0 .25rem .25rem 0;
    }
`

export const DayWrapper = styled.div`
    cursor: pointer;
    .card {
        border-width: 2px;
    }
    &:hover {
        .card {
            border: ${outline};
        }
    }
    .card {
        border: ${props => props.isActive ? outline : null};
        text-align: center;
    }
    .card-header {
        background: ${props => props.isActive ? teal : null};
        border-bottom: ${props => props.isActive ? outline : null};
        border-bottom-width: 2px;
        color: ${props => props.isActive ? "white" : null};
        font-weight: ${props => props.isActive ? 700 : null};
        padding: .75rem 1rem;
    }
    img {
        width: 75px;
    }
`

export const DetailsWrapper = styled(Card)`
    border: ${outline};
    margin: 1em 0;
    text-align: center;
    h3 {
        font-size: 2.5rem;
        font-weight: 500;
        margin-top: .5em;
    }
    h4 {
        padding-bottom: 1em;
    }
`