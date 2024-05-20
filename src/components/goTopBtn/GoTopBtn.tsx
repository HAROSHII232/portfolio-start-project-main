import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Icon } from "../icon/Icon";
import { useEffect, useState } from "react";

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setShowBtn(true) : setShowBtn(false);
    });
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn href="#top">
          <Icon
            iconId={"arrow-up"}
            width="14"
            height="24"
            viewBox="0 0 14 24"
          />
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 59px;
  height: 57px;
  border-radius: 50%;
  background-color: ${theme.colors.accent};
  cursor: pointer;

  position: fixed;
  right: 42px;
  bottom: 43px;
  transition: ${theme.animation.transition};

  &:hover {
    opacity: 0.7;
  }
`;
