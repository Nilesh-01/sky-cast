import { useState } from "react";
import ForecastCard from "./ForecastCard";
import Card from "./Card";
import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as HeatIndex } from "../assets/heatIndex.svg";
import { ReactComponent as Feels } from "../assets/feels.svg";

const MoreDetails = ({ astronomyData, forecastData, children }) => {
  return (
    <div className="more-details-bg p-[32px] flex-[1]">
      {children}
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
      <div className="flex mt-[28px] gap-[14px] justify-center">
        <Card
          mainText="Feels like"
          subText={`${forecastData?.current?.feelslike_c} °C`}
          icon={<Feels className="w-[32px] h-[32px]" />}
        />
        <Card
          mainText="Heat Index"
          subText={`${forecastData?.current?.heatindex_c}`}
          icon={<HeatIndex className="w-[32px] h-[32px]" />}
        />
        <Card
          mainText="UV Index"
          subText={forecastData?.current?.uv}
          icon={<Sun className="w-[32px] h-[32px]" />}
        />
      </div>
    </div>
  );
};

export default MoreDetails;
