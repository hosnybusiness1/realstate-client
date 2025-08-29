import { MdOutlineRealEstateAgent } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.h2`
  text-transform: uppercase;
  font-weight: bolder;
  /* letter-spacing: 1px; */

  &::first-letter {
    color: var(--color-brand-700);
    font-size: 4rem;
  }

  @media only screen and (max-width: 1120px) {
    /* font-size:3rem;  */
  }
`;

const LogoTitle = styled.div`
  display: flex;
  align-items: center;

  svg {
    /* border: 1px solid red; */
    fill: var(--color-brand-700);
    margin-right: 1rem;
    width: 5rem;
    height: 5rem;
  }

  @media only screen and (max-width: 1120px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 996px) {
    font-size: 1.2rem;
  }
`;

const RealState = styled.span`
  margin-left: 0.5rem;
  color: var(--color-yellow-700);
  font-size: 1.7rem;
  font-weight: 700;
  text-decoration: underline;

  @media only screen and (max-width: 996px) {
    font-size: 1.3rem;
  }
   @media only screen and (max-width: 865px) {
    font-size: 1.1rem;
  }
`;

export default function Logo() {
  return (
    <NavLink to="/">
      <div>
        <div>
          <LogoTitle>
            <MdOutlineRealEstateAgent />
            <StyledLogo>Hazem Abou Agiza</StyledLogo>
            <RealState>Real State.</RealState>
          </LogoTitle>
        </div>
        {/* <div>
          <span>Real State</span>
        </div> */}
      </div>
    </NavLink>
  );
}
