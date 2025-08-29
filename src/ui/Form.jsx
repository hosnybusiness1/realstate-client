import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type !== "modal" &&
    css`
      padding: 2rem 4rem 0.3rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
      -webkit-box-shadow: 1px 1px 5px 2px var(--color-grey-200);
      box-shadow: 1px 3px 5px 2px var(--color-grey-200);
      width: 100%;
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
 
  margin: 1rem auto;
  overflow: hidden;
  font-size: 1.4rem;

@media only screen and (max-width: 500px) {
    padding: 2rem 2rem 0.3rem;
  }

  @media only screen and (max-width: 390px) {
    padding: 2rem 1rem 0.3rem;
  }
`;

export default Form;
