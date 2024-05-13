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
import { font } from "../../../styles/Common";

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

    height: 52px;
    padding: 0 20px;
    align-self: flex-end;
    ${font({ Fmax: 18, Fmin: 15 })}

    text-transform: none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 10px;

      @media ${theme.media.tablet} {
        width: 26px;
      }
    }

    @media ${theme.media.tablet} {
      padding: 0 15px;
      margin-top: 25px;

      align-self: center;
    }
  }
  
  @media ${theme.media.tablet} {
    padding-top: 0;
  }
`;

const ImageWrapper = styled.div`
  margin-top: 65px;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  grid-auto-rows: minmax(373px, auto);
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

  @media ${theme.media.tablet} {
    max-width: 323px;
    margin-top: 40px;
    align-items: center;
    grid-template-columns: repeat(5, 323px);
    grid-template-rows: 290px;

    grid-template-areas: "two three four five one";
  }
`;

const Image = styled.img`
  box-shadow: 0 4px 47px -2px rgba(0, 0, 0, 0.25);

  width: 100%;
  height: 100%;
  object-fit: cover;
`;
