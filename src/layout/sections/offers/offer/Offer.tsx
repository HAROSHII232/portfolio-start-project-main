import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";

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
      <SmallText>Акция</SmallText>
      <Image src={props.src} alt="Акционное предложение" />
      <OfferInfo>
        <Brand>{props.brand}</Brand>
        <Title>{props.name}</Title>
        <PriceWrapper>
          <NewPrice>{props.newPrice}</NewPrice>
          <OldPrice>{props.oldPrice}</OldPrice>
        </PriceWrapper>
      </OfferInfo>
      <Button>Подробнее</Button>
    </StyledOffer>
  );
};

const StyledOffer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  max-width: 282px;
  height: 445px;
  background: rgba(255, 255, 255, 0.96);
  font-weight: 500;
  font-size: 16px;
  line-height: 137%;
  color: #000;
  padding: 14px 18px;

  button {
    height: 40px;

    @media ${theme.media.mobile} {
      height: 50px;
    }
  }

  @media ${theme.media.mobile} {
    max-width: 320px;
    min-height: 549px;

    gap: 0;
  }
`;

const OfferInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px 15px 21px;

  @media ${theme.media.mobile} {
    padding: 36px 15px;
  }
`;

const SmallText = styled.div`
  position: absolute;
  right: 15px;
  padding: 7px 18px;
  font-weight: 300;
  font-size: 17px;
  color: #000;
  background: rgba(255, 255, 255, 0.45);

  @media ${theme.media.mobile} {
    padding: 11px 25px;
  }
`;

const Image = styled.img`
  width: 247px;
  height: 220px;
  object-fit: cover;
  object-position: center, center;

  @media ${theme.media.mobile} {
    width: 280px;
    height: 271px;
  }
`;

const Brand = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 157%;
  color: ${theme.colors.accent};
`;

const Title = styled.span`
  margin: 5px 0 16px;

  @media ${theme.media.mobile} {
    margin:10px 0 30px;
    padding-right: 30px;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NewPrice = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: ${theme.colors.accent};
`;

const OldPrice = styled.span`
  font-weight: 400;
  font-size: 14px;
  text-decoration: line-through;
  color: #949981;
`;
