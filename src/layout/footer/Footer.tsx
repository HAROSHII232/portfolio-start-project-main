import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import footerLogo from "../../assets/images/logo-footer.png";
import { Icon } from "../../components/icon/Icon";
import { FooterMenu } from "../../components/menu/Menu";
import { theme } from "../../styles/Theme";

const footerMenuItems = ["Delivery & returns", "FAQ", "Contacts", "Blog"];
const footerCatalogItems = ["New arrivals", "Trending now", "Sales", "Brands"];

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper justify="space-between">
        <FooterLogo src={footerLogo} />
        <FooterMenu menuItems={footerMenuItems} menuTitle="мЕНЮ" />
        <FooterMenu menuItems={footerCatalogItems} menuTitle="каталог" />
        <Contact>
          <ContactTitle>кОНТАКТЫ ДЛЯ СВЯЗИ</ContactTitle>
          <Phone href="tel:(405) 555-0128">Телефон:(405) 555-0128</Phone>
          <Email href="mailto:hello@createx.com">Почта:hello@createx.com</Email>
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
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.secondaryBg};
`;

const FooterLogo = styled.img`
  width: 268px;
  height: 108px;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactTitle = styled.div``;

const Phone = styled.a``;

const Email = styled.a``;

const SocialList = styled.ul`
  display: flex;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Adress = styled.a``;
