import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Product } from "./product/Product";
import tabletopImg from "../../../assets/images/proj-1.webp";
import sillImg from "../../../assets/images/proj-2.webp";
import sinksImg from "../../../assets/images/proj-3.webp";
import panelImg from "../../../assets/images/proj-4.webp";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { Icon } from "../../../components/icon/Icon";
import { LeftArrow, RightArrow } from "../promo/Promo";
import { SeeAll } from "../../../components/SeeAll";

export const Products = () => {
  return (
    <StyledProducts>
      <Container>
        <SectionTitle>
          Изделия из <span> натурального камня </span>
        </SectionTitle>
        <FlexWrapper direction={"column"} align={"flex-end"}>
          <FlexWrapper gap="6px">
            <LeftArrow>
              <Icon
                iconId={"arrow-left"}
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="#b1b1b1"
              />
            </LeftArrow>
            <RightArrow>
              <Icon
                iconId={"arrow-right"}
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="#b1b1b1"
              />
            </RightArrow>
          </FlexWrapper>
          <SeeAll />
        </FlexWrapper>
        <FlexWrapper wrap={"wrap"} gap={"10px"}>
          <Product title={"столешницы"} src={tabletopImg} />
          <Product title={"подоконники"} src={sillImg} />
          <Product title={"раковины"} src={sinksImg} />
          <Product title={"панно"} src={panelImg} />
        </FlexWrapper>
      </Container>
    </StyledProducts>
  );
};

const StyledProducts = styled.section`
  button {
    border: 1px solid #b1b1b1;
    border-radius: 4px;
    background-color: unset;
  }
`;
