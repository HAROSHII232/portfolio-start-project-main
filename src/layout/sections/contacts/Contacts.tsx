import styled from "styled-components";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Contacts = () => {
  return (
    <StyledContacts>
      <span>Остались вопросы?</span>
      <span>свяжитесь с нами, мы вам поможем!</span>
      <p>Заполните форму и мы свяжемся с Вами в ближайшее время</p>
      <StyledForm>
        <Field placeholder="Ваше имя" />
        <Field placeholder={"Ваш телефон"} />
        <Button type="submit">Отправить</Button>
      </StyledForm>
      <FlexWrapper>
        <StyledCheckbox type="checkbox"/>
        <span>Согласен на обработку персональных данных</span>
      </FlexWrapper>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 40vh;
  background-color: #ae4e4e;
`;

const StyledForm = styled.form`
  max-width: 760px;
  width: 100%;
  display: flex;
  gap: 20px;
`;

const Field = styled.input``;

const StyledCheckbox = styled.input``