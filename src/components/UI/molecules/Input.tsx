import React, { forwardRef } from "react";
import Icon, { IconName } from "@components/UI/atoms/Icon.tsx";
import { useInputPassword } from "@components/UI/molecules/Input.hooks.tsx";
import classes from "./Input.module.scss";

type InputProps  = {
  iconBefore?: IconName;
  iconAfter?: IconName;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const { iconBefore, iconAfter, label, ...inputProps } = props;
    const { inputType, passwordEyeIcon } = useInputPassword(inputProps.type);

    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        e.target.classList.add(classes["input--focused"]);
      } else {
        e.target.classList.remove(classes["input--focused"]);
      }

      if (inputProps.onChange) inputProps.onChange(e);
    };

    return (
      <label htmlFor={inputProps?.id} className={classes["form-field"]}>
        {iconBefore && <Icon iconName={iconBefore} />}
        <div className={classes.field}>
          <input
            {...inputProps}
            type={inputType}
            className={classes.input + " " + (inputProps.value ? classes["input--focused"] : "")}
            ref={ref}
            onChange={onChangeHandle}
          />
          <div className={classes.label}>{label}</div>
        </div>
        {inputProps.type === "password" && passwordEyeIcon}
        {iconAfter && <Icon iconName={iconAfter} />}
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
