import styled from "styled-components";

const CategoryLinksContainer = styled.ul`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 850px) {
    flex-wrap: wrap;
    gap: 3.5rem;
  }

  @media only screen and (max-width: 664px) {
    gap: 2rem;
  }

  @media only screen and (max-width: 620px) {
    gap: 3rem;
  }

  @media only screen and (max-width: 506px) {
    flex-direction: column;
    justify-content: center;
  }

  li {
    width: 22%;
    height: 22rem;
    border-radius: 10px;
    overflow: hidden;

    @media only screen and (max-width: 1032px) {
      width: 22%;
      height: 15rem;
    }

    @media only screen and (max-width: 850px) {
      width: 46%;
      height: 20rem;
    }

    @media only screen and (max-width: 664px) {
      width: 47.5%;
      height: 20rem;
    }

    @media only screen and (max-width: 620px) {
      width: 46%;
      height: 20rem;
    }
    @media only screen and (max-width: 592px) {
      width: 45%;
      height: 20rem;
    }

    @media only screen and (max-width: 540px) {
      width: 45%;
      height: 15rem;
    }

    @media only screen and (max-width: 506px) {
      width: 90%;
      height: 20rem;
    }

    @media only screen and (max-width: 425px) {
      width: 100%;
      height: 17rem;
    }
  }
`;

export default function StyledCategoryLinksContainer() {
  return (
    <CategoryLinksContainer>
      <li>
        <StyledCategoryLink to="">
          <StyledCategoryImg
            src="/ecommerce_product_images/earbuds.png"
            alt="Earbuds"
          />
        </StyledCategoryLink>
      </li>
      <li>
        <StyledCategoryLink to="">
          <StyledCategoryImg
            src="/ecommerce_product_images/smartphone.png"
            alt="Smart phone"
          />
        </StyledCategoryLink>
      </li>
      <li>
        <StyledCategoryLink href="">
          <StyledCategoryImg
            src="/ecommerce_product_images/laptop.png"
            alt="Labtop"
          />
        </StyledCategoryLink>
      </li>
      <li>
        <StyledCategoryLink to="">
          <StyledCategoryImg
            src="/ecommerce_product_images/smartwatch.png"
            alt="Smar watch"
          />
        </StyledCategoryLink>
      </li>
    </CategoryLinksContainer>
  );
}
