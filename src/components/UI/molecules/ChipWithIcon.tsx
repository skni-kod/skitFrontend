import { ReactNode } from "react";
import Chip from "@components/UI/atoms/Chip.tsx";
import Icon from "@components/UI/atoms/Icon.tsx";

type TChipWithIconProps = {
  children?: ReactNode;
  icon: string;
  text?: string;
}

const ChipWithIcon = (props: TChipWithIconProps) => {

  return (
    <Chip>
      <Icon icon={props.icon}/>
      {props.text ? props.text : props.children}
    </Chip>
  );
};

export default ChipWithIcon;