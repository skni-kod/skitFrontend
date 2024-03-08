import classes from "./Icon.module.scss";
import { icons } from "lucide-react";

export type IconName = keyof typeof icons;

type IconProps = {
  className?: string;
  iconName: IconName;
  color?: "primary" | "secondary";
  onClick?: () => void;
}

const Icon = (props: IconProps) => {
  const {iconName, color, className, onClick} = props;
  const LucideIcon = icons[iconName];

  let classNames = classes['icon'];

  if (color) classNames += " " + classes[`icon--${color}`];
  if (className) classNames += " " + className;
  if (onClick) classNames += " pointer";

  return (
    <LucideIcon size={20} className={classNames} onClick={onClick} />
  );
};

export default Icon;
