import { FlexWrapper } from "../../components/FlexWrapper";
import footerLogo from "../../assets/images/logo-footer.png";
import { Icon } from "../../components/icon/Icon";
import { FooterMenu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";

const footerMenuItems = ["Delivery & returns", "FAQ", "Contacts", "Blog"];
const footerCatalogItems = ["New arrivals", "Trending now", "Sales", "Brands"];
const SocialItemsData = [
  {
    iconId: "facebook",
    width: "9",
    height: "16",
    viewBox: "0 0 9 16",
  },
  {
    iconId: "inst",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
  },
  {
    iconId: "twitter",
    width: "15",
    height: "12",
    viewBox: "0 0 15 12",
  },
  {
    iconId: "youtube",
    width: "17",
    height: "12",
    viewBox: "0 0 17 12",
  },
  {
    iconId: "pinterest",
    width: "13",
    height: "16",
    viewBox: "0 0 13 16",
  },
];

export const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper justify="space-between">
          <S.FooterLogo src={footerLogo} />
          <FooterMenu menuItems={footerMenuItems} menuTitle="МЕНЮ" />
          <FooterMenu menuItems={footerCatalogItems} menuTitle="КАТАЛОГ" />
          <S.Contact>
            <S.ContactTitle>кОНТАКТЫ ДЛЯ СВЯЗИ</S.ContactTitle>
            <S.Phone href="tel:(405) 555-0128">
              Телефон: <span>(405) 555-0128</span>
            </S.Phone>
            <S.Email href="mailto:hello@createx.com">
              Почта: <span>hello@createx.com</span>
            </S.Email>
            <S.SocialList>
              {SocialItemsData.map((s, index) => {
                return (
                  <S.SocialItem key={index}>
                    <S.SocialLink>
                      <Icon
                        iconId={s.iconId}
                        width={s.width}
                        height={s.height}
                        viewBox={s.viewBox}
                      />
                    </S.SocialLink>
                  </S.SocialItem>
                );
              })}
            </S.SocialList>
          </S.Contact>
        </FlexWrapper>
      </Container>
      <S.Adress>674 Gonzales Drive. Washington, PA 15301</S.Adress>
    </S.Footer>
  );
};
