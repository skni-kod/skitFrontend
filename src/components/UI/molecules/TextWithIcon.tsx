import { ReactNode } from "react";
import Icon from "@components/UI/atoms/Icon.tsx";
import classes from "./TextWithIcon.module.scss";

interface ITextWithIcon {
  className?: string;
  children?: ReactNode;
  iconBefore?: string;
  iconAfter?: string;
  text?: string;
}

const TextWithIcon = (props: ITextWithIcon) => {
  const className = `${classes["text-with-icon"]} ${props.className}`;

  return (
    <div className={className}>
      {props.iconBefore && <Icon icon={props.iconBefore}/>}
      {props.text}
      {props.children}
      {props.iconAfter && <Icon icon={props.iconAfter}/>}
    </div>
  );
};

export default TextWithIcon;