import iconsSprite from "../../assets/images/icons-sprite.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "20px"}
      height={props.height || "20px"}
      viewBox={props.viewBox || "0 0 50 50"}
      fill={props.fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};
