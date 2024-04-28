import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import Summary from "./Summary";

type Props = {};

const BottomChart = (props: Props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./bottomChartDatas.json")
      .then((res) => res.json())
      .then((val) => setData(val.processAnalysis));
  });

  console.log(data);
  return (
    <div className="flex gap-10">
      <ProfileCard />
      <Summary data={data} />
    </div>
  );
};

export default BottomChart;
