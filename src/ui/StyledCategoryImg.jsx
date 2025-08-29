import styled from "styled-components";

const StyledCategoryImg = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
  filter: opacity(100%);
  transform: scale(1);
  transition: all 0.4s;
  &:hover {
    filter: opacity(70%);
    transform: scale(1.1);
  }
`;

export default StyledCategoryImg;
