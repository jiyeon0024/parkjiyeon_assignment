import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonLightGray = ({ children }: Props) => {
  return (
    <button
      className={`bg-[#E6E7E9] border text-xs font-semibold border-[#E6E7E9] px-3 py-1  rounded-lg `}
    >
      {children}
    </button>
  );
};

export default ButtonLightGray;
