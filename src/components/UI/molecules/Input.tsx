import React, { forwardRef, useState } from "react";
import Icon from "@components/UI/atoms/Icon.tsx";
import classes from "./Input.module.scss";

interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconBefore?: string;
  iconAfter?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (props: IInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const [inputType, setInputType] = useState<string>(props.type);

    const { iconBefore, iconAfter, label, ...inputProps } = props;

    const handlePasswordEyeChange = () => {
      if (props.type === inputType) setInputType("text");
      else setInputType("password");
    };

    const isPasswordType = inputProps.type === "password";
    const passwordEyeIconName = props.type === inputType
      ? "visibility"
      : "visibility_off";
    const passwordEyeIcon = (
      <Icon icon={passwordEyeIconName} onClick={handlePasswordEyeChange} />
    );

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
            {...inputProps}
            className={classes.input}
            ref={ref}
            type={inputType}
            onChange={onChangeHandle}
          />
          <label className={classes.label} htmlFor={props?.id}>
            {label}
          </label>
        </div>
        {isPasswordType && passwordEyeIcon}
        {iconAfter && <Icon icon={iconAfter} />}
      </div>
    );
  }
);

export default Input;
