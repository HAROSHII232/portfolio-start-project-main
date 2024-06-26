import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Pagination = () => {
  return (
    <StyledPagination>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 50px;

  @media ${theme.media.tablet} {
    margin-top: 30px;
  }
`;

const Dot = styled.div`
  border: 3px solid #b3b7bc;
  width: 39px;
  height: 0px;

  &:first-child {
    border: 3px solid #28553f;
  }
`;
