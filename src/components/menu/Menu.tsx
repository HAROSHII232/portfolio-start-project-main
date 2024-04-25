import styled from "styled-components";

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="">Каталог</a>
        </li>
        <li>
          <a href="">Акции</a>
        </li>
        <li>
          <a href="">Блог</a>
        </li>
        <li>
          <a href="">Сотрудничество</a>
        </li>
        <li>
          <a href="">Оплата и доставка</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 90px;
  }
`;
