import React, { forwardRef } from "react";
import Icon from "@components/UI/atoms/Icon.tsx";
import { useInputPassword } from "@components/UI/molecules/Input.hooks.tsx";
import classes from "./Input.module.scss";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconBefore?: string;
  iconAfter?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (props: IInputProps, ref) => {
    const { iconBefore, iconAfter, label, ...inputProps } = props;
    const { inputType, passwordEyeIcon } = useInputPassword(inputProps.type);

    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        e.target.classList.add(classes["input--focused"]);
      } else {
        e.target.classList.remove(classes["input--focused"]);
      }

      if (props.onChange) props.onChange(e);
    };

    return (
      <label htmlFor={props?.id} className={classes["form-field"]}>
        {iconBefore && <Icon icon={iconBefore} />}
        <div className={classes.field}>
          <input
            {...inputProps}
            type={inputType}
            className={classes.input}
            ref={ref}
            onChange={onChangeHandle}
          />
          <div className={classes.label}>{label}</div>
        </div>
        {inputProps.type === "password" && passwordEyeIcon}
        {iconAfter && <Icon icon={iconAfter} />}
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
