import { LogoIcon } from "../../../assets/icons/LogoIcon";

import { S } from "./styles";

interface IconProps {
  name: "logo";
  size?: string;
  width?: string;
  height?: string;
  fill?: string;
}

function Icon({
  name,
  size,
  width = "24px",
  height = "24px",
  fill = "",
}: IconProps): JSX.Element {
  const props = {
    width: size || width,
    height: size || height,
  };

  const icon = {
    logo: <LogoIcon {...props} />,
  };

  return (
    <S.IconContainer className={fill ? `text-${fill}` : ""}>
      {icon[name] ? icon[name] : <span>Invalid icon name</span>}
    </S.IconContainer>
  );
}

export { Icon };
