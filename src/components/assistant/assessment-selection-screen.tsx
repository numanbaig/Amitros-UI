/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Typography } from "../typography/typography";
import { Button } from "../ui/button";

interface ChatType {
  type: string;
  builder: string;
}

const AssessmentSelectionScreen = ({
  setAssessmentSelectionScreen,
  chatType,
  setChatType,
}: {
  setAssessmentSelectionScreen: (value: string) => void;
  chatType: any;
  setChatType: (chatType: ChatType) => void;
}) => {
  const selectAssessmentData = [
    {
      id: 1,
      title: "Assessment Builder",
      description:
        "Get a complete and personalized assessment with options to select skills and rate them.",
    },
    {
      id: 2,
      title: "Quick Assessment",
      description:
        "You only need to provide a brief description to create your assessment. It takes less than 5 minutes.",
    },
  ];
  return (
    <div className="space-y-4">
      <Typography
        variant="body1"
        className="font-bold text-[18px] text-secondary-400"
      >
        {chatType}
      </Typography>
      <Typography
        variant="body1"
        className="font-bold text-[18px] text-secondary-400"
      >
        Let’s Start!
        <span className="text-primary-800 block font-normal">
          First, select the type:
        </span>
      </Typography>
      <div className="flex sm:flex-row flex-col justify-center items-center gap-[16px]">
        {selectAssessmentData.map(({ title, id, description }) => (
          <Button
            className="w-full h-[197px] p-4 flex flex-col justify-center items-center gap-4 bg-gray-100 rounded-[8px]"
            key={id}
            onClick={() => {
              setAssessmentSelectionScreen("main");
              setChatType({ type: chatType, builder: title });
            }}
          >
            <Typography
              variant="body1"
              className="font-bold text-[18px] leading-[27px] text-primary-800"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              className="leading-[21px] text-customGray-500 text-center text-wrap"
            >
              {description}
            </Typography>
          </Button>
        ))}
      </div>
      <Button
        className="mt-4 w-full h-[50px] bg-primary-500 text-white rounded-[8px]"
        onClick={() => setAssessmentSelectionScreen("main")}
      >
        Go to Main Screen
      </Button>
    </div>
  );
};

export default AssessmentSelectionScreen;
