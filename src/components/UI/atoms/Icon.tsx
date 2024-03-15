import classes from "./Icon.module.scss";
import { icons, LucideProps } from "lucide-react";

export type IconName = keyof typeof icons;

type IconProps = {
  iconName: IconName;
  className?: string;
  size?: number;
  fontColor?: "primary" | "secondary";
  onClick?: () => void;
} & LucideProps;

const Icon = (props: IconProps) => {
  const {iconName, fontColor, className, ...iconProps} = props;
  const LucideIcon = icons[iconName];

  let classNames = classes['icon'];

  if (fontColor) classNames += " " + classes[`icon--${fontColor}`];
  if (className) classNames += " " + className;
  if (iconProps.onClick) classNames += " pointer";

  iconProps.size ??= 20;

  return (
    <LucideIcon className={classNames} {...iconProps} />
  );
};

export default Icon;
