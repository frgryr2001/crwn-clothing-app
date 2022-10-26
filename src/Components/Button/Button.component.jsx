import React from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./Button.styles";

export const BUTTON_TYPES_CLASS = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES_CLASS.base) => {
  switch (buttonType) {
    case BUTTON_TYPES_CLASS.google:
      return GoogleSignInButton;
    case BUTTON_TYPES_CLASS.inverted:
      return InvertedButton;
    default:
      return BaseButton;
  }
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
