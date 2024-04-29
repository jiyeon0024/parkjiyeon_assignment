import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import Summary from "./Summary";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import { BottomChartData } from "../@type/data.types";
import PieChartRight from "./PieChartRight";

const BottomChart = () => {
  const [data, setData] = useState<BottomChartData>();

  useEffect(() => {
    fetch("./bottomChartDatas.json")
      .then((res) => res.json())
      .then((val) => setData(val));
  }, []);
  if (data) {
    return (
      <div className="w-full">
        <div className="flex gap-3 justify-between mb-3 w-full ">
          <ProfileCard />
          <Summary data={data} />
          <PieChart data={data} />
          <PieChartRight data={data} />
        </div>
        <LineChart />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default BottomChart;
