import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import Summary from "./Summary";
import PieChart from "./PieChart";

// type Props = {};

const BottomChart = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("./bottomChartDatas.json")
      .then((res) => res.json())
      .then((val) => setData(val.processAnalysis));
  });

  return (
    <div className="flex gap-10">
      <ProfileCard />
      <Summary data={data} />
      <PieChart data={data} />
    </div>
  );
};

export default BottomChart;
