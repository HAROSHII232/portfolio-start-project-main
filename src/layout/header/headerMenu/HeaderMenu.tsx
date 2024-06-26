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
            <MenuItem key={index}>
              <Link href={`#${item.toLocaleLowerCase()}`}>{item}</Link>
            </MenuItem>
          );
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 90px;

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      gap: 15px;
    }
  }

  @media screen and (max-width: 970px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  position: relative;
  cursor: pointer;
  padding-bottom: 36px;

  &::after {
    content: "";
    position: absolute;
    bottom: 20px;
    left: -38px;
    right: -38px;
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.primaryFont};

    transform: scale(0);
    transition: ${theme.animation.transition}
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
