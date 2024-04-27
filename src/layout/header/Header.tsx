import styled from "styled-components";
import Logo from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const headerItems = [
  "Каталог",
  "Акции",
  "Блог",
  "Сотрудничество",
  "Оплата и доставка",
];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={headerItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #88c688;
  display: flex;
  justify-content: space-between;
`;
