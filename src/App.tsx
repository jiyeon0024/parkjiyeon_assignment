import SideBar from "./components/SideBar";
import Button from "./components/Button";
import IndexLightGray from "./components/IndexLightGray";
import TopCard from "./components/TopCard";
import { Icons } from "./components/Icons";
import TopChart from "./components/TopChart";
import BottomChart from "./components/BottomChart";

function App() {
  const Arrow = Icons["chevronLeft"];
  return (
    <div className="bg-[#F9FAFB]   flex flex-row  w-screen   h-full">
      <SideBar />

      <div className=" ">
        <p className="p-3 bg-white text-gray-600 font-bold  border-b border-[#DEDFDF]">
          Real-Time Production
        </p>
        <div className="px-3 py-4 flex flex-col items-start justify-center ">
          <div className="flex justify-start items-center gap-2">
            <Button>
              <div className="flex items-center gap-1">
                SJA <Arrow size={10} className="-rotate-90" />
              </div>
            </Button>
            <Button>
              <div className="flex items-center gap-1">
                A-1 <Arrow size={10} className="-rotate-90" />
              </div>
            </Button>
            <span className="text-[#E6E7E9]">|</span>
            <IndexLightGray>WL02Y018-RE2-001</IndexLightGray>
          </div>

          <div className="pt-3 flex justify-between  w-full  gap-3 ">
            <TopCard title="Target" num={600} type="pcs" />
            <TopCard title="Output" num={495} type="pcs" />
            <TopCard title="Difference" num={-105} type="pcs" />
            <TopCard title="Prediction" num={85} type="%" />
          </div>
          <TopChart />
          <div className="bg-white mt-3 rounded-md p-3  border border-[#DEDFDF] w-full ">
            <BottomChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
