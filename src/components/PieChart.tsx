import { VictoryPie, VictoryLabel, VictoryScatter } from "victory";

// type Props = { data: { sewingTime: number; otherTime: number } };
type Props = { data: any };

const PieChart = ({ data }: Props) => {
  //   console.log(data);

  //   let pieData = data.data.best;

  //   if (pieData?.hasOwnProperty("sewingTime")) {
  //     pieData.x = pieData.sewingTime;
  //     delete pieData.sewingTime;
  //   }
  //   if (pieData?.hasOwnProperty("otherTime")) {
  //     pieData.y = pieData.otherTime;
  //     delete pieData.otherTime;
  //   }
  //   if (pieData?.hasOwnProperty("sewingTime")) {
  //     pieData.y = pieData.sewingTime;
  //     delete pieData.sewingTime;
  //   }

  //   console.log(pieData);
  //   const label = Math.round(
  //     (data.data.best?.sewingTime /
  //       (data.data.best?.sewingTime + data.data.best?.otherTime)) *
  //       100
  //   );
  return (
    <div className="border border-[#DEDFDF] rounded-md p-3 text-xs flex  justify-center items-center gap-3 w-[300px]">
      <div className="">
        <VictoryLabel
          //   textAnchor="start"
          style={{ fontSize: 10 }}
          dx={-500}
          dy={10}
          //   text={`${label}%`}
        />

        <VictoryPie
          colorScale={["#5550FF", "#DEDFDF"]}
          cornerRadius={10}
          //   width={530}
          //   height={150}
          padAngle={() => 2}
          innerRadius={80}
          labelRadius={120}
          startAngle={0}
          endAngle={360}
          data={[
            { x: 1, y: 3570 },
            { x: 2, y: 3312 },
          ]}
          labels={() => [""]}
        />
      </div>

      <div className="flex flex-col justify-center gap-2">
        <div className="flex justify-between items-center gap-10 font-bold  pb-1 ">
          <p className="text-[#5550FF]">Best</p>
          <p className="text-[#5550FF]">
            {(data?.best?.sewingTime + data?.best?.otherTime) / 1000}sec
          </p>
        </div>
        <div className="flex justify-between items-center gap-10 text-[#565656]">
          <div className="flex justify-center items-center gap-1">
            <div className="w-2 h-2 bg-[#5550FF] rounded-sm"></div>
            <p>Sewing</p>
          </div>

          <p className="text-xs ">{data?.best?.sewingTime / 1000}sec</p>
        </div>
        <div className="flex justify-between items-center gap-10 text-[#565656]">
          <div className="flex justify-center items-center gap-1">
            <div className="w-2 h-2 bg-[#DEDFDF] rounded-sm"></div>
            <p>Other</p>
          </div>
          <p className="text-xs ">{data?.best?.otherTime / 1000}sec</p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
