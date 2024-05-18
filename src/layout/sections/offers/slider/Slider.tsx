import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import image from "../../../../assets/images/offer-item.webp";
import { Offer } from "../offer/Offer";
import "../../../../styles/slider.css";
import { Icon } from "../../../../components/icon/Icon";

type SlidePropsType = {
  src: string;
  brand: string;
  name: string;
  newPrice: string;
  oldPrice: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <Offer
      src={props.src}
      brand={props.brand}
      name={props.name}
      newPrice={props.newPrice}
      oldPrice={props.oldPrice}
    />
  );
};

const responsive = {
  0: { items: 1 },
  701: { items: 2 },
  1024: { items: 4 },
};

const items = [
  <Slide
    src={image}
    brand={"Kratki"}
    name={"Каминная топка Kratki ZUZIA LPT"}
    newPrice={"16 490 ₽"}
    oldPrice={"16 490 ₽"}
  />,
  <Slide
    src={image}
    brand={"Kratki"}
    name={"Каминная топка Kratki ZUZIA LPT"}
    newPrice={"16 490 ₽"}
    oldPrice={"16 490 ₽"}
  />,
  <Slide
    src={image}
    brand={"Kratki"}
    name={"Каминная топка Kratki ZUZIA LPT"}
    newPrice={"16 490 ₽"}
    oldPrice={"16 490 ₽"}
  />,
  <Slide
    src={image}
    brand={"Kratki"}
    name={"Каминная топка Kratki ZUZIA LPT"}
    newPrice={"16 490 ₽"}
    oldPrice={"16 490 ₽"}
  />,
];

export const Slider = () => (
  <StyledSlider>
    <AliceCarousel
      mouseTracking
      items={items}
      renderPrevButton={() => {
        return (
          <Icon
            iconId={"arrow-left"}
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="#b1b1b1"
          />
        );
      }}
      renderNextButton={() => {
        return (
          <Icon
            iconId={"arrow-right"}
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="#b1b1b1"
          />
        );
      }}
      responsive={responsive}
    />
  </StyledSlider>
);

const StyledSlider = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 37px;
  justify-content: flex-end;
  border: 1px solid red;
  max-width: 600px;
  width: 100%;

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }

  @media ${theme.media.tablet} {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: hidden;
    justify-content: flex-start;
  }

  @media screen and (max-width:700px) {
    max-width: 320px;
  }
`;
