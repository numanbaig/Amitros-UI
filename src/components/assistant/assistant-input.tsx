import React from "react";
import { Input } from "../ui/input";
import ImageComponent from "../image-component/image-component";
import { Button } from "../ui/button";

interface AssistantInput {
  userMessage: string;
  setUserMessage: (value: string) => void;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const AssistantInput = ({
  userMessage,
  setUserMessage,
  handleSubmit,
}: AssistantInput) => {
  return (
    <div className="w-full mx-auto left-0 h-[45px] ronuded-[8px] px-4 gap-4 bg-white border border-[#DDE1E5] rounded-[8px] mt-4">
      <form
        onSubmit={handleSubmit}
        className=" flex justify-between items-center h-full"
      >
        <Input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Do you have any questions? Type here..."
          className="p-0 border-0 outline-none focus-within:ring-0 focus-visible:ring-0 focus-within:border-none focus-visible:border-0 focus-within:ring-offset-0 focus-visible:ring-offset-0 text-[16px] leading-5 font-normal text-customGray-500"
        />
        <Button className="!p-0 !bg-transparent " type="submit">
          <ImageComponent
            className="size-8"
            src="/assets/icons/arrow-right.svg"
            alt="arrow-right"
          />
        </Button>
      </form>
    </div>
  );
};

export default AssistantInput;
