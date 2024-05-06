import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import footerLogo from "../../assets/images/logo-footer.png";
import { Icon } from "../../components/icon/Icon";
import { FooterMenu } from "../../components/menu/Menu";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";

const footerMenuItems = ["Delivery & returns", "FAQ", "Contacts", "Blog"];
const footerCatalogItems = ["New arrivals", "Trending now", "Sales", "Brands"];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify="space-between">
          <FooterLogo src={footerLogo} />
          <FooterMenu menuItems={footerMenuItems} menuTitle="МЕНЮ" />
          <FooterMenu menuItems={footerCatalogItems} menuTitle="КАТАЛОГ" />
          <Contact>
            <ContactTitle>кОНТАКТЫ ДЛЯ СВЯЗИ</ContactTitle>
            <Phone href="tel:(405) 555-0128">
              Телефон: <span>(405) 555-0128</span>
            </Phone>
            <Email href="mailto:hello@createx.com">
              Почта: <span>hello@createx.com</span>
            </Email>
            <SocialList>
              <SocialItem>
                <SocialLink>
                  <Icon
                    iconId="facebook"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                  />
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink>
                  <Icon
                    iconId="inst"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                  />
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink>
                  <Icon
                    iconId="twitter"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                  />
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink>
                  <Icon
                    iconId="youtube"
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                  />
                </SocialLink>
              </SocialItem>
              <SocialItem>
                <SocialLink>
                  <Icon
                    iconId="pinterest"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                  />
                </SocialLink>
              </SocialItem>
            </SocialList>
          </Contact>
        </FlexWrapper>
        <Adress>674 Gonzales Drive. Washington, PA 15301</Adress>
        <OnTopButton href="#top">
          <Icon
            iconId={"arrow-up"}
            width="14"
            height="24"
            viewBox="0 0 14 24"
          />
        </OnTopButton>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.secondaryBg};

  ${Container} {
    padding-top: 40px;
    padding-bottom: 25px;

    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 225px;
      width: 100%;
      height: 1px;
      background-color: #fff;
      opacity: 0.15;
    }
  }
`;

const FooterLogo = styled.img`
  width: 268px;
  height: 108px;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const Phone = styled.a`
  margin-bottom: 5px;
  span {
    opacity: 0.6;
  }
`;

const Email = styled.a`
  span {
    opacity: 0.6;
  }
`;

const SocialList = styled.ul`
  display: flex;
  margin-top: 24px;
  gap: 12px;
`;

const SocialItem = styled.li`
  width: 32px;
  height: 32px;
  background: #141414;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Adress = styled.a`
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  text-align: center;
  color: #fff;
  margin-top: 50px;
`;

const OnTopButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 59px;
  height: 57px;
  border-radius: 50%;
  background-color: ${theme.colors.accent};
  cursor: pointer;

  position: absolute;
  right: 40px;
  top: 5px;

  &:hover {
    opacity: 0.6;
  }
`;
