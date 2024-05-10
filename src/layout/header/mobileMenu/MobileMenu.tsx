import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

type MobileMenuPropsType = {
  menuItems: Array<string>;
};

export const MobileMenu = (props: MobileMenuPropsType) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>

      <MobileMenuPopup isOpen={false}>
        <ul>
          {props.menuItems.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link href="#">{item}</Link>
              </ListItem>
            );
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  display: none;

  background: #000;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `}

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999999;

  width: 40px;
  height: 40px;

  span {
    display: block;
    width: 27px;
    height: 3px;
    border-radius: 5px;
    background-color: ${theme.colors.primaryFont};

    position: absolute;
    top: 18px;
    left: 10px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 27px;
      height: 3px;
      border-radius: 5px;
      background-color: ${theme.colors.primaryFont};

      position: absolute;
      transform: translateY(-7px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0px);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 27px;
      height: 3px;
      border-radius: 5px;
      background-color: ${theme.colors.primaryFont};

      position: absolute;
      transform: translateY(7px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0px);
        `}
    }
  }
`;

const ListItem = styled.li`
  position: relative;
  padding: 27px 38px;
  cursor: pointer;

  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid #fff;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0px;
    right: 0px;
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.primaryFont};

    transform: scale(0);
  }

  &:hover {
    &::after {
      transform: scale(1);
    }
  }
`;

const Link = styled.a`
  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  text-align: left;
`;
