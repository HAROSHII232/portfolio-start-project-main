import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/images/advantages.webp";
import { SectionTitle } from "../../../components/SectionTitle";
import { Advantage } from "./advantage/Advantage";
import { Container } from "../../../components/Container";

export const Advantages = () => {
  return (
    <StyledAdvantages>
      <Container>
        <SectionTitle>
            наши преимущества - <span>ваш результат</span>
        </SectionTitle>
        <FlexWrapper>
          <FlexWrapper direction="column"> 
            <Advantage
              title={"Новейшее итальянское оборудование Donatoni"}
              skillNumber={"1"}
            />
            <Advantage title={"Собственное произодство"} skillNumber={"2"} />
            <Advantage
              title={"Широкий ассортимент разнообразных камней"}
              skillNumber={"3"}
            />
          </FlexWrapper>
          <Photo src={photo} alt="проект ванной комнаты"/>
          <FlexWrapper direction="column">
            <Advantage title={"Изделия из наличия"} skillNumber={"4"} />
            <Advantage title={"Работаем под ключ"} skillNumber={"5"} />
            <Advantage
              title={"Консультации по уходу за иделием из камня"}
              skillNumber={"6"}
            />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledAdvantages>
  );
};

const StyledAdvantages = styled.section``;

const Photo = styled.img`
  width: 369px;
  height: 587px;
  object-fit: cover;
`;
