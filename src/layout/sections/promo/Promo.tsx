import styled from "styled-components";
import photo from "../../../assets/images/promo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Pagination } from "../../../components/pagination/Pagination";
import { Container } from "../../../components/Container";
import backgroundImg from "../../../assets/images/header-background.webp";
import { theme } from "../../../styles/Theme";
import { Button, LeftArrow, RightArrow } from "../../../components/Button";
import { Icon } from "../../../components/icon/Icon";
import { font } from "../../../styles/Common";

export const Promo = () => {
  return (
    <StyledPromo>
      <Container>
        <FlexWrapper gap="125px">
          <PromoInfo>
            <SmallText>камень с душой</SmallText>
            <MainTitle>
              Каменные изделия <span>для вашего дома</span>
            </MainTitle>
            <FlexWrapper gap="22px">
              <Button>Рассчитать стоимость</Button>
              <Button>Связаться с нами</Button>
            </FlexWrapper>
          </PromoInfo>

          <FlexWrapper direction="column" justify="flex-end">
            <FlexWrapper gap="7px">
              <LeftArrow>
                <Icon
                  iconId={"arrow-left"}
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="white"
                />
              </LeftArrow>
              <RightArrow>
                <Icon
                  iconId={"arrow-right"}
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="white"
                />
              </RightArrow>
            </FlexWrapper>

            <Pagination />
          </FlexWrapper>

          <PhotoWrapper>
            <Photo src={photo} alt="Проект: сан-узел" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledPromo>
  );
};

const StyledPromo = styled.section`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.93) 0%,
      rgba(0, 0, 0, 0.93) 100%
    ),
    url(${backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  & > ${Container} > ${FlexWrapper} {
    position: relative;

    @media ${theme.media.mobile}{
      gap: 0;
    }
  }

  & ${Button} {
    width: 288px;
    height: 68px;

    @media ${theme.media.mobile} {
      width: 100%;
    }
  }

  & ${Button}+${Button} {
    background-color: #141414;
  }

  & ${Button}:hover {
    background-color: #141414;
  }

  & ${Button}+${Button}:hover {
    background-color: ${theme.colors.accent};
  }

  @media screen and (max-width: 980px) {
    & > ${Container} > ${FlexWrapper} > ${FlexWrapper} > div + div {
      display: none;
    }
  }

  ${LeftArrow}, ${RightArrow} {
    @media screen and (max-width: 1390px) {
      display: none;
    }
  }
`;

const PromoInfo = styled.div`
  position: absolute;
  top: 110px;
  left: -100px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  padding: 67px 42px 58px 102px;
  max-width: 743px;
  background-color: ${theme.colors.secondaryBg};

  @media screen and (max-width: 1430px) {
    position: static;

    & ${FlexWrapper} {
      flex-direction: column;
    }
  }

  @media ${theme.media.tablet} {
    padding: 0;
    background-color: transparent;
    width: 100px;
  }

  @media ${theme.media.mobile} {
    width: 100%;

  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    left: -25px;
    top: 25px;
    z-index: -1;

    border: 2px solid ${theme.colors.accent};
    width: 888px;
    height: 582px;

    @media screen and (max-width: 1430px) {
      display: none;
    }
  }
`;

const Photo = styled.img`
  width: 978px;
  height: 603px;
  object-fit: cover;

  @media screen and (max-width: 1430px) {
    display: none;
  }
`;

const MainTitle = styled.h1`
  ${font({ Fmax: 50, Fmin: 29 })}
  text-transform: uppercase;
  margin-bottom: 25px;

  span {
    color: #28553f;
  }

  @media ${theme.media.mobile} {
    margin: 9px 0 25px;
  }
`;

const SmallText = styled.span`
  position: relative;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  color: #9c9c9c;
  white-space:nowrap;

  :after {
    content: "";
    position: absolute;
    top: 6px;
    left: 140px;
    width: 82px;
    height: 0.4px;
    background-color: #9c9c9c;
  }
`;
export { LeftArrow, RightArrow };
