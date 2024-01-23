import Icon from "@components/UI/atoms/Icon.tsx";
import { useState } from "react";

export function useInputPassword(propsInputType: string) {
  const [inputType, setInputType] = useState<string>(propsInputType);

  const handlePasswordVisibilityChange = () => {
    if (propsInputType === inputType) setInputType("text");
    else setInputType("password");
  };

  const passwordEyeIconName =
    propsInputType === inputType ? "visibility" : "visibility_off";
  const passwordEyeIcon = (
    <Icon icon={passwordEyeIconName} onClick={handlePasswordVisibilityChange} />
  );

  return {
    inputType,
    passwordEyeIcon
  };
}

