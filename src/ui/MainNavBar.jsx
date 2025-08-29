import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledMainNavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4.3rem;
  border-bottom: 1px solid var(--color-grey-200);

  @media only screen and (max-width: 1120px) {
  }
`;

export default function MainNavBar() {
  return (
    <StyledMainNavBar>
      <Logo />
      <MainNav />
    </StyledMainNavBar>
  );
}
