import { Icons } from "./Icons";
import { BottomChartData } from "../@type/data.types";

type Props = { data: BottomChartData };

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
            <span className="text-[#3E3F41] font-bold">
              {data.processAnalysis.output}
            </span>
            pcs
          </div>
        </li>

        <li className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-1">
            <Sparkle size={15} color="#8C8F94" />
            <span>Efficiency</span>
          </div>

          <div>
            <span className="text-[#3E3F41] font-bold">
              {data.processAnalysis.efficiency}
            </span>
            pcs
          </div>
        </li>

        <li className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-1">
            <CircleMinus size={15} color="#8C8F94" />
            <span>Loss</span>
          </div>

          <div>
            <span className="text-[#3E3F41] font-bold">
              {data.processAnalysis.loss}
            </span>
            %
          </div>
        </li>
        <li className="flex justify-between items-center  w-full">
          <div className="flex justify-center items-center gap-1">
            <Activity size={15} color="#8C8F94" />
            <span>Productivity</span>
          </div>

          <div>
            <span className="text-[#3E3F41] font-bold">
              {data.processAnalysis.productive}
            </span>
            %
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Summary;
{
}
