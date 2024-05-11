import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  min-height: 100%;
  padding: 0 100px;
  margin: 0 auto;

  @media ${theme.media.tablet} {
    padding: 20px;
  }
`;
