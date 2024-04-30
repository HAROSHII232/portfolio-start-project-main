import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Product } from "./product/Product";
import tabletopImg from "../../../assets/images/proj-1.webp";
import sillImg from "../../../assets/images/proj-2.webp";
import sinksImg from "../../../assets/images/proj-3.webp";
import panelImg from "../../../assets/images/proj-4.webp";

export const Products = () => {
  return (
    <StyledProducts>
      <SectionTitle>Изделия из натурального камня</SectionTitle>
      <FlexWrapper direction={'column'} align={"flex-end"}>
        <FlexWrapper>
          <button></button>
          <button></button>
        </FlexWrapper>
        <span>Смотреть все</span>
      </FlexWrapper>
      <FlexWrapper wrap={"wrap"} gap={"10px"}>
        <Product title={"столешницы"} src={tabletopImg} />
        <Product title={"подоконники"} src={sillImg} />
        <Product title={"раковины"} src={sinksImg} />
        <Product title={"панно"} src={panelImg} />
      </FlexWrapper>
    </StyledProducts>
  );
};

const StyledProducts = styled.section`
  min-height: 100vh;

`;
