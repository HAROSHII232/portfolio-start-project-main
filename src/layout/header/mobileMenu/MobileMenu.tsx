import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { useState } from "react";

type MobileMenuPropsType = {
  menuItems: Array<string>;
};

export const MobileMenu: React.FC<MobileMenuPropsType> = (
  props: MobileMenuPropsType
) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </BurgerButton>

      <MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        <ul>
          {props.menuItems.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link href={`#${item.toLocaleLowerCase()}`}>{item}</Link>
              </ListItem>
            );
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav``;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100px;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: ${theme.animation.transition};

  background: #000;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0%);
    `}

  ul {
    display: flex;
    flex-direction: column;

    width: 85%;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 37px;
  right: 18px;
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
    top: 16px;
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
      transition: ${theme.animation.transition};

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
      transition: ${theme.animation.transition};

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
  padding: 27px 0;
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
