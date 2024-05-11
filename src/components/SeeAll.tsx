import styled from "styled-components";
import { Icon } from "./icon/Icon";


type SeeAllProps = {
  margin?:string
}
export const SeeAll = ({margin}:SeeAllProps) => {
  return (
    <SeeAllStyled margin={margin}>
      Смотреть все
      <Icon iconId={"arrow-see-all"} width="36" height="9" viewBox="0 0 36 9" fill="#282a30" />
    </SeeAllStyled>
  );
};

const SeeAllStyled = styled.a<any>`
  font-weight: 400;
  font-size: 21px;
  text-transform: uppercase;
  color: #282a30;
  margin: ${(props) => props.margin || "58px 0px 41px"};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  cursor: pointer;
`;
