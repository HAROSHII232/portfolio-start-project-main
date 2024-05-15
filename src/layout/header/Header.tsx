import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import headerLogo from "../../assets/images/logo-header.png";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { font } from "../../styles/Common";

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
            <img src={headerLogo} alt="Логотип каменные изделия" />
          </Logo>
          <FlexWrapper
            direction="column"
            align="flex-end"
            justify="space-between"
          >
            <IconsWrapper>
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
            </IconsWrapper>

            <HeaderMenu menuItems={headerItems} />
            <MobileMenu menuItems={headerItems} />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.secondaryBg};
  padding: 20px 0;

  @media ${theme.media.tablet} {
    padding-top: 0px;

    ${Container} {
      padding-top: 5px;
    }
  }
`;

const Logo = styled.a`
  img {
    max-width: 289px;
    height: 115px;
    width: 100%;
    object-fit: contain;

    @media ${theme.media.tablet} {
      width: 93px;
      height: 28px;
    }
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media ${theme.media.mobile} {
    justify-content: flex-end;
    svg:last-child {
      margin: 11px 40px 0;
      margin-right: 40px;
    }
  }
`;

const Phone = styled.a`
  ${font({ Fmax: 19, Fmin: 16 })}
`;
