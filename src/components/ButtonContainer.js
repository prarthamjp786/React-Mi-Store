import styled from 'styled-components'

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size:1.4rem;
    background:transparent;
    border:0.05rem solid var(--lightBlue);
    color:var(--lightBlue);
    border-radius:0.5rems;
    padding: 0.2rems 0.5rems;
    cursor:pointer;
    margin: 0.2rems 0.5rems 0.2rems 0;
    transisiton: all 0.5s ease-in-out;
    &:hover{
        background:var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus{
        outline: none;
    }
`;

export default ButtonContainer;