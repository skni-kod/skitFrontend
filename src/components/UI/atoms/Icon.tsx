import classes from "./Icon.module.scss";

interface IIconProps {
  icon: string;
  color?: "primary" | "secondary";
  className?: string;
}

const Icon = (props: IIconProps) => {
  let classNames = "material-icons";

  if (props.color) classNames += " " + classes[`icon--${props.color}`];
  if (props.className) classNames += " " + props.className;

  return <span className={classNames}>{props.icon}</span>;
};

export default Icon;
