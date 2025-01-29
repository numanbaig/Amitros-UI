/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ImageComponent from "../image-component/image-component";
import { Typography } from "../typography/typography";

interface AssistantMainScreenProps {
  chatType: any;
  messages: { sender: string; message: string }[];
}

const AssistantMainScreen = ({
  chatType,
  messages,
}: AssistantMainScreenProps) => {
  return (
    <div className="space-y-4 pr-3">
      <div className="flex items-start gap-x-2 bg-customGray-100 rounded-[8px] p-3 w-fit">
        <ImageComponent
          className="size-4"
          src="/assets/icons/assisstant-icon.svg"
          alt="assisstant-icon"
        />
        <Typography
          variant="body1"
          className="text-[14px] leading-[21px] text-neutral-black"
        >
          {chatType.type}
        </Typography>
      </div>
      <div className="flex items-start gap-x-2 bg-customGray-100 rounded-[8px] p-3 w-fit">
        <ImageComponent
          className="size-4"
          src="/assets/icons/assisstant-icon.svg"
          alt="assisstant-icon"
        />
        <Typography
          variant="body1"
          className="text-[14px] leading-[21px] text-neutral-black"
        >
          {chatType.builder}
        </Typography>
      </div>
      {messages &&
        messages.map((message, index) => {
          return (
            <React.Fragment key={index}>
              {message.sender === "assistant" ? (
                <div className="flex items-start gap-x-2 bg-customGray-100 rounded-[8px] p-3 w-fit">
                  <ImageComponent
                    className="size-4"
                    src="/assets/icons/assisstant-icon.svg"
                    alt="assisstant-icon"
                  />
                  <Typography
                    variant="body1"
                    className="text-[14px] leading-[21px] text-neutral-black"
                  >
                    {message.message}
                  </Typography>
                </div>
              ) : (
                <div className="flex items-center !w-full ">
                  <div className="!w-[32px] h-auto" />
                  <div className="bg-primary-50 p-3 rounded-[8px]">
                    <Typography
                      variant="body1"
                      className="text-[14px] leading-[21px] text-neutral-black"
                    >
                      {message.message}
                    </Typography>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default AssistantMainScreen;
