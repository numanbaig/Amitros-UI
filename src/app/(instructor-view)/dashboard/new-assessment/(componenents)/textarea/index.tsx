"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/typography/typography";
import DraggableAssistant from "../draggable-assisstant";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import ImageComponent from "@/components/image-component/image-component";
import { Button } from "@/components/ui/button";
const DashboardTextArea = ({ label }: { label: string }) => {
  const [assisstant, setAssisstant] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>("");
  return (
    <div className="relative grid w-full gap-1">
      <Label htmlFor="message">
        <Typography variant="body1" className="text-neutral-black">
          {label}
        </Typography>
      </Label>
      <Textarea
        className="border border-customGray-200 rounded-[8px] py-2 pr-2 pl-4 min-h-[147px] focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Type your message here."
        id="message"
      />
      <div className="absolute bottom-2 right-2">
        <Popover open={assisstant} onOpenChange={setAssisstant}>
          <PopoverTrigger asChild>
            <Button className="relative size-6 rounded-full flex justify-center items-center bg-primary-600 cursor-pointer p-0">
              <ImageComponent
                src="/assets/icons/ai.svg"
                alt="ai-icon"
                className="size-4"
              />
            </Button>
          </PopoverTrigger>
          <DraggableAssistant
            userMessage={userMessage}
            setUserMessage={setUserMessage}
            setAssisstant={setAssisstant}
          />
        </Popover>
      </div>
    </div>
  );
};

export default DashboardTextArea;
