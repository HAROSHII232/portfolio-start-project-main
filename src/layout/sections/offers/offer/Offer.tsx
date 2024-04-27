import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type OfferPropsType = {
  src: string;
  brand: string;
  name: string;
  newPrice: string;
  oldPrice: string;
};

export const Offer = (props: OfferPropsType) => {
  return (
    <StyledOffer>
      <Image src={props.src} alt="" />
      <Brand>{props.brand}</Brand>
      <Title>{props.name}</Title>
      <FlexWrapper>
        <NewPrice>{props.newPrice}</NewPrice>
        <OldPrice>{props.oldPrice}</OldPrice>
      </FlexWrapper>
      <button>Подробнее</button>
    </StyledOffer>
  );
};

const StyledOffer = styled.div`
  display: flex;
  flex-direction: column;
  height: 436px;
`;

const Image = styled.img`
  width: 247px;
  height: 220px;
  object-fit: cover;
`;

const Brand = styled.span``;

const Title = styled.span``;

const NewPrice = styled.span``;

const OldPrice = styled.span``;
