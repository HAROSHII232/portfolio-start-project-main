import styled from "styled-components";

type MenuPropsType = {
  menuItems: Array<string>;
  menuTitle?: string;
};

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

export const FooterMenu = (props: MenuPropsType) => {
  return (
    <StyledFooterMenu>
      <span>{props.menuTitle}</span>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </StyledFooterMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 90px;
  }
`;

const StyledFooterMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
  }
`;
