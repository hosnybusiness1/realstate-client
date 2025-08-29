import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledCategoryLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  &:link,
  &:visited {
    display: flex;
    align-items: center;
  }
`;

export default StyledCategoryLink;
