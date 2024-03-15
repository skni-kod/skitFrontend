import Icon, { IconName } from "@components/UI/atoms/Icon.tsx";
import { useState } from "react";

export function useInputPassword(propsInputType: string) {
  const [inputType, setInputType] = useState<string>(propsInputType);

  if (inputType !== "password") return {inputType, passwordEyeIcon: null};

  const handlePasswordVisibilityChange = () => {
    if (propsInputType === inputType) setInputType("text");
    else setInputType("password");
  };

  const passwordEyeIconName: IconName =
    propsInputType === inputType ? "Eye" : "EyeOff";
  const passwordEyeIcon = (
    <Icon iconName={passwordEyeIconName} onClick={handlePasswordVisibilityChange} />
  );

  return {
    inputType,
    passwordEyeIcon
  };
}

