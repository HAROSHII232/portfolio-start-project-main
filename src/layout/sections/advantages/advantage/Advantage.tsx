import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";

type AdvantagePropsType = {
  title: string;
  skillNumber: string;
};

export const Advantage = (props: AdvantagePropsType) => {
  return (
    <StyledAdvantage>
      <AdvantageTitle>{props.title}</AdvantageTitle>
      <FlexWrapper>
        <Icon iconId={"arrow-down"} />
        <Line />
        <AdvantageNumber>{props.skillNumber}</AdvantageNumber>
      </FlexWrapper>
    </StyledAdvantage>
  );
};

const StyledAdvantage = styled.div`
`;

const AdvantageTitle = styled.h3``;

const Line = styled.div``;
const AdvantageNumber = styled.div``;
