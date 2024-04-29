import { VictoryPie, VictoryLabel, VictoryScatter } from "victory";
import { BottomChartData } from "../@type/data.types";

// type Props = { data: { sewingTime: number; otherTime: number } };
type Props = { data: BottomChartData };

const PieChart = ({ data }: Props) => {
  console.log(data, "sfsd");
  return (
    <div className=" relative border border-[#DEDFDF] rounded-md p-3 text-xs flex  justify-center items-center gap-6 w-[300px] ">
      <div className="absolute top-18 left-[56px] font-bold">
        {Math.round(
          (data.processAnalysis.best.sewingTime /
            (data.processAnalysis.best.sewingTime +
              data.processAnalysis.best.otherTime)) *
            100
        )}
        %
      </div>
      <div className="w-[100px]">
        <VictoryLabel style={{ fontSize: 10 }} dx={-500} dy={10} />

        <VictoryPie
          colorScale={["#5550FF", "#DEDFDF"]}
          cornerRadius={10}
          width={400}
          //   height={150}
          padAngle={() => 2}
          innerRadius={80}
          labelRadius={120}
          startAngle={0}
          endAngle={360}
          data={[
            { x: 1, y: data?.processAnalysis.best?.sewingTime },
            { x: 2, y: data?.processAnalysis.best?.otherTime },
          ]}
          labels={() => [""]}
        />
      </div>

      <div className="flex flex-col justify-center gap-2  ">
        <div className="flex justify-between items-center gap-10 font-bold  pb-1 ">
          <p className="text-[#5550FF]">Best</p>
          <p className="text-[#5550FF]">
            {(data?.processAnalysis.best?.sewingTime +
              data?.processAnalysis.best?.otherTime) /
              1000}
            sec
          </p>
        </div>
        <div className="flex justify-between items-center gap-10 text-[#565656]">
          <div className="flex justify-center items-center gap-1">
            <div className="w-2 h-2 bg-[#5550FF] rounded-sm"></div>
            <p>Sewing</p>
          </div>

          <p className="text-xs ">
            {data?.processAnalysis.best?.sewingTime / 1000}sec
          </p>
        </div>
        <div className="flex justify-between items-center gap-10 text-[#565656]">
          <div className="flex justify-center items-center gap-1">
            <div className="w-2 h-2 bg-[#DEDFDF] rounded-sm"></div>
            <p>Other</p>
          </div>
          <p className="text-xs ">
            {data?.processAnalysis.best?.otherTime / 1000}sec
          </p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
