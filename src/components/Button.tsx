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

export const LeftArrow = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #fff;
`;

export const RightArrow = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.accent};
  border: none;
`;
