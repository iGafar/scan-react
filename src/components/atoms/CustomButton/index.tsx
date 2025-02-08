import { ReactNode } from "react";

import { CustomBtnStyle } from "./styles";

export type IButtonType = "primary" | "secondary";
export type IButtonHtmlType = "submit" | "reset" | "button";
export type IButtonSize = "large" | "small";

interface ICustomButtonProps {
  children: ReactNode;
  type?: IButtonType;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
  htmlType?: IButtonHtmlType;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: IButtonSize;
}

const CustomButton = (props: ICustomButtonProps) => {
  const {
    type = "primary",
    htmlType = "button",
    children,
    rightIcon,
    leftIcon,
    onClick,
    disabled,
    fullWidth = false,
    size = "large",
  } = props;

  return (
    <CustomBtnStyle
      onClick={onClick}
      type={htmlType}
      disabled={disabled}
      $type={type}
      $fullWidth={fullWidth}
      $size={size}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </CustomBtnStyle>
  );
};

export default CustomButton;
