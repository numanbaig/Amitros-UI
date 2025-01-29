import ImageComponent from "@/components/image-component/image-component";
import { Typography } from "@/components/typography/typography";
import { AuthType } from "@/types";
import React from "react";

const DashboardAuthHeader = ({ type }: { type: string }) => {
  return (
    <div className="space-y-7 flex flex-col items-center justify-center">
      <ImageComponent
        className="size-12"
        src="/assets/logo-mobile.png"
        alt="auth-logo"
      />
      {type !== AuthType.GETTING_STARTED && (
        <Typography
          variant="h2"
          className="font-bold text-primary-400 capitalize"
        >
          {type.includes("-") ? type.replaceAll("-", " ") : type}
          <span>{type === AuthType.FORGET_PASSWORD && "?"}</span>
        </Typography>
      )}

      {type === AuthType.FORGET_PASSWORD && (
        <Typography
          variant="body1"
          className="text-[#171616] text-[14px] xs:text-[16px] sm:text-[18px] font-bold leading-5 text-center"
        >
          Please enter the email address that you used to register.
          <span className="block">
            {" "}
            Password reset instructions will be sent to this email address.
          </span>
        </Typography>
      )}
    </div>
  );
};

export default DashboardAuthHeader;
