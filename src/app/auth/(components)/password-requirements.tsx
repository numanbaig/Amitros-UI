import ImageComponent from "@/components/image-component/image-component";
import { Typography } from "@/components/typography/typography";
import React from "react";

const PasswordRequirements = () => {
  return (
    <div className="space-y-2">
      <Typography variant="body1" className="font-bold text-[#545253]">
        Password must meet the requirements:
      </Typography>
      <div className="grid grid-cols-2 gap-2 w-full">
        {[
          "8 characters minimum",
          "One number",
          "One lowercase character",
          "Password Confirmed",
          "One uppercase character",
        ].map((value, index) => (
          <div className="flex items-center gap-x-2" key={index}>
            <span>
              <ImageComponent
                className="size-4"
                src="/assets/icons/x-circle.svg"
                alt="x-circle"
              />
            </span>
            <Typography
              variant="body2"
              className="leading-[16px] text-customGray-500"
            >
              {value}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordRequirements;
