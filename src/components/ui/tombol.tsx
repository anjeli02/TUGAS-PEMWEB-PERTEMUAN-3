import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  className?: string;
  type?: "submit" | "button"; 
  isLoading?: boolean; 
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  className,
  type = "submit",
  isLoading = false,
}) => {
  const baseStyle = "px-10 py-3 rounded-2xl font-medium transition-all duration-200 disabled:opacity-50";
  const variantStyle =
    variant === "primary"
      ? "bg-red-900 text-white hover:bg-red-800"
      : "border border-red-900 text-red-900 hover:bg-red-100";
      
  return (
    <button type={type} disabled={isLoading} className={`${baseStyle} ${variantStyle} ${className}`}>
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;