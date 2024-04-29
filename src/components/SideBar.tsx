import { Icons } from "./Icons";

const SideBar = () => {
  const ArrowLeftToLine = Icons["arrowLeftToLine"];
  const Bell = Icons["bell"];
  const Logout = Icons["logOut"];
  const Sparkle = Icons["sparkle"];
  const BarChart4 = Icons["barChart4"];
  return (
    <div className="bg-[#2E2E2E] text-white p-3 flex flex-col justify-between items-start   h-[800px] ">
      <div>
        <div className="flex justify-end items-center pb-2 ">
          <ArrowLeftToLine size={12} color="white" />
        </div>

        <div className=" bg-[#3E3F41] rounded-md p-3 flex  flex-col justify-center items-center">
          <div className="rounded-full w-10 h-10 bg-[#8C8F94] mb-3 "></div>
          <p className="text-xs font-bold">User Name</p>
          <p className="text-xs text-[#8C8F94] ">employee/sales</p>
          <p className="text-xs"> sales@youngwon.com</p>
        </div>
        <div className="px-3 flex flex-col gap-3 pt-3">
          <p className=" flex gap-1 items-center text-[#8C8F94] font-normal text-xs">
            {" "}
            <BarChart4 size={15} />
            Line Management
          </p>
          <p className="text-xs flex items-center gap-1">
            <BarChart4 size={15} />
            Real-Time Prod.
          </p>
        </div>
      </div>
      <div>
        <div className="px-3 flex flex-col gap-3 ">
          <p className="text-sm flex   items-center gap-1">
            <Sparkle size={15} />
            Master
          </p>
          <p className=" flex items-center  gap-1 text-[#8C8F94] font-normal text-xs">
            <Bell size={15} />
            Thread
          </p>
          <p className="flex  items-center gap-1 text-[#8C8F94] font-normal text-xs">
            <Logout size={15} />
            Log out
          </p>

          <h1 className="font-bold pb-3  text-center text-3xl pt-3">Monolog</h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
