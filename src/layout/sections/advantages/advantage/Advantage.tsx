import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

type AdvantagePropsType = {
  title: string;
  skillNumber: string;
};

export const Advantage = (props: AdvantagePropsType) => {
  return (
    <StyledAdvantage>
      <AdvantageTitle>{props.title}</AdvantageTitle>
      <FlexWrapper align="center">
        <IconWrapper>
          <Icon
            iconId={"arrow-down"}
            width="15"
            height="15"
            viewBox="0 0 15 15"
          />
        </IconWrapper>
        <Line />
        <AdvantageNumber>{props.skillNumber}</AdvantageNumber>
      </FlexWrapper>
    </StyledAdvantage>
  );
};

const StyledAdvantage = styled.div``;

const IconWrapper = styled.div`

  padding: 0px 10px;
  display: flex;
  align-items:center;

`;

const Line = styled.span`
  background-color: ${theme.colors.accent};
  height: 1px;
  width: 82%;
`;

const AdvantageTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
  color: ${theme.colors.secondaryFont};
  margin-bottom: 20px;
`;

const AdvantageNumber = styled.div`
  width: 46px;
  height: 46px;
  background-color: ${theme.colors.accent};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
`;
