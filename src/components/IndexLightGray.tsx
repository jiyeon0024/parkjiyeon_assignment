import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const IndexLightGray = ({ children }: Props) => {
  return (
    <div
      className={`bg-[#E6E7E9] border text-xs font-semibold border-[#E6E7E9] px-3 py-1  rounded-lg `}
    >
      {children}
    </div>
  );
};

export default IndexLightGray;
