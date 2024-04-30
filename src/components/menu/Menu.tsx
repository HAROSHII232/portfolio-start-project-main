import styled from "styled-components";

type FooterMenuPropsType = {
  menuItems: Array<string>;
  menuTitle?: string;
};

export const FooterMenu = (props: FooterMenuPropsType) => {
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

const StyledFooterMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
  }
`;
