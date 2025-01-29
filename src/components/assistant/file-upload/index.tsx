import ImageComponent from "@/components/image-component/image-component";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const AssistantFileUpload = () => {
  return (
    <div className=" bg-customGray-100 rounded-[37px] py-2 px-4 h-8 ">
      <Label
        htmlFor="picture"
        className="flex justify-center items-center gap-[10px] text-sm leading-4 font-normal text-primary-800 w-full cursor-pointer h-full"
      >
        <span>
          <ImageComponent
            className="size-4"
            src="/assets/icons/file-upload.svg"
            alt="file-upload icon"
          />
        </span>
        Upload
      </Label>
      <Input className="hidden" id="picture" type="file" />
    </div>
  );
};

export default AssistantFileUpload;
