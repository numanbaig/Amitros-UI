/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import ImageComponent from "../image-component/image-component";
import AssistantHeader from "./assistant-header";
import AssistantContent from "./assistant-content";
import AssistantInput from "./assistant-input";
import AssistantFileUpload from "./file-upload";

const DashboardAssistant = ({
  setPopup,
}: {
  setPopup: (value: boolean) => void;
}) => {
  const [openChatBox, setOpenChatBox] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>("");
  const [currentScreen, setCurrentScreen] = React.useState<
    "start" | "assessment" | "main"
  >("start");
  const [messages, setMessages] = useState<
    { sender: string; message: string }[]
  >([]);

  const handleSubmitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userMessage);
    if (!userMessage) return;
    setMessages((prev) => [...prev, { sender: "user", message: userMessage }]);
    setUserMessage("");
  };

  return (
    <Popover open={openChatBox} onOpenChange={setOpenChatBox}>
      <PopoverTrigger asChild>
        <Button
          className="!p-0 bg-transparent !shrink-0"
          onClick={() => {
            setOpenChatBox((prev) => !prev);
            setPopup(false);
          }}
        >
          <ImageComponent
            src="/assets/icons/chat-icon.svg"
            className="size-20"
            alt="chat-icon"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mr-4 sm:mr-9 mb-6 w-[92vw]  sm:w-auto sm:ml-auto rounded-[16px] shadow-assitant border border-customGray-200/50  flex flex-col !z-[9999]">
        <AssistantHeader setOpenChatBox={setOpenChatBox} />
        <div className="relative sm:p-4 h-auto">
          <div className="flex flex-col justify-between flex-1 w-full">
            <AssistantContent
              messages={messages}
              setCurrentScreen={setCurrentScreen}
              currentScreen={currentScreen}
            />
            <div className="sapce-y-2 w-full">
              {currentScreen === "main" && <AssistantFileUpload />}
              <AssistantInput
                userMessage={userMessage}
                setUserMessage={setUserMessage}
                handleSubmit={handleSubmitMessage}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DashboardAssistant;
