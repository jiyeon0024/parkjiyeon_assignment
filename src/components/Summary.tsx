import React from "react";
import { Icons } from "./Icons";

type Props = {
  data: {
    output: number;
    efficiency: number;
    loss: number;
    productive: number;
  };
};

const Summary = ({ data }: Props) => {
  const CircleMinus = Icons["circleMinus"];
  const Sparkle = Icons["sparkle"];
  const Shirt = Icons["shirt"];
  const Activity = Icons["activity"];
  return (
    <div className="border border-[#DEDFDF] rounded-md p-5 text-xs text-[#3E3F41] w-[220px]">
      <ul className="flex flex-col gap-3 items-start justify-center h-full ">
        <li className="flex justify-between items-center  w-full">
          <div className="flex justify-center items-center gap-1">
            <Shirt size={15} color="#8C8F94" />
            <span>Output</span>
          </div>
          <div>
            <span className="text-[#3E3F41] font-bold">{data.output}</span>
            pcs
          </div>
        </li>

        <li className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-1">
            <Sparkle size={15} color="#8C8F94" />
            <span>Efficiency</span>
          </div>

          <div>
            <span className="text-[#3E3F41] font-bold"> {data.efficiency}</span>
            pcs
          </div>
        </li>

        <li className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-1">
            <CircleMinus size={15} color="#8C8F94" />
            <span>Loss</span>
          </div>

          <div>
            <span className="text-[#3E3F41] font-bold"> {data.loss}</span>%
          </div>
        </li>
        <li className="flex justify-between items-center  w-full">
          <div className="flex justify-center items-center gap-1">
            <Activity size={15} color="#8C8F94" />
            <span>Productivity</span>
          </div>

          <div>
            <span className="text-[#3E3F41] font-bold">{data.productive}</span>%
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Summary;
{
}
