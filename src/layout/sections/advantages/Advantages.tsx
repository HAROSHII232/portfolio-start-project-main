import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/images/advantages.webp";
import { SectionTitle } from "../../../components/SectionTitle";
import { Advantage } from "./advantage/Advantage";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Advantages = () => {
  return (
    <StyledAdvantages>
      <Container>
        <SectionTitle>
          наши преимущества - <span>ваш результат</span>
        </SectionTitle>
        <AdvantagesWrapper>
          <FlexWrapper direction="column" gap="63px" grow="1">
            <Advantage
              titleTop={"Новейшее итальянское"}
              titleBottom={"оборудование Donatoni"}
              skillNumber={"01"}
            />
            <Advantage
              titleTop={"Собственное"}
              titleBottom={"произодство"}
              skillNumber={"02"}
            />
            <Advantage
              titleTop={"Широкий"}
              titleBottom={"ассортимент"}
              skillNumber={"03"}
            />
          </FlexWrapper>

          <Photo src={photo} alt="проект ванной комнаты" />

          <FlexWrapper direction="column" gap="60px" grow="1">
            <Advantage
              titleTop={"Изделия"}
              titleBottom={"из наличия"}
              skillNumber={"04"}
            />
            <Advantage
              titleTop={"Работаем под"}
              titleBottom={"ключ"}
              skillNumber={"05"}
            />
            <Advantage
              titleTop={"Консультации по уходу"}
              titleBottom={"за иделием из камня"}
              skillNumber={"06"}
            />
          </FlexWrapper>
        </AdvantagesWrapper>
      </Container>
    </StyledAdvantages>
  );
};

const StyledAdvantages = styled.section`
  ${SectionTitle} {
    text-align: center;
    margin-bottom: 50px;

    &::before {
      left: 50%;
      transform: translateX(-50%);
    }

    @media ${theme.media.mobile} {
      margin-bottom: 35px;
    }
  }
  @media ${theme.media.mobile} {
    padding-top: 35px;
  }

  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1150px) {
    & ${SectionTitle}+${FlexWrapper} {
      flex-direction: column;
    }
  }
`;

const AdvantagesWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 40px;

  ${FlexWrapper}{
    width: 100%;
  }

  ${FlexWrapper}~${FlexWrapper} {
    text-align: right;

    & ${FlexWrapper} {
      flex-direction: row-reverse;
    }
  }

  @media screen and (max-width: 1150px) {
    flex-direction: column;
  }
`;

const Photo = styled.img`
  max-width: 369px;
  width: 100%;
  height: 587px;
  object-fit: cover;
  object-position: left center;
  border: 7px solid ${theme.colors.accent};

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
