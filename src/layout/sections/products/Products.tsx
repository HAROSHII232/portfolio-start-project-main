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

export const Products = () => {
  return (
    <StyledProducts>
      <Container>
        <SectionTitle>
          Изделия из <span> натурального камня </span>
        </SectionTitle>
        <FlexWrapper direction={"column"} align={"flex-end"}>
          <FlexWrapper>
            <button></button>
            <button></button>
          </FlexWrapper>
          <SeeAll>
            Смотреть все
            <Icon
              iconId={"arrow-see-all"}
              width="36"
              height="9"
              viewBox="0 0 36 9"
            />
          </SeeAll>
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

const StyledProducts = styled.section``;

const SeeAll = styled.span`
  font-weight: 400;
  font-size: 21px;
  text-transform: uppercase;
  color: ${theme.colors.secondaryFont};

  margin: 58px 0px 41px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
