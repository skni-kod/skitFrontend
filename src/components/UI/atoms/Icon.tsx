import classes from "./Icon.module.scss";
import { icons } from "lucide-react";

export type IconName = keyof typeof icons;

type IconProps = {
  iconName: IconName;
  className?: string;
  size?: number;
  color?: "primary" | "secondary";
  onClick?: () => void;
}

const Icon = (props: IconProps) => {
  const {iconName, color, className, ...iconProps} = props;
  const LucideIcon = icons[iconName];

  let classNames = classes['icon'];

  if (color) classNames += " " + classes[`icon--${color}`];
  if (className) classNames += " " + className;
  if (iconProps.onClick) classNames += " pointer";

  iconProps.size ??= 20;

  return (
    <LucideIcon className={classNames} {...iconProps} />
  );
};

export default Icon;
