import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  text-transform: capitalize;
  &:link,
  &:visited {
    color: var(--color-primary);
    font-size: 1.6rem;
    font-weight: 600;
    /* padding: 1.2rem 2.4rem; */
    margin-left: 1rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }
`;

export default StyledNavLink;
