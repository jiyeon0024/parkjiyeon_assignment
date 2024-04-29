import { Variable } from "lucide-react";
import React, { useEffect, useState } from "react";
import * as V from "victory";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryScatter,
  VictoryStack,
  VictoryGroup,
  VictoryLine,
} from "victory";

type Props = {};

const TopChart = (props: Props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./topChartData.json")
      .then((res) => res.json())
      .then((val) => setData(val.processList));
  }, []);

  //   console.log(data);
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
            style={{
              tickLabels: { fontSize: 8, padding: 5, fill: "#8C8F94" },
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
            }}
          />
          {/* <VictoryGroup> */}
          <VictoryBar
            // standalone={false}
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
          <VictoryAxis
            dependentAxis
            tickValues={[20]}
            style={{
              tickLabels: {
                display: "none",
              },
              grid: {
                stroke: "red",
                strokeWidth: 1,
              },
            }}
          />
          <VictoryBar
            // standalone={false}
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
          {/* </VictoryGroup> */}
        </VictoryChart>
      </div>
    </div>
  );
};

export default TopChart;
