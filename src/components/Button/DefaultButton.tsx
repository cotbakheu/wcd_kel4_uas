"use client";

import classNames from "classnames";
import React, { useMemo } from "react";

type Props = {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  color?: "secondary" | "primary";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

function DefaultButton({
  children,
  variant = "solid",
  color = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: Props) {
  const variantColorClasses = useMemo(() => {
    switch (variant) {
      case "solid":
        switch (color) {
          case "secondary":
            return "bg-main-yellow text-white";
          case "primary":
            return "bg-main-green text-white";
          default:
            return "bg-main-green text-white";
        }
      case "outline":
        switch (color) {
          case "secondary":
            return "border border-main-yellow text-main-yellow";
          case "primary":
            return "border border-main-green text-main-green";
          default:
            return "border border-main-green text-main-green";
        }
      case "ghost":
        switch (color) {
          case "secondary":
            return "text-main-yellow";
          case "primary":
            return "text-main-green";
          default:
            return "text-main-green";
        }
      default:
        break;
    }
    return "";
  }, [variant, color]);
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classNames(
        className,
        "py-1 px-4 w-fit rounded-lg cursor-pointer font-semibold",
        variantColorClasses
      )}
    >
      {children}
    </button>
  );
}

export default DefaultButton;
