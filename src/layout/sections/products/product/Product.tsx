import styled from "styled-components";

type ProductPropsType = {
  title: string;
  src: string;
};

export const Product = (props: ProductPropsType) => {
  return (
    <StyledProduct>
      <a href="#">
        <Image src={props.src} alt="" />
        <Title>{props.title}</Title>
      </a>
    </StyledProduct>
  );
};

const StyledProduct = styled.a`
  display: block;
  max-width: 742px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 340px;
  object-fit: cover;
`;

const Title = styled.h3``;
