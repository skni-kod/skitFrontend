import classes from "./Icon.module.scss";

interface IIconProps {
  className?: string;
  icon: string;
  color?: "primary" | "secondary";
  onClick?: () => void;
}

const Icon = (props: IIconProps) => {
  let classNames = "material-icons " + classes['icon'];

  if (props.color) classNames += " " + classes[`icon--${props.color}`];
  if (props.className) classNames += " " + props.className;
  if (props.onClick) classNames += " pointer";

  return (
    <span className={classNames} onClick={props?.onClick}>
      {props.icon}
    </span>
  );
};

export default Icon;
