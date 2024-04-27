import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import idea1 from "../../../assets/images/promo.webp";
import idea2 from "../../../assets/images/idea-2.webp";
import idea3 from "../../../assets/images/idea-3.webp";
import idea4 from "../../../assets/images/idea-4.webp";
import idea5 from "../../../assets/images/header-background.webp";
import { Pagination } from "../../../components/pagination/Pagination";

export const Ideas = () => {
  return (
    <StyledIdeas>
      <FlexWrapper justify="space-between">
        <SectionTitle>идеи для вдохновения</SectionTitle>
        <FlexWrapper>
          <button></button>
          <button></button>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper wrap="wrap">
        <Image src={idea1} />
        <Image src={idea2} />
        <Image src={idea3} />
        <Image src={idea4} />
        <Image src={idea5} />
      </FlexWrapper>

      <Pagination />

      <button>Смотреть еще больше фотографий</button>
    </StyledIdeas>
  );
};

const StyledIdeas = styled.section``;

const Image = styled.img`
  width: 348px;
  height: 373px;
  object-fit: cover;
`;
