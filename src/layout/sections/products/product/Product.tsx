import styled from "styled-components";

type ProductPropsType = {
  title: string;
  src: string;
};

export const Product = (props: ProductPropsType) => {
  return (
    <StyledProduct>
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

  &:first-child,
  &:last-child {
    max-width: 490px;
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
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 470px;
  height: 58px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.87) 0%,
    rgba(0, 0, 0, 0.87) 100%
  );

  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fff;

  position: absolute;
  
  bottom: 20px;
`;
