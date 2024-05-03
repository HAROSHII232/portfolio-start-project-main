import styled from "styled-components";
import { theme } from "../../../styles/Theme";

type HeaderMenuPropsType = {
  menuItems: Array<string>;
};

export const HeaderMenu = (props: HeaderMenuPropsType) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="#">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
  }
`;

const ListItem = styled.li`
  position: relative;
  padding: 14px 38px;
  cursor: pointer;

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
`;
