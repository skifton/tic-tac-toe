import clsx from "clsx";
import React from "react";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={clsx(
        "px-6 py-2 border border-white hover:scale-105 text-white text-lg rounded-xl",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
