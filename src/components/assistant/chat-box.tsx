"use client";

import React, { useState } from "react";
import ImageComponent from "../image-component/image-component";
import { Button } from "../ui/button";
import { Typography } from "../typography/typography";
import DashboardAssistant from "./assistant";

const DashboardChat = () => {
  const [popUp, setPopup] = useState<boolean>(true);
  return (
    <div className="fixed bottom-7 right-0 sm:!right-6 flex flex-col items-end gap-[18px] !z-[49]">
      {popUp && (
        <div className="relative p-6 flex justify-center items-center bg-white shadow-custom rounded-[32px] w-[309px] h-16 !z-[999999999]">
          <Typography
            variant="body1"
            className="text-[20px] leading-[21px] font-bold text-primary-blueLight"
          >
            Do you need help?
          </Typography>
          <Button
            className="absolute top-1/2 -translate-y-1/2 right-[19px] !p-0 !bg-transparent"
            onClick={() => setPopup(false)}
          >
            <ImageComponent src="/assets/icons/cross.svg" alt="cross-icon" />
          </Button>
        </div>
      )}
      <DashboardAssistant setPopup={setPopup} />
    </div>
  );
};

export default DashboardChat;
