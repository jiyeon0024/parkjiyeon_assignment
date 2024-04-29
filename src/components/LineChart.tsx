import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import colors from "tailwindcss/colors";

import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryLabel,
  VictoryVoronoiContainer,
} from "victory";
// type Props = { data: BottomChartData };

// export function formatTime(time: string) {
//   return DateTime?.fromISO(time, { zone: "Asia/Seoul" })?.toFormat("t");
// }

export const CustomTooltip = (props: any) => {
  const { x, y, datum, width, padding } = props;

  console.log(datum);

  const tooltipWidth = 230;
  const tooltipHeight = 75;
  const tooltipPadding = 10;

  const spaceWidth = 150;

  let tooltipX = x - tooltipWidth / 2;
  let tooltipY = y - tooltipHeight - tooltipPadding;

  if (tooltipX < padding) {
    tooltipX = padding;
  } else if (tooltipX + tooltipWidth > width - padding) {
    tooltipX = width - tooltipWidth - padding;
  }

  if (tooltipY < padding) {
    tooltipY = y + tooltipPadding;
  }

  return (
    <>
      <defs>
        <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="2"
            flood-color="black"
            flood-opacity="0.5"
          />
        </filter>
      </defs>

      <g filter="url(#drop-shadow)">
        {/* Background box */}
        <rect
          x={tooltipX}
          y={tooltipY}
          width={tooltipWidth}
          height={tooltipHeight}
          fill="white"
          rx={5}
        />
        <text
          fontSize={9}
          x={tooltipX + 10}
          y={tooltipY + 10}
          fill={colors.gray[600]}
          dominantBaseline="middle"
        >
          Now
          <tspan x={tooltipX + 10 + spaceWidth} y={tooltipY + 10}>
            {DateTime?.fromISO(datum.createdAt, {})?.toFormat("HH:mm:ss")}
          </tspan>
        </text>
        <text
          fontSize={11}
          x={tooltipX + 10}
          y={tooltipY + 30}
          fill={colors.gray[600]}
          dominantBaseline="middle"
        >
          Cycle Time:{" "}
          <tspan x={tooltipX + 10 + spaceWidth} y={tooltipY + 30}>
            {Math.round((datum.sewingTime + datum.otherTime) / 1000)}sec
          </tspan>
        </text>
        <rect
          width={6}
          height={6}
          fill={colors.purple[500]}
          x={tooltipX + 5}
          y={tooltipY + 50 - 3}
        />
        <text
          fontSize={9}
          x={tooltipX + 15}
          y={tooltipY + 50}
          fill={colors.gray[600]}
          dominantBaseline="middle"
        >
          Sewing Time:{" "}
          <tspan x={tooltipX + 10 + spaceWidth} y={tooltipY + 50}>
            {Math.round(datum.sewingTime / 1000)}sec
          </tspan>
        </text>
        <rect
          width={6}
          height={6}
          fill={colors.gray[300]}
          x={tooltipX + 5}
          y={tooltipY + 70 - 3}
        />
        <text
          fontSize={9}
          x={tooltipX + 15}
          y={tooltipY + 70}
          fill={colors.gray[600]}
          dominantBaseline="middle"
        >
          Other Time:
          <tspan x={tooltipX + 10 + spaceWidth} y={tooltipY + 70}>
            {Math.round(datum.otherTime / 1000)}sec
          </tspan>
        </text>
      </g>
    </>
  );
};

const LineChart = () => {
  const [val, setVal] = useState([]);

  useEffect(() => {
    fetch("./bottomChartData.json")
      .then((res) => res.json())
      .then((val) => setVal(val.clickList));
  }, []);

  if (val) {
    return (
      <div className=" relative border border-[#DEDFDF] rounded-md p-3 text-xs flex   justify-center items-center gap-3 h-[400px]  ">
        <div className="  absolute top-[49%] text-[10px]  left-[50px] bg-[#F6595926]/15 text-[#F65959] p-1 rounded-lg">
          18s
        </div>
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
                <CustomTooltip height={250} width={1000} padding={20} />
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
