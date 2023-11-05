import { ReactNode } from "react";
import classes from "./Card.module.scss";

interface ICardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = (props: ICardProps) => {
  const classNames = `${classes.card} ${props.className}`;

  return (
    <div className={classNames} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Card;
