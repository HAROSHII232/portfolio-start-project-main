import styled from "styled-components";
import { Promo } from "../promo/Promo";
import { Advantages } from "../advantages/Advantages";

export const Main = () => {
  return (
    <StyledMain>
      <Promo />
      <Advantages />
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #cbcb46;
`;
