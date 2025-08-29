import { Outlet } from "react-router-dom";
import styled from "styled-components";
import MainNavBar from "./MainNavBar";

const StyledAppLayout = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  /* background-color: var(--color-grey-50); */
  margin: 0 auto;
  padding: 4rem 6.4rem;
  width: 100%;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <MainNavBar />
      <Outlet />
    </StyledAppLayout>
  );
}
