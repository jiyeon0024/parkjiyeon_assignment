import React from "react";
import { Icons } from "./Icons";
type Props = {};

const ProfileCard = (props: Props) => {
  const ChevronRight = Icons["chevronRight"];
  const ChevronLeft = Icons["chevronLeft"];
  return (
    <div className=" rounded-md border  border-[#E6E7E9] px-2 py-3 flex justify-center items-center gap-6  ">
      <ChevronLeft size={20} color="gray" />
      <div className="flex justify-between items-center w-full gap-20 ">
        <div>
          <span className="text-xs text-gray-600 bg-[#F1F1F1] p-1 rounded-md">
            #38
          </span>
          <p className="font-bold">Back - Attach care label + size label</p>
          <p className="text-[#8C8F94] text-xs">Shell | SN | Patch Limit | A</p>
        </div>
        <div className="flex flex-col  gap-1 justify-center items-center">
          <div className="w-8 h-8 rounded-full border"></div>
          <p className="text-xs text-[#3E3F41]">Sije Kim</p>
        </div>
      </div>
      <ChevronRight size={20} color="gray" />
    </div>
  );
};

export default ProfileCard;
