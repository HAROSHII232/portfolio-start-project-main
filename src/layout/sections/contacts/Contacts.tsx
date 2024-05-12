import styled from "styled-components";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import SectionBackground from "../../../assets/images/footer-background.webp";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <FlexWrapper direction="column">
          <span>Остались вопросы?</span>
          <span>свяжитесь с нами, мы вам поможем!</span>
          <p>Заполните форму и мы свяжемся с Вами в ближайшее время</p>
        </FlexWrapper>
        <StyledForm>
          <Field placeholder="Ваше имя" />
          <Field placeholder={"Ваш телефон"} />
          <Button type="submit">Отправить</Button>
        </StyledForm>
        <FlexWrapper gap="10px">
          <StyledCheckbox type="checkbox" />
          <span>
            Согласен на обработку{" "}
            <UnderlinedText>персональных данных</UnderlinedText>
          </span>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  padding: 0;

  ${Container} {
    padding: 70px 110px;
    background: linear-gradient(
        87deg,
        rgba(0, 0, 0, 0.93) 12.11%,
        rgba(0, 0, 0, 0.7) 59.96%,
        rgba(255, 255, 255, 0) 100%
      ),
      url(${SectionBackground});
    background-size: cover;

    @media ${theme.media.tablet} {
      padding: 50px 23px 45px;
      background-position-x: center;
    }
  }

  span:not(:last-child) {
    ${font({ weight: 500, Fmax: 28, Fmin: 24 })}
    text-transform: uppercase;
  }

  span+span {
    margin-top: 10px;
  }

  span:last-child {
    ${font({ color: "#f3f3f3", Fmax: 14, Fmin: 13 })}
  }

  p {
    ${font({ Fmax: 18, Fmin: 17 })}
    margin: 15px 0 29px;
  }
`;

const StyledForm = styled.form`
  max-width: 760px;
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  ${Button} {
    width: 240px;
    height: 50px;
    color: black;
    background-color: white;
    text-transform: none;

    @media ${theme.media.tablet} {
      width: 100%;
    }
  }

  @media ${theme.media.tablet} {
    flex-direction: column;
  }
`;

const Field = styled.input`
  font-family: "Raleway", sans-serif;
  color: ${theme.colors.primaryFont};
  padding: 15px 20px;
  background-color: unset;
  border: 1px solid rgba(243, 243, 243, 0.7);

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 135%;
    color: #f3f3f3;
  }
`;

const StyledCheckbox = styled.input``;

const UnderlinedText = styled.span`
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;
