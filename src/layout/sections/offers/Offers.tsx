import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Offer } from "./offer/Offer";
import image from "../../../assets/images/offer-item.webp";
import backgroundImg from "../../../assets/images/offer-background.webp";
import { Pagination } from "../../../components/pagination/Pagination";
import { Container } from "../../../components/Container";
import { Button, LeftArrow, RightArrow } from "../../../components/Button";
import { theme } from "../../../styles/Theme";
import { SeeAll } from "../../../components/SeeAll";
import { Icon } from "../../../components/icon/Icon";
import { font } from "../../../styles/Common";

export const Offers = () => {
  return (
    <StyledOffer>
      <Container>
        <OffersContent>
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
          <OffersItemsWrapper>
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
            <Pagination />
          </OffersItemsWrapper>
        </OffersContent>
      </Container>
    </StyledOffer>
  );
};

const StyledOffer = styled.section`
  padding-bottom: 0px;
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

      @media ${theme.media.mobile} {
        margin-bottom: 30px;
      }
    }
  }

  ${SectionTitle} {
    font-weight: 500;
    color: #fff;
    padding-right: 35px;

    &::before {
      background-color: #fff;
    }
  }

  @media ${theme.media.mobile} {
    padding: 0;
  }
`;

const OffersContent = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const OffersInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 61px 50px 47px 103px;
  max-width: 703px;
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

    @media ${theme.media.mobile} {
      width: 100%;
    }
  }

  @media ${theme.media.mobile} {
    padding: 43px 21px 33px;
    margin: 0;
    position: absolute;
  }

  /*   &::before {
    content: "";
    position: absolute;
    left: 0px;
    top: -20px;
    z-index: -1;

    border: 2px solid ${theme.colors.accent};
    width: 600px;
    height: 440px;
  } */
`;

const OffersItemsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${FlexWrapper} {
    @media screen and (max-width: 1200px) {
      justify-content: center;
    }

    @media ${theme.media.tablet} {
      flex-direction: row;
      flex-wrap: nowrap;
      overflow: hidden;
      max-width: 282px;
      justify-content: flex-start;
    }

    @media ${theme.media.mobile} {
      max-width: 320px;
    }
  }

  ${LeftArrow}, ${RightArrow} {
    display: none;
    position: absolute;
    top: 50%;
    z-index: 1;
    border: 1px solid #e5e5e5;
    border-radius: 4px;

    background-color: #f9f9f9;

    @media ${theme.media.mobile} {
      display: block;
    }
  }

  ${LeftArrow} {
    left: -22.5px;
  }

  ${RightArrow} {
    right: -19.5px;
  }

  @media ${theme.media.mobile} {
    margin-top: 340px;
  }
`;

const OffersDescription = styled.p`
  ${font({ Fmax: 22, Fmin: 17 })}

  margin: 47px 0 35px;

  @media ${theme.media.mobile} {
    margin: 15px 0 31px;
  }
`;
