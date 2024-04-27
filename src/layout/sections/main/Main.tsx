import styled from "styled-components";
import { Promo } from "../promo/Promo";
import { Advantages } from "../advantages/Advantages";
import { Products } from "../products/Products";
import { Offers } from "../offers/Offers";

export const Main = () => {
  return (
    <StyledMain>
      <Promo />
      <Advantages />
      <Products />
      <Offers />
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #cbcb46;
`;
