import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import headerLogo from "../../assets/images/logo-header.png";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { HeaderMenu } from "./headerMenu/HeaderMenu";

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
          <FlexWrapper
            direction="column"
            align="flex-end"
            justify="space-between"
          >
            <FlexWrapper gap="10px">
              <Icon
                iconId={"whatsUp"}
                width="20"
                height="20"
                viewBox="0 0 20 20"
              />
              <Icon
                iconId={"phone"}
                width="20"
                height="20"
                viewBox="0 0 20 20"
              />
              <Phone href="tel:+7 (499) 258-625-33">+7 (499) 258-625-33</Phone>
              <Icon
                iconId={"loupe"}
                width="20"
                height="20"
                viewBox="0 0 20 20"
              />
            </FlexWrapper>
            <HeaderMenu menuItems={headerItems} />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.secondaryBg};
  padding: 20px 0;
  /*   position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999; */
`;

const Logo = styled.a`
  img {
    width: 289px;
    height: 115px;
  }
`;

const Phone = styled.a`
  font-size: 19px;
`;
