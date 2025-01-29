/* eslint-disable react-hooks/exhaustive-deps */
import React, { SetStateAction } from "react";
import AssistantStartContent from "./assistant-start-content";
import AssessmentSelectionScreen from "./assessment-selection-screen";
import AssistantMainScreen from "./assisstant-main-screen";

interface AssistantContentProps {
  messages: { sender: string; message: string }[];
  currentScreen: string;
  setCurrentScreen: React.Dispatch<
    SetStateAction<"start" | "assessment" | "main">
  >;
}

const AssistantContent = ({
  messages,
  currentScreen,
  setCurrentScreen,
}: AssistantContentProps) => {
  // const [currentScreen, setCurrentScreen] = React.useState<
  //   "start" | "assessment" | "main"
  // >("start");

  const [chatType, setChatType] = React.useState<{
    type: string;
    builder: string;
  }>({
    type: "Create Assessment",
    builder: "Assessment Builder",
  });

  console.log(messages);

  const renderContent = () => {
    switch (currentScreen) {
      case "start":
        return (
          <div className="w-full sm:w-[431px] overflow-x-hidden">
            <AssistantStartContent
              setAssessmentSelectionScreen={() =>
                setCurrentScreen("assessment")
              }
              setChatType={setChatType}
            />
          </div>
        );

      case "assessment":
        return (
          <div className="sm:mb-[137px] mb-[60px] w-full sm:w-[533px] overflow-x-hidden">
            <AssessmentSelectionScreen
              setAssessmentSelectionScreen={() => setCurrentScreen("main")}
              chatType={chatType.type}
              setChatType={setChatType}
            />
          </div>
        );

      case "main":
        return (
          <div className="sm:mb-[137px] mb-[60px] w-full sm:!w-[533px] overflow-x-hidden">
            <AssistantMainScreen chatType={chatType} messages={messages} />
          </div>
        );

      default:
        return null;
    }
  };

  React.useEffect(() => {
    if (messages.length > 0 && currentScreen === "start") {
      setCurrentScreen("main");
    } else if (messages.length > 0 && currentScreen === "assessment") {
      setCurrentScreen("main");
    }
  }, [messages]);

  return (
    <div className="!min-h-full sm:max-h-[600px] max-h-[50vh] overflow-auto">
      {renderContent()}
    </div>
  );
};

export default AssistantContent;
