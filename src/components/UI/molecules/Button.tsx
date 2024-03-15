import { ReactNode } from "react";
import { IconName } from "@components/UI/atoms/Icon.tsx";
import TextWithIcon from "@components/UI/molecules/TextWithIcon.tsx";
import classes from "./Button.module.scss";

interface IButtonProps {
  children?: ReactNode;
  className?: string;
  iconBefore?: IconName;
  iconAfter?: IconName;
  text?: string;
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  const classNames = `${classes.button} ${props.iconBefore ? classes["button--icon-before"] : ""} ${props.iconAfter ? classes["button--icon-after"] : ""} ${props.className ?? ""}`;

  return (
    <button className={classNames} onClick={props?.onClick}>
      <TextWithIcon className={classes.content} iconBefore={props.iconBefore} iconAfter={props.iconAfter}>
        {props.text ?? props.children}
      </TextWithIcon>
    </button>
  );
};

export default Button;