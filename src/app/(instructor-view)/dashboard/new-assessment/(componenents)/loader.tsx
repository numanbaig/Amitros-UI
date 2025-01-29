import { Typography } from "@/components/typography/typography";
import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 !h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center gap-16 bg-white !z-[999999]">
      <Typography
        variant="h1"
        className="text-primary-600 text-[48px] font-bold leading"
      >
        Creating
      </Typography>
      <Typography
        variant="body1"
        className="text-neutral-black text-[18px] leading-[27px]"
      >
        Please hold on while we set up your new assessment.
      </Typography>
      <div className="loader" />
    </div>
  );
};

export default Loader;
