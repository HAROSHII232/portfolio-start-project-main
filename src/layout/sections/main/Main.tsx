import styled from "styled-components";
import { Promo } from "../promo/Promo";
import { Advantages } from "../advantages/Advantages";
import { Products } from "../products/Products";
import { Offers } from "../offers/Offers";
import { Ideas } from "../ideas/Ideas";
import { Contacts } from "../contacts/Contacts";

export const Main = () => {
  return (
    <StyledMain>
      <Promo />
      <Advantages />
      <Products />
      <Offers />
      <Ideas />
      <Contacts/>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #cbcb46;
`;
