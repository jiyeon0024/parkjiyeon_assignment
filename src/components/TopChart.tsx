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
          <VictoryScatter
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
            standalone={false}
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
            data={[
              { x: 1, y: 19 },
              { x: 2, y: 19 },
              { x: 3, y: 19 },
              { x: 4, y: 19 },
              { x: 5, y: 19 },
              { x: 6, y: 19 },
              { x: 7, y: 19 },
              { x: 8, y: 19 },
              { x: 9, y: 19 },
              { x: 10, y: 19 },
              { x: 11, y: 19 },
              { x: 12, y: 19 },
              { x: 13, y: 19 },
              { x: 14, y: 19 },
            ]}
            style={{ data: { stroke: "#F65959", strokeWidth: 0.5 } }}
            standalone={false}
          />
          <VictoryBar
            standalone={false}
            data={data}
            x="processName"
            y="output"
            style={{
              data: {
                fill: ({ index }) => (index === 7 ? "#FF9B3F" : "#BDBFC2"),
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
