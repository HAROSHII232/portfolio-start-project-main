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
            <Advantage
              title={"Широкий ассортимент разнообразных камней"}
              skillNumber={"03"}
            />
          </FlexWrapper>

          <Photo src={photo} alt="проект ванной комнаты" />

          <FlexWrapper direction="column" gap="63px">
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
  & ${SectionTitle} {
    text-align: center;
    margin-bottom: 50px;
  }
  & ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & ${FlexWrapper}~${FlexWrapper} {
    text-align: right;

    & ${FlexWrapper} {
      flex-direction: row-reverse;
    }
  }
`;

const Photo = styled.img`
  width: 369px;
  height: 587px;
  object-fit: cover;
  border: 7px solid ${theme.colors.accent};
`;
