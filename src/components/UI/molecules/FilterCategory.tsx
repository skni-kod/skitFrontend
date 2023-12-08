import classes from './FilterCategory.module.scss';
import Icon from "@components/UI/atoms/Icon.tsx";
import { useEffect, useState } from "react";

export interface IFilterCategoryProps {
  name: string;
  icon?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const FilterCategory = (props: IFilterCategoryProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(props.isActive);
  }, [props.isActive]);

  const handleClick = () => {
    setIsActive((prevState: boolean) => !prevState);
    if (props?.onClick) props.onClick();
  };

  return (
    <div className={`${classes.filter} ${isActive ? classes["filter--active"] : ""}`} onClick={handleClick}>
      <div className={classes["filter__name"]}>
        {props.icon && <Icon icon={props.icon} />}
        {props.name}
      </div>
      <Icon icon={"expand_more"} className={classes['filter__icon']}/>
    </div>
  );
};

export default FilterCategory;