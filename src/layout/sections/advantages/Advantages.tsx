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
        <FlexWrapper align="center" gap="40px">
          <FlexWrapper direction="column" gap="63px">
            <Advantage
              title={"Новейшее итальянское оборудование Donatoni"}
              skillNumber={"01"}
            />
            <Advantage title={"Собственное произодство"} skillNumber={"02"} />
            <Advantage title={"Широкий ассортимент"} skillNumber={"03"} />
          </FlexWrapper>

          <Photo src={photo} alt="проект ванной комнаты" />

          <FlexWrapper direction="column" gap="60px">
            <Advantage title={"Изделия из наличия"} skillNumber={"04"} />
            <Advantage title={"Работаем под ключ"} skillNumber={"05"} />
            <Advantage
              title={"Консультации по уходу за иделием из камня"}
              skillNumber={"06"}
            />
          </FlexWrapper>
        </FlexWrapper>
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

  ${FlexWrapper}~${FlexWrapper} {
    text-align: right;

    & ${FlexWrapper} {
      flex-direction: row-reverse;
    }
  }

  @media screen and (max-width: 1300px) {
    & ${SectionTitle}+${FlexWrapper} {
      flex-direction: column;
    }
  }
`;

const Photo = styled.img`
  max-width: 369px;
  width: 100%;
  height: 587px;
  object-fit: cover;
  object-position: left center;
  border: 7px solid ${theme.colors.accent};

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;
