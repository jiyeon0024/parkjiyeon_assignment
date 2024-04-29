import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import Summary from "./Summary";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import { BottomChartData } from "../@type/data.types";

const BottomChart = () => {
  const [data, setData] = useState<BottomChartData>();

  useEffect(() => {
    fetch("./bottomChartDatas.json")
      .then((res) => res.json())
      .then((val) => setData(val));
  }, []);
  if (data) {
    return (
      <div className="">
        <div className="flex gap-10  mb-3  ">
          <ProfileCard />
          <Summary data={data} />
          <PieChart data={data} />
          <PieChart data={data} />
        </div>
        <LineChart />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default BottomChart;
