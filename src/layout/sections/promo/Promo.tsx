import styled from "styled-components";
import photo from "../../../assets/images/promo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Pagination } from "../../../components/pagination/Pagination";

export const Promo = () => {
  return (
    <FlexWrapper>
      <FlexWrapper direction={"column"}>
        <span>камень с душой</span>
        <MainTitle>
          Каменные изделия <span>для вашего дома</span>
        </MainTitle>
        <FlexWrapper>
          <button>Рассчитать стоимость</button>
          <button>Связаться с нами</button>
        </FlexWrapper>
        <FlexWrapper>
          <LeftArrow></LeftArrow>
          <RightArrow></RightArrow>
        </FlexWrapper>
        
        <Pagination />
      </FlexWrapper>
      <Photo src={photo} />
    </FlexWrapper>
  );
};

const Photo = styled.img`
  width: 978px;
  height: 603px;
  object-fit: cover;
`;

const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 50px;
  text-transform: uppercase;

  span {
    color: #28553f;
  }
`;

const LeftArrow = styled.button`
  width: 45px;
  height: 45px;
`;

const RightArrow = styled(LeftArrow)``;
