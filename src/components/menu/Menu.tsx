import styled from "styled-components";

type FooterMenuPropsType = {
  menuItems: Array<string>;
  menuTitle?: string;
};

export const FooterMenu = (props: FooterMenuPropsType) => {
  return (
    <StyledFooterMenu>
      <MenuTitle>{props.menuTitle}</MenuTitle>
      <MenuList>
        {props.menuItems.map((item, index) => {
          return (
            <MenuItem key={index}>
              <MenuLink href="#">{item}</MenuLink>
            </MenuItem>
          );
        })}
      </MenuList>
    </StyledFooterMenu>
  );
};

const StyledFooterMenu = styled.nav`
  ul {
  }
`;

const MenuTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.06em;
  margin-bottom: 12px;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.li`
  margin-bottom: 4px;
`;

const MenuLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  opacity: 0.6;
`;
