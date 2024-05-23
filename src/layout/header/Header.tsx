import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import headerLogo from "../../assets/images/logo-header.png";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { font } from "../../styles/Common";
import React from "react";

const headerItems = [
  "Каталог",
  "Акции",
  "Блог",
  "Сотрудничество",
  "Оплата и доставка",
];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1000;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

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

            {width <= breakpoint ? (
              <MobileMenu menuItems={headerItems} />
            ) : (
              <HeaderMenu menuItems={headerItems} />
            )}
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

  @media ${theme.media.mobile} {
    padding-bottom: 0;
  }
`;

const Logo = styled.a`
  margin-right: 20px;
  
  img {
    max-width: 246px;
    height: 115px;
    width: 100%;
    object-fit: contain;
    z-index: 999999;
    position: relative;

    @media ${theme.media.tablet} {
      width: 82px;
      height: 32px;
    }
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  z-index: 999999;
  position: relative;

  @media ${theme.media.mobile} {
    justify-content: flex-end;
    svg:last-child {
      margin-right: 44px;
    }
  }
`;

const Phone = styled.a`
  ${font({ Fmax: 19, Fmin: 16 })}
`;
