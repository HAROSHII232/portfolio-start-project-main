import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Product } from "./product/Product";
import tabletopImg from "../../../assets/images/proj-1.webp";
import sillImg from "../../../assets/images/proj-2.webp";
import sinksImg from "../../../assets/images/proj-3.webp";
import panelImg from "../../../assets/images/proj-4.webp";
import { Container } from "../../../components/Container";
import { Icon } from "../../../components/icon/Icon";
import { SeeAll } from "../../../components/SeeAll";
import { LeftArrow, RightArrow } from "../../../components/Button";
import { theme } from "../../../styles/Theme";

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
        <FlexWrapper wrap={"wrap"} gap={"10px"} justify="center">
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
  padding-bottom: 41px;

  button {
    border: 1px solid #b1b1b1;
    border-radius: 4px;
    background-color: unset;
    margin-top: -45px;

    @media ${theme.media.tablet} {
      display: none;
    }
  }

  @media ${theme.media.mobile} {
    padding: 35px 0px;

    ${FlexWrapper} ~ a {
      margin: 36px 0 30px;
    }
  }
`;
