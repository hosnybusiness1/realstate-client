import styled from "styled-components";

const styledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

export default function Footer() {
  return (
    <styledFooter>Created by Hosny A.Barakat &copy; copywrite</styledFooter>
  );
}
