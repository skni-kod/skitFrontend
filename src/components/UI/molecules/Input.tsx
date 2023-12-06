import React, { forwardRef } from "react";
import Icon from "@components/UI/atoms/Icon.tsx";
import classes from "./Input.module.scss";

interface IInputProps
  extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  iconBefore?: string;
  iconAfter?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (props: IInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { iconBefore, iconAfter, label, ...inputProps } = props;

    const isPasswordType = inputProps.type === "password";
    const passwordEyeIconName = isPasswordType ? "visibility" : "visibility_off";
    const passwordEyeIcon = <Icon icon={passwordEyeIconName} />;

    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        e.target.classList.add(classes["input--focused"]);
      } else {
        e.target.classList.remove(classes["input--focused"]);
      }

      if (props.onChange) props.onChange(e);
    };

    return (
      <div className={classes["form-field"]}>
        {iconBefore && <Icon icon={iconBefore} color={"primary"} />}
        <div className={classes.field}>
          <input
            className={classes.input}
            ref={ref}
            {...inputProps}
            onChange={onChangeHandle}
          />
          <label className={classes.label} htmlFor={props?.id}>
            {label}
          </label>
        </div>
        {isPasswordType && (
          passwordEyeIcon
        )}
        {iconAfter && <Icon icon={iconAfter} />}
      </div>
    );
  }
);

export default Input;
