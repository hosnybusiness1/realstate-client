import styled from "styled-components";

const StyledFormHRow = styled.div`
  position: relative;
  margin-bottom: 2rem;

  &:last-child {
    padding-bottom: 0;
  }

  &:has(input[required])::after {
    content: "*";
    font-size: 2.2rem;
    color: red;
    position: absolute;
    top: 0.6rem;
    right: 1rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormHRow({ label, error, eye, children, orientation }) {
  return (
    <StyledFormHRow orientation={orientation}>
      {children}
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {error && <Error>{error}</Error>}
    </StyledFormHRow>
  );
}

export default FormHRow;
