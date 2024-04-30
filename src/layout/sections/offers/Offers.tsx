import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Offer } from "./offer/Offer";
import image from "../../../assets/images/offer-item.webp";
import { Pagination } from "../../../components/pagination/Pagination";

export const Offers = () => {
  return (
    <StyledOffer>
      <FlexWrapper align="center">
        <FlexWrapper direction={"column"}>
          <SectionTitle>Актуальные акции на НАШУ ПРОДУКЦИЮ</SectionTitle>
          <p>
            Учитывая ключевые сценарии поведения, обучения кадров влечет за
            собой процесс внедрения и модернизации распределения
          </p>
          <button>перейти в каталог</button>
        </FlexWrapper>
        <FlexWrapper direction={"column"}>
          <a href="">Смотреть все</a>
          <FlexWrapper wrap={"wrap"} gap="37px">
            <Offer
              src={image}
              brand={"Kratki"}
              name={"Каминная топка Kratki ZUZIA LPT"}
              newPrice={"16 490 Р"}
              oldPrice={"16 490 Р"}
            />
            <Offer
              src={image}
              brand={"Kratki"}
              name={"Каминная топка Kratki ZUZIA LPT"}
              newPrice={"16 490 Р"}
              oldPrice={"16 490 Р"}
            />
            <Offer
              src={image}
              brand={"Kratki"}
              name={"Каминная топка Kratki ZUZIA LPT"}
              newPrice={"16 490 Р"}
              oldPrice={"16 490 Р"}
            />
            <Offer
              src={image}
              brand={"Kratki"}
              name={"Каминная топка Kratki ZUZIA LPT"}
              newPrice={"16 490 Р"}
              oldPrice={"16 490 Р"}
            />
          </FlexWrapper>
          <Pagination />
        </FlexWrapper>
      </FlexWrapper>
    </StyledOffer>
  );
};

const StyledOffer = styled.section`
  min-height: 100vh;

`;
