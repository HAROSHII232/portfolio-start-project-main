import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";

type ProductPropsType = {
  title: string;
  src: string;
};

export const Product = (props: ProductPropsType) => {
  return (
    <StyledProduct href="#">
      <Image src={props.src} alt="" />
      <Title>{props.title}</Title>
    </StyledProduct>
  );
};

const StyledProduct = styled.a`
  position: relative;

  display: block;
  max-width: 740px;
  width: 100%;
  flex-grow: 1;

  &:first-child,
  &:last-child {
    width: 490px;

    @media screen and (max-width: 1439px) {
      width: 100%;
    }
  }

  &:nth-child(even) {
    h3 {
      right: 0;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 340px;
  object-fit: cover;
  border-radius: 4px;

  box-shadow: 0 4px 47px -2px rgba(0, 0, 0, 0.25);

  @media ${theme.media.mobile} {
    height: 220px;
  }
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 470px;
  width: 100%;
  height: 58px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.87) 0%,
    rgba(0, 0, 0, 0.87) 100%
  );

  ${font({
    weight: 500,
    color: `${theme.colors.primaryFont}`,
    Fmax: 24,
    Fmin: 22,
  })}

  line-height: 150%;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  position: absolute;
  bottom: 20px;

  @media ${theme.media.mobile} {
    height: 45px;
  }
`;
