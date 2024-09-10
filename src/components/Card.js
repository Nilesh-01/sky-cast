const Card = ({ mainText, subText, icon }) => {
  return (
    <div className="flex flex-1  flex-col min-w-[90px] py-[22px] px-[12px] items-center gap-[6px] bg-[#FFFFFF42] rounded-[10px]">
      <div className="text-lg whitespace-nowrap">{mainText}</div>
      {icon}
      <div className="text-m text-[#EBEBEB]">{subText}</div>
    </div>
  );
};

export default Card;
