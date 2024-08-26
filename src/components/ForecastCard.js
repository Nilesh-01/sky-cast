import { ReactComponent as Clock } from "../assets/clock.svg";

const ForecastCard = ({ mainText = "11:45", subText = "7:55" }) => {
  return (
    <div className="flex flex-col py-[40px] px-[16px] items-center gap-[6px] bg-[#FFFFFF42] rounded-[100px]">
      <Clock className="mb-[16px]" />
      <div className="text-xl">{mainText}</div>
      <div className="text-sm text-[#EBEBEB]">{subText}</div>
    </div>
  );
};

export default ForecastCard;
