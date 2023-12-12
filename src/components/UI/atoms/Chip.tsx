import { ReactNode, useEffect, useState } from "react";
import classes from './Chip.module.scss';

export type TChipProps = {
  className?: string;
  children?: ReactNode;
  label?: string;
  size?: "medium" | "small";
  isSelected?: boolean;
  onClick?: () => void;
}


const Chip = (props: TChipProps) => {
  const [isSelected, setSelected] = useState(props.isSelected ?? false);

  useEffect(() => {
    setSelected(props.isSelected);
  }, [props.isSelected]);

  const { size = 'small' } = props;
  let classNames = `${classes.chip} ${classes['chip--' + size]} ${props.className && props.className}`;

  if (props.onClick) {
    classNames = `${classNames} ${classes['chip--clickable']}`;
    if (isSelected) {
      classNames = `${classNames} ${classes['chip--selected']}`;
    }
  }

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div className={classNames} onClick={handleClick}>
      {props.label ? props.label : props.children}
    </div>
  );
};

export default Chip;