import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-brand-200);
  /* background-color: var(--color-grey-50); */
  color: var(--color-gray-600);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
  width: 100%;

  & ~ label {
    position: absolute;
    top: 0.7rem;
    left: 1rem;
    color: var(--color-grey-400);
    background-color: white;
    font-size: 1.7rem;
    transition: all 0.3s;

@media only screen and (max-width: 760px) {
      font-size: 1.5rem;
    }

    @media only screen and (max-width: 600px) {
      font-size: 1.4rem;
    }

    @media only screen and (max-width: 395px) {
      font-size: 1.3rem;
    }

   
  }
  &::placeholder {
    color: transparent;
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: -1rem;
    left: 1rem;
    color: var(--color-brand-700);
    font-size: 1.3rem;
    font-weight: 700;
    z-index: 100;
  }

  &:not(:focus):not(:placeholder-shown) ~ label {
    color: var(--color-grey-400);
  }

  &::placeholder {
    opacity: 1;
  }

  &:focus-within {
    outline: none;
    ::-webkit-input-placeholder {
      color: transparent;
    }
    &:focus:-moz-placeholder {
      color: transparent;
    } /* FF 4-18 */
    &:focus::-moz-placeholder {
      color: transparent;
    } /* FF 19+ */
    &:focus:-ms-input-placeholder {
      color: transparent;
    }
    &::placeholder {
      color: transparent;
    }
  }
`;

export default Input;
