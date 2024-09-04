const Card = ({ mainText = "11:45", subText, icon }) => {
  return (
    <div className="flex flex-1 flex-col py-[40px] px-[16px] items-center gap-[6px] bg-[#FFFFFF42] rounded-[10px]">
      <div className="text-lg">{mainText}</div>
      {icon}
      <div className="text-2xl text-[#EBEBEB]">{subText}</div>
    </div>
  );
};

export default Card;
