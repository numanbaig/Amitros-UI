import React from "react";
import { Typography } from "../typography/typography";
import { Button } from "../ui/button";
import ImageComponent from "../image-component/image-component";

const AssistantHeader = ({
  setOpenChatBox,
}: {
  setOpenChatBox: (value: boolean) => void;
}) => {
  return (
    <div className="flex justify-between items-center py-2 sm:px-4 w-full bg-primary-blueLight h-16">
      <div className="flex justify-center items-center gap-x-2">
        <ImageComponent
          className="size-8"
          src="/assets/icons/assisstant-icon.svg"
          alt="assisstant-icon"
        />
        <Typography
          variant="h5"
          className="text-[16px] leading-6 text-primary-800"
        >
          Ametros Assistant
        </Typography>
      </div>
      <Button
        className=" !p-0 !bg-transparent"
        onClick={() => setOpenChatBox(false)}
      >
        <ImageComponent src="/assets/icons/cross.svg" alt="cross-icon" />
      </Button>
    </div>
  );
};

export default AssistantHeader;
