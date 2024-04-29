import { VictoryPie, VictoryLabel, VictoryScatter } from "victory";
import { BottomChartData } from "../@type/data.types";

// type Props = { data: { sewingTime: number; otherTime: number } };
type Props = { data: BottomChartData };

const PieChartRight = ({ data }: Props) => {
  console.log(data, "sfsd");
  return (
    <div className="border border-[#DEDFDF] rounded-md p-3 text-xs flex  justify-center items-center gap-3 w-[300px]">
      <div className="">
        <VictoryLabel style={{ fontSize: 10 }} dx={-500} dy={10} />

        <VictoryPie
          colorScale={["#F65959", "#DEDFDF"]}
          cornerRadius={10}
          //   width={530}
          //   height={150}
          padAngle={() => 2}
          innerRadius={80}
          labelRadius={120}
          startAngle={0}
          endAngle={360}
          data={[
            { x: 1, y: data?.processAnalysis.worst.sewingTime },
            { x: 2, y: data?.processAnalysis.worst.otherTime },
          ]}
          labels={() => [""]}
        />
      </div>

      <div className="flex flex-col justify-center gap-2">
        <div className="flex justify-between items-center gap-10 font-bold  pb-1 ">
          <p className="text-[#F65959]">Worst</p>
          <p className="text-[#F65959]">
            {(data?.processAnalysis.worst?.sewingTime +
              data?.processAnalysis.worst?.otherTime) /
              1000}
            sec
          </p>
        </div>
        <div className="flex justify-between items-center gap-10 text-[#565656]">
          <div className="flex justify-center items-center gap-1">
            <div className="w-2 h-2 bg-[#F65959] rounded-sm"></div>
            <p>Sewing</p>
          </div>

          <p className="text-xs ">
            {data?.processAnalysis.worst?.sewingTime / 1000}sec
          </p>
        </div>
        <div className="flex justify-between items-center gap-10 text-[#565656]">
          <div className="flex justify-center items-center gap-1">
            <div className="w-2 h-2 bg-[#DEDFDF] rounded-sm"></div>
            <p>Other</p>
          </div>
          <p className="text-xs ">
            {data?.processAnalysis.worst?.otherTime / 1000}sec
          </p>
        </div>
      </div>
    </div>
  );
};

export default PieChartRight;
