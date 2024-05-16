import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import footerLogo from "../../assets/images/logo-footer.png";
import { Icon } from "../../components/icon/Icon";
import { FooterMenu } from "../../components/menu/Menu";
import { theme } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { font } from "../../styles/Common";

const footerMenuItems = ["Delivery & returns", "FAQ", "Contacts", "Blog"];
const footerCatalogItems = ["New arrivals", "Trending now", "Sales", "Brands"];
const SocialItemsData = [
  {
    iconId: "facebook",
  },
  {
    iconId: "inst",
  },
  {
    iconId: "twitter",
  },
  {
    iconId: "youtube",
  },
  {
    iconId: "pinterest",
  },
];

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
              {SocialItemsData.map((s, index) => {
                return (
                  <SocialItem key={index}>
                    <SocialLink>
                      <Icon
                        iconId={s.iconId}
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                      />
                    </SocialLink>
                  </SocialItem>
                );
              })}
            </SocialList>
          </Contact>
        </FlexWrapper>
        <OnTopButton href="#top">
          <Icon
            iconId={"arrow-up"}
            width="14"
            height="24"
            viewBox="0 0 14 24"
          />
        </OnTopButton>
      </Container>
      <Adress>674 Gonzales Drive. Washington, PA 15301</Adress>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.secondaryBg};
  padding-bottom: 25px;

  ${Container} {
    padding-top: 40px;
    padding-bottom: 25px;
    position: relative;

    ${FlexWrapper} {
      @media screen and (max-width: 972px) {
        flex-direction: column;
      }
    }

    nav {
      @media ${theme.media.tablet} {
        margin-bottom: 20px;
      }
    }

    @media ${theme.media.mobile} {
      padding-top: 30px;
      padding-bottom: 0;
    }
  }

  @media ${theme.media.mobile} {
    padding-bottom: 0;
  }
`;

const FooterLogo = styled.img`
  max-width: 268px;
  width: 100%;
  height: 126px;

  @media ${theme.media.mobile} {
    width: 164px;
    height: 66px;
    margin-bottom: 15px;
    align-self: center;
  }
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

  @media ${theme.media.mobile} {
    margin-bottom: 14px;
  }
`;

const Phone = styled.a`
  margin-bottom: 5px;
  span {
    opacity: 0.6;

    @media ${theme.media.mobile} {
      font-size: 20px;
    }
  }
`;

const Email = styled.a`
  span {
    opacity: 0.6;

    @media ${theme.media.mobile} {
      font-size: 20px;
    }
  }
`;

const SocialList = styled.ul`
  display: flex;
  margin-top: 33px;
  gap: 14px;

  @media ${theme.media.mobile} {
    margin-top: 16px;
  }
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

  @media ${theme.media.tablet} {
    width: 53px;
    height: 53px;

    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Adress = styled.a`
  display: flex;
  justify-content: center;

  ${font({ Fmax: 16, Fmin: 13 })};
  line-height: 175%;
  text-align: center;
  margin-top: 25px;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: -17px;
    width: 100%;
    height: 1px;
    background-color: #fff;
    opacity: 0.15;

    @media ${theme.media.mobile} {
      top: 0;
    }
  }

  @media ${theme.media.mobile} {
    padding: 15px 75px 13px;
    line-height: 1.2;
    margin-top: 45px;
  }
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

  @media ${theme.media.tablet} {
    display: none;
  }
`;
