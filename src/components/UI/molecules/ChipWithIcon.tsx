import { ReactNode } from "react";
import Chip from "@components/UI/atoms/Chip.tsx";
import Icon, { IconName } from "@components/UI/atoms/Icon.tsx";

type TChipWithIconProps = {
  children?: ReactNode;
  icon: IconName;
  text?: string;
}

const ChipWithIcon = (props: TChipWithIconProps) => {

  return (
    <Chip>
      <Icon iconName={props.icon}/>
      {props.text ? props.text : props.children}
    </Chip>
  );
};

export default ChipWithIcon;