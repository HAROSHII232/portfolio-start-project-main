import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import headerLogo from "../../assets/images/logo-header.png";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";

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
      <Container>
        <FlexWrapper justify="space-between">
          <Logo href="#">
            <img src={headerLogo} alt="" />
          </Logo>
          <FlexWrapper direction="column" align="flex-end" justify="space-between">
            <FlexWrapper gap="10px">
              <Icon
                iconId={"whatsUp"}
                width="20"
                height="21"
                viewBox="0 0 20 21"
              />
              <Icon
                iconId={"phone"}
                width="20"
                height="21"
                viewBox="0 0 20 21"
              />
              <Phone href="tel:+7 (499) 258-625-33">+7 (499) 258-625-33</Phone>
              <Icon
                iconId={"loupe"}
                width="23"
                height="23"
                viewBox="0 0 23 23"
              />
            </FlexWrapper>
            <Menu menuItems={headerItems} />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.secondaryBg};
`;

const Logo = styled.a`
  img {
    width: 289px;
    height: 115px;
  }
`;

const Phone = styled.a``;
