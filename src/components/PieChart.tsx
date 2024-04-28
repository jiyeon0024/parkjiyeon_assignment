import { useEffect } from "react";
import { VictoryPie, VictoryLabel } from "victory";

// type Props = { data: { sewingTime: number; otherTime: number } };
type Props = { data: any };

const PieChart = (data: Props) => {
  let pieData = data.data.best;
  console.log(pieData);

  return (
    <div className="border border-[#DEDFDF] rounded-md p-5 text-xs">
      <VictoryPie
        colorScale={["#5550FF", "#DEDFDF"]}
        width={190}
        height={150}
        // padAngle={({ datum }) => datum.y}
        innerRadius={10}
        // x="sewingTime"
        // y="otherTime"
        labelRadius={120}
        startAngle={0}
        endAngle={360}
        data={pieData}
        // data={[
        //   { x: 1, y: 110 },
        //   { x: 2, y: 100 },
        // ]}
      />
      <VictoryLabel
        textAnchor="middle"
        style={{ fontSize: 20 }}
        x={100}
        y={100}
        // text="%"
      />
    </div>
  );
};

export default PieChart;
