import { useRef } from "react";
import Card from "./Card";
import moment from "moment";

const DailyForecast = ({ hourlyData }) => {
  const scrollRef = useRef(null);
  console.log(scrollRef?.current?.clientWidth);

  const handleLeftscroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behaviour: "smooth",
      });
    }
  };

  const handleRightscroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 50,
        behaviour: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-[14px] flex-[1]  ">
      <div className="border-t-2 font-medium text-xl pt-[16px]">
        Daily ForeCast
      </div>

      <div className="flex items-center gap-1">
        <button
          className="text-xl font-bold bg-[#FFFFFF42] min-w-8 h-[calc(100%-32px)] rounded-full hidden lg:block"
          onClick={handleLeftscroll}
        >{`<`}</button>
        <div
          className="flex gap-[8px] overflow-x-auto no-scrollbar items-center"
          ref={scrollRef}
        >
          {hourlyData?.map((elem, index) => (
            <Card
              key={index}
              mainText={moment(elem?.time).format("LT")}
              icon={
                <img
                  className="w-[30px] h-[30px]"
                  src={elem?.condition?.icon}
                />
              }
              subText={`${elem?.temp_c} °C`}
            />
          ))}
        </div>
        <button
          className="text-xl font-bold bg-[#FFFFFF42] min-w-8 h-[calc(100%-32px)] rounded-full hidden lg:block"
          onClick={handleRightscroll}
        >{`>`}</button>
      </div>
    </div>
  );
};

export default DailyForecast;
