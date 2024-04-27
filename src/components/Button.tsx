import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children }: Props) => {
  return (
    <button
      className={`bg-white border text-xs  border-[#DEDFDF] px-3 py-1  rounded-lg `}
    >
      {children}
    </button>
  );
};

export default Button;
