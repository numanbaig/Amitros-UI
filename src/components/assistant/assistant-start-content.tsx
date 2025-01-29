import React from "react";
import { Button } from "../ui/button";
import ImageComponent from "../image-component/image-component";
import { Typography } from "../typography/typography";

interface ChatType {
  type: string;
  builder: string;
}

const AssistantStartContent = ({
  setAssessmentSelectionScreen,
  setChatType,
}: {
  setChatType: (chatType: ChatType) => void;
  setAssessmentSelectionScreen: (value: string) => void;
}) => {
  return (
    <div className="space-y-4 w-full">
      <Typography
        variant="body1"
        className="font-bold text-[18px] text-secondary-400"
      >
        Hello!
        <span className="text-primary-800 block font-normal">
          How can I help you today?
        </span>
      </Typography>
      <div className="space-y-4">
        <Button
          className="p-[10px] h-[68px] w-full flex items-center justify-start gap-[10px] rounded-[8px] bg-primary-50"
          onClick={() => {
            setAssessmentSelectionScreen("assessment");
            setChatType({ type: "Create Assessment", builder: "" });
          }}
        >
          <ImageComponent
            // className="w-[14px] h-[18px]"
            src="/assets/icons/paper-tick.svg"
            alt="chatbot-icons"
          />
          <Typography variant="body1" className="text-primary-800">
            Create Assessment
          </Typography>
        </Button>
        <Button
          className="p-[10px] h-[68px] w-full flex items-center justify-start gap-[10px] rounded-[8px] bg-primary-50"
          onClick={() => {
            // setChatType({ type: "Modify Assessment", builder: "" });
          }}
        >
          <ImageComponent
            src="/assets/icons/paper-tick.svg"
            alt="chatbot-icons"
          />
          <Typography variant="body1" className="text-primary-800">
            Modify an existing assessment
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default AssistantStartContent;
