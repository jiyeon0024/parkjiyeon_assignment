type Props = { title: string; num: number; type: string };

const TopCard = ({ title, num, type }: Props) => {
  return (
    <div className="bg-gradient-to-r from-[#5E77F61A] to-[#80E3E31A] border border-[#5550FF1A] p-5 rounded-md w-[350px]">
      <p className="text-[#565656] font-bold text-[20px] pb-3">{title}</p>
      <p className="text-[#5550FF] font-bold text-[32px]">
        {num} <span className="text-[24px] font-extralight">{type}</span>
      </p>
    </div>
  );
};

export default TopCard;
