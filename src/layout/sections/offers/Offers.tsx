import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Offer } from "./offer/Offer";
import image from "../../../assets/images/offer-item.webp";
import backgroundImg from "../../../assets/images/offer-background.webp";
import { Pagination } from "../../../components/pagination/Pagination";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";
import { theme } from "../../../styles/Theme";
import { SeeAll } from "../../../components/SeeAll";

export const Offers = () => {
  return (
    <StyledOffer>
      <Container>
        <FlexWrapper align="center" gap="35px">
          <OffersInfo>
            <SectionTitle>
              Актуальные акции на <span>НАШУ ПРОДУКЦИЮ</span>
            </SectionTitle>
            <OffersDescription>
              Учитывая ключевые сценарии поведения, обучения кадров влечет за
              собой процесс внедрения и модернизации распределения
            </OffersDescription>
            <Button>перейти в каталог</Button>
          </OffersInfo>
          <FlexWrapper direction={"column"} align="center">
            <SeeAll />
            <FlexWrapper wrap={"wrap"} gap="37px" justify="flex-end">
              <Offer
                src={image}
                brand={"Kratki"}
                name={"Каминная топка Kratki ZUZIA LPT"}
                newPrice={"16 490 ₽"}
                oldPrice={"16 490 ₽"}
              />
              <Offer
                src={image}
                brand={"Kratki"}
                name={"Каминная топка Kratki ZUZIA LPT"}
                newPrice={"16 490 ₽"}
                oldPrice={"16 490 ₽"}
              />
              <Offer
                src={image}
                brand={"Kratki"}
                name={"Каминная топка Kratki ZUZIA LPT"}
                newPrice={"16 490 ₽"}
                oldPrice={"16 490 ₽"}
              />
              <Offer
                src={image}
                brand={"Kratki"}
                name={"Каминная топка Kratki ZUZIA LPT"}
                newPrice={"16 490 ₽"}
                oldPrice={"16 490 ₽"}
              />
            </FlexWrapper>
            <Pagination />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledOffer>
  );
};

const StyledOffer = styled.section`
  ${Container} {
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.21) 100%
      ),
      url(${backgroundImg});
    background-size: cover;
    background-position: center center;
    padding-top: 57px;
    padding-bottom: 50px;

    a {
      color: #fff;
      align-self: flex-end;
      margin-bottom: 20px;
      margin-top: 0;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  ${SectionTitle} {
    font-weight: 500;
    color: #fff;

    &::before {
      background-color: #fff;
    }
  }
`;

const OffersInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 61px 58px 47px 103px;
  max-width: 650px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.87) 0%,
    rgba(0, 0, 0, 0.87) 100%
  );
  margin-left: -100px;
  position: relative;
  z-index: 0;

  button {
    width: 238px;
    height: 63px;

    &:hover {
      background-color: ${theme.colors.secondaryFont};
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0px;
    top: -20px;
    z-index: -1;

    border: 2px solid ${theme.colors.accent};
    width: 600px;
    height: 440px;
  }
`;

const OffersDescription = styled.p`
  margin: 35px 0;
`;
