import styled from "styled-components"; 
import { Promo } from "../promo/Promo";

export const Main = () => {
  return (
    <StyledMain>
      <Promo/>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #cbcb46
`;

