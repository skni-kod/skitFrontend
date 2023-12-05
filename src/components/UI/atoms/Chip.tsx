import { ReactNode } from "react";
import classes from './Chip.module.scss';

type TChipProps = {
  className?: string;
  children?: ReactNode;
  label?: string;
  size?: "medium" | "small";
}


const Chip = (props: TChipProps) => {
  const { size = 'small' } = props;
  const classNames = `${classes.chip} ${classes['chip--' + size]} ${props.className}`;

  return (
    <div className={classNames}>
      {props.label ? props.label : props.children}
    </div>
  );
};

export default Chip;