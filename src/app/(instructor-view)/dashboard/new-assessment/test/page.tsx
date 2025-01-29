import { Typography } from "@/components/typography/typography";
import React from "react";
import DashboardTextArea from "../(componenents)/textarea";
import DashboardCustomButton from "@/components/custom-button/custom-button";

const TestPage = () => {
  return (
    <div className="space-y-6">
      <Typography
        variant="h4"
        className="font-bold text-[28px] leading-[42px] text-neutral-black"
      >
        Test
      </Typography>
      <Typography variant="body1" className=" text-neutral-black">
        You are a newly hired Sales Representative at GreenGrid Dynamics, a B2B
        software company focused on empowering businesses in the renewable
        energy sector through a specialized CRM tool. Your mentor, Taylor
        Nguyen, has sent you the LinkedIn profile of an old contact, Mark Reyes,
        and a document regarding GreenGrid&apos;s CRM tool. Taylor has set up a
        meeting with Mark and wants you to take the lead on pitching the CRM
        tool to him.{" "}
        <span className="block my-6">
          https://www.linkedin.com/in/markreyes/{" "}
        </span>
        After you read the document and LinkedIn profile, go ahead and reach out
        to Mark by starting the conversation below. When you are ready to end
        the conversation, hit the &quot;Get Assessment&quot; button in the lower
        right corner of the screen.
      </Typography>
      <div className="flex justify-between w-full">
        <div className="w-full md:block hidden" />
        <div className="flex flex-col items-center gap-y-6 w-full md:min-w-[512px]">
          <DashboardTextArea label="Type your response here" />
          <DashboardCustomButton className="w-full">Send</DashboardCustomButton>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
