import React, { useEffect, useState } from "react";
// import { DateTime } from "luxon";
import { BottomChartData } from "../@type/data.types";

import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryScatter,
  VictoryLabel,
  VictoryBrushContainer,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";
// type Props = { data: BottomChartData };

// export function formatTime(time: string) {
//   return DateTime?.fromISO(time, { zone: "Asia/Seoul" })?.toFormat("t");
// }

export const CustomTooltip = (props) => {
  return (
    <g>
      <text cx={props.x} cy={props.y}>
        hello
      </text>
    </g>
  );
};

const LineChart = () => {
  const [val, setVal] = useState([]);

  useEffect(() => {
    fetch("./bottomChartData.json")
      .then((res) => res.json())
      .then((val) => setVal(val.clickList));
  }, []);

  //   const lineData = data.clickList;

  if (val) {
    return (
      <div className=" relative border border-[#DEDFDF] rounded-md p-3 text-xs flex   justify-center items-center gap-3 h-[400px]  ">
        <div className="absolute right-10 top-10">
          <ul className="flex justify-center items-center gap-3">
            <div className="flex items-center gap-1 text-xs">
              <span className="text-[#F65959] font-bold">-</span>{" "}
              <p>Target SMV</p>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <div className="w-2 h-2 rounded-sm  bg-[#4ECAFF]/30 font-bold"></div>{" "}
              <p>Good</p>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <div className=" w-2 h-2 rounded-sm bg-[#F659594D]/30 font-bold"></div>{" "}
              <p>Bad</p>
            </div>
          </ul>
        </div>

        <svg className="absolute w-full h-full">
          <defs>
            <linearGradient id="radial_gradient" gradientTransform="rotate(90)">
              <stop offset="7%" stopColor="#F6595912" />
              <stop offset="80%" stopColor="#4ECAFF1A" />
            </linearGradient>
          </defs>
        </svg>

        <VictoryChart
          domainPadding={10}
          height={250}
          width={1000}
          style={{
            background: { fill: "url(#radial_gradient)" },
          }}
          containerComponent={
            <VictoryVoronoiContainer
              labels={({ datum }) => `${datum.sewingTime}, ${datum.otherTime}`}
              labelComponent={
                <VictoryTooltip
                  flyoutComponent={<CustomTooltip />}
                  // center={{ x: 225, y }}
                />
              }
            />
          }
        >
          <VictoryLine
            style={{
              data: { stroke: "#5550FF", strokeWidth: 1 },
              //   parent: { border: "1px solid #ccc" },
            }}
            // x="createdAt"

            // x={(d) => formatTime(d.createdAt)}
            y={(d) => d.sewingTime + d.otherTime}
            data={val}
          />
          <VictoryAxis
            //   dependentAxis
            style={{
              tickLabels: {
                fontSize: 10,
                padding: 20,
                fill: "gray",
              },
              axisLabel: {
                angle: -360,
                fontSize: 10,
                fill: "gray",
              },
            }}
            tickValues={[
              "7:10",
              ,
              "7:12",

              "7:14",

              "7:16",

              "7:18",

              "7:20",

              "7:22",

              "7:24",

              "7:26",

              "7:28",

              "7:30",
            ]}
          />
          <VictoryLabel
            x={20}
            y={50}
            style={{ fontSize: "10px", fill: "gray" }}
            text={"(SMV)"}
          />
          <VictoryLabel
            x={50}
            y={210}
            style={{ fontSize: "10px", fill: "gray" }}
            text={"Start"}
          />
          <VictoryLabel
            x={925}
            y={210}
            style={{ fontSize: "10px", fill: "gray" }}
            text={"Finish"}
          />
          <VictoryAxis
            dependentAxis
            tickValues={[25_000]}
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
        </VictoryChart>
      </div>
    );
  }
  return;
};

export default LineChart;
