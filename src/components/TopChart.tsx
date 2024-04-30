import { useEffect, useState } from "react";
import { ChartData } from "../@type/data.types";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryLine,
} from "victory";

// type Props = { data: BottomChartData };
const TopChart = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const tickValues = data?.map((item) => {
    item?.processName;
  });
  const customLabels = data?.map((item: any, index) => {
    console.log(item);
    return `#${index}`;
  });

  //   console.log(data);
  useEffect(() => {
    fetch("./topChartData.json")
      .then((res) => res.json())
      .then((val) => setData(val.processList));
  }, []);

  return (
    <div className="bg-white  mt-3 p-3 rounded-md border border-[#DEDFDF] w-full  ">
      <div className="flex justify-end items-center gap-10">
        <div className="flex items-center gap-1 text-xs">
          <span className="text-[#F65959] font-bold">-</span> <p>Target SMV</p>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <div className="w-1 h-1 rounded-full bg-[#FF9B3F]"></div>
          <p>Real-Production</p>
        </div>
      </div>
      <div className="h-[500px] ">
        <VictoryChart domainPadding={3} height={230} width={800}>
          <VictoryLabel
            x={30}
            y={35}
            style={{ fontSize: "8px", fill: "#8C8F94" }}
            text={"(pcs)"}
          />
          <VictoryAxis
            tickValues={tickValues}
            tickFormat={customLabels}
            style={{
              tickLabels: {
                fontSize: 8,
                padding: 5,
                fill: (data: any) => (data.tick === 8 ? "#3E3F41" : "#DEDFDF"),
              },
              axis: { stroke: "#CBCBCB" },
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              tickLabels: {
                fontSize: 8,
                padding: 5,
                fill: "#8C8F94",
              },
              axisLabel: {
                angle: -360,
                fontSize: 8,
                fill: "#8C8F94",
              },
              axis: { stroke: "#CBCBCB" },
            }}
          />

          <VictoryBar
            data={data}
            x="processName"
            y="expectOutput"
            style={{
              data: {
                fill: "#EEEDFF",
                stroke: "#5550FF",
                strokeWidth: 0.3,
                width: 4,
                position: "relative",
                strokeDasharray: 1,
              },
            }}
            cornerRadius={{ top: 2 }}
          />
          <VictoryLine
            standalone={false}
            style={{
              data: {
                stroke: "#F65959",
                strokeWidth: 1,
              },
            }}
            y={() => 20}
          />
          <VictoryBar
            data={data}
            x="processName"
            y="output"
            style={{
              data: {
                fill: ({ index }) => (index === 7 ? "#FF9B3F" : "#dadbdde0"),
                width: 4,
              },
            }}
            cornerRadius={{ top: 2 }}
          />
        </VictoryChart>
      </div>
    </div>
  );
};

export default TopChart;
