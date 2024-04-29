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
    <div className="bg-white  mt-3 w-full p-3 rounded-md border border-[#DEDFDF]">
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
        <VictoryChart domainPadding={3} height={250} width={700}>
          {/* <VictoryScatter
            labels={() => ["(pcs)"]}
            data={[{ x: 0, y: 0 }]}
            labelComponent={
              <VictoryLabel
                dy={-150}
                dx={35}
                style={{
                  fontSize: 5,
                  padding: 5,
                  fill: "gray",
                }}
                textAnchor="start"
              />
            }
          /> */}
          <VictoryLabel
            x={30}
            y={35}
            style={{ fontSize: "10px", fill: "gray" }}
            text={"(pcs)"}
          />
          <VictoryAxis
            style={{
              tickLabels: { fontSize: 5, padding: 5, fill: "gray" },
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              tickLabels: {
                fontSize: 5,
                padding: 5,
                fill: "gray",
              },
              axisLabel: {
                angle: -360,
                fontSize: 5,
                fill: "gray",
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
                fill: ({ index }) => (index === 7 ? "#FF9B3F" : "#dadbdd"),
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
