import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
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
  transition: ${theme.animation.transition};

  &:hover {
    transform: translateY(-20%);
    background-color: ${theme.colors.accent}
  }

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



export const S = {
  Footer,
  FooterLogo,
  Contact,
  ContactTitle,
  Phone,
  Email,
  SocialList,
  SocialItem,
  SocialLink,
  Adress,
};
