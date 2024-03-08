import { ReactNode } from "react";
import Icon, { IconName } from "@components/UI/atoms/Icon.tsx";
import classes from "./TextWithIcon.module.scss";

interface ITextWithIcon {
  className?: string;
  children?: ReactNode;
  iconBefore?: IconName;
  iconAfter?: IconName;
  text?: string;
}

const TextWithIcon = (props: ITextWithIcon) => {
  const className = `${classes["text-with-icon"]} ${props.className ?? ""}`;

  return (
    <div className={className}>
      {props.iconBefore && <Icon iconName={props.iconBefore}/>}
      {props.text ?? props.children}
      {props.iconAfter && <Icon iconName={props.iconAfter}/>}
    </div>
  );
};

export default TextWithIcon;