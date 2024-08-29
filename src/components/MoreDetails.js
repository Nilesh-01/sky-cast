import { useState } from "react";
import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import ForecastCard from "./ForecastCard";
import SearchInput from "./SearchInput";

const MoreDetails = ({ astronomyData }) => {
  console.log(astronomyData);
  const [showInputBox, setShowInputBox] = useState(false);
  return (
    <div className="more-details-bg p-[32px] flex-[1]">
      <div className="h-[40px] mb-[60px]">
        {!showInputBox ? (
          <div className="flex gap-[6px]">
            <Location />
            <div className="font-light flex-1 text-3xl pl-4">{`${astronomyData?.location?.name}, ${astronomyData?.location?.country}`}</div>
            <Search onClick={() => setShowInputBox(true)} />
          </div>
        ) : (
          <SearchInput onClose={() => setShowInputBox(false)} />
        )}
      </div>
      <div className="flex pb-[36px] border-b-2 justify-between">
        <div className="flex mt-[28px] flex-col gap-[14px] items-center">
          <div className="text-xl">Sunrise</div>
          <ForecastCard mainText={astronomyData?.astronomy?.astro?.sunrise} />
        </div>
        <div className="flex flex-col gap-[14px] items-center">
          <div className="text-xl">Moonrise</div>
          <ForecastCard
            mainText={astronomyData?.astronomy?.astro?.moonrise}
            subText={astronomyData?.astronomy?.astro?.moonset}
          />
        </div>
        <div className="flex mt-[28px] flex-col gap-[14px] items-center">
          <div className="text-xl">Sunset</div>
          <ForecastCard mainText={astronomyData?.astronomy?.astro?.sunset} />
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
