import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import idea1 from "../../../assets/images/promo.webp";
import idea2 from "../../../assets/images/idea-2.webp";
import idea3 from "../../../assets/images/idea-3.webp";
import idea4 from "../../../assets/images/idea-4.webp";
import idea5 from "../../../assets/images/header-background.webp";
import { Pagination } from "../../../components/pagination/Pagination";
import { Container } from "../../../components/Container";
import { Icon } from "../../../components/icon/Icon";
import { LeftArrow, RightArrow } from "../promo/Promo";
import { Button } from "../../../components/Button";
import { theme } from "../../../styles/Theme";

export const Ideas = () => {
  return (
    <StyledIdeas>
      <Container>
        <FlexWrapper justify="space-between" align="flex-end">
          <SectionTitle>
            идеи для <span>вдохновения</span>
          </SectionTitle>
          <FlexWrapper gap="6px">
            <LeftArrow>
              <Icon
                iconId={"arrow-left"}
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="#b1b1b1"
              />
            </LeftArrow>
            <RightArrow>
              <Icon
                iconId={"arrow-right"}
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="#b1b1b1"
              />
            </RightArrow>
          </FlexWrapper>
        </FlexWrapper>

        <ImageWrapper>
          <Image src={idea1} />
          <Image src={idea2} />
          <Image src={idea3} />
          <Image src={idea4} />
          <Image src={idea5} />
        </ImageWrapper>
        <FlexWrapper direction="column" align="center">
          <Pagination />

          <Button as={"a"} href="#">
            Смотреть еще больше фотографий
            <Icon
              iconId={"arrow-see-all"}
              width="36"
              height="9"
              viewBox="0 0 36 9"
              fill="white"
            />
          </Button>
        </FlexWrapper>
      </Container>
    </StyledIdeas>
  );
};

const StyledIdeas = styled.section`
  button {
    border: 1px solid #b1b1b1;
    border-radius: 4px;
    background-color: unset;
  }

  ${Button} {
    background-color: ${theme.colors.accent};

    width: 405px;
    height: 52px;
    align-self: flex-end;
    font-size: 18px;

    text-transform: none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 10px;
    }
  }
`;

const ImageWrapper = styled.div`
  margin-top: 65px;

  display: grid;
  grid-template-columns: 499px 348px 348px;
  grid-auto-rows: minmax(373px auto);
  gap: 20px;
  grid-template-areas:
    "one two three"
    "one four five";

  img:first-child {
    grid-area: one;
  }

  img:nth-child(2) {
    grid-area: two;
  }

  img:nth-child(3) {
    grid-area: three;
  }

  img:nth-child(4) {
    grid-area: four;
  }

  img:nth-child(5) {
    grid-area: five;
  }
`;

const Image = styled.img`
  box-shadow: 0 4px 47px -2px rgba(0, 0, 0, 0.25);

  width: 100%;
  height: 100%;
  object-fit: cover;
`;
