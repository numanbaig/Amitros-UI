/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import AssistantInput from "@/components/assistant/assistant-input";
import ImageComponent from "@/components/image-component/image-component";
import { Typography } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { PopoverContent } from "@/components/ui/popover";
import { useSidebar } from "@/components/ui/sidebar";
import React, { useState, useEffect, useRef } from "react";

export default function DraggableAssistant({
  setAssisstant,
  userMessage,
  setUserMessage,
}: {
  setAssisstant: (value: boolean) => void;
  userMessage: string;
  setUserMessage: (value: string) => void;
}) {
  const [position, setPosition] = useState({ x: -430, y: -350 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const startPosRef = useRef({ x: 0, y: 0 });
  const { isMobile } = useSidebar();

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!dragRef.current) return;

    setIsDragging(true);
    startPosRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - startPosRef.current.x,
      y: e.clientY - startPosRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userMessage);
  };

  return (
    <>
      {isMobile ? (
        <PopoverContent className="xs:w-[350px] !max-w-[320px] w-full rounded-[16px] shadow-assitant h-[288px] bg-white z-[9999] p-0 mr-4 xs:mr-7 shrink">
          <div className="flex justify-between items-center px-4 py-2">
            <div />
            <Button
              className="bg-transparent p-0"
              onClick={() => setAssisstant(false)}
            >
              <ImageComponent src="/assets/icons/cross.svg" alt="close-popup" />
            </Button>
          </div>
          <div className="w-full px-4 flex flex-col justify-between h-full">
            <div className="p-3  w-full bg-primary-50 h-full">
              <div className="flex justify-center items-center ">
                <span className="">
                  <ImageComponent
                    className=""
                    src="/assets/icons/paper-tick.svg"
                    alt="assistant-icon"
                  />
                </span>
                <Typography variant="body1" className="text-primary-800">
                  We can help you add more ideas and personalize it. Select the
                  text you want to work on and try again!
                </Typography>
              </div>
            </div>
            <div className="h-full">
              {" "}
              {/* Added h-full to ensure it takes full height */}
              <AssistantInput
                userMessage={userMessage}
                setUserMessage={setUserMessage}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </PopoverContent>
      ) : (
        <PopoverContent
          ref={dragRef}
          onMouseDown={handleMouseDown}
          style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            cursor: "move",
            userSelect: "none",
          }}
          className="w-[300px] xs:w-[389px] rounded-[16px] shadow-assitant h-[288px] bg-white z-[9999] p-0 "
        >
          <div className="flex justify-between items-center px-4 py-2">
            <div />
            <Button
              className="bg-transparent p-0"
              onClick={() => setAssisstant(false)}
            >
              <ImageComponent src="/assets/icons/cross.svg" alt="close-popup" />
            </Button>
          </div>
          <div className="w-full px-4 flex flex-col justify-between h-full">
            <div className="p-3  w-full bg-primary-50 h-full">
              <div className="flex justify-center items-center ">
                <span className="">
                  <ImageComponent
                    className=""
                    src="/assets/icons/paper-tick.svg"
                    alt="assistant-icon"
                  />
                </span>
                <Typography variant="body1" className="text-primary-800">
                  We can help you add more ideas and personalize it. Select the
                  text you want to work on and try again!
                </Typography>
              </div>
            </div>
            <div className="h-full">
              {" "}
              {/* Added h-full to ensure it takes full height */}
              <AssistantInput
                userMessage={userMessage}
                setUserMessage={setUserMessage}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </PopoverContent>
      )}
    </>
  );
}
