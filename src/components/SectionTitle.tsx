import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({ color: "#282A30", Fmax: 40, Fmin: 24 })}
  text-transform: uppercase;

  position: relative;
  max-width: 527px;
  text-align: left;

  & span {
    color: ${theme.colors.accent};
  }

  &::before {
    content: "";
    display: inline-block;
    width: 120px;
    height: 1px;
    background-color: ${theme.colors.accent};
    position: absolute;
    left: 0;
    top: -10px;
  }
`;
