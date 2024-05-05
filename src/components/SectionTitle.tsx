import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  position: relative;
  font-weight: 400;
  font-size: 40px;
  max-width: 527px;
  text-transform: uppercase;
  text-align: left;
  color: #282a30;

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
