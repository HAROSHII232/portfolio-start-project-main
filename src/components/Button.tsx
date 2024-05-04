import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  font-weight: 400;
  font-size: 15px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  background-color: ${theme.colors.accent};
`;
