import styled from "styled-components";

const StyledHeader = styled.div`
  /* border: 1px solid red; */
  padding: 5rem;
  height: calc(90vh);
  min-width: 100vw;
  background-image: url("/images/header/hero-header-bc.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  background-size: cover;


  @media only screen and (max-width: 760px) {
  }
`;

const StyledBanner = styled.h1`
  color: var(--color-grey-900);
  font-size: 6rem;
  font-weight: bolder;
  text-align: center;

  @media only screen and (max-width: 1032px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 736px) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: 590px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 443px) {
    margin: auto;
    width: 60%;
  }

  @media only screen and (max-width: 392px) {
    width: 65%;
  }
`;

const StyledSlogan = styled.h2`
  color: var(--color-grey-800);
  font-size: 2.5rem;
  font-weight: 100;
  text-align: center;
  @media only screen and (max-width: 1032px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 736px) {
    font-size: 1.6rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledBanner>Find Your Perfect Property</StyledBanner>
      <StyledSlogan>
        Buy,Sell or Rent Lands,Flats,Villas, and Homes in One Place.
      </StyledSlogan>
    </StyledHeader>
  );
}
