import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import ImageComponent from "../image-component/image-component";
import { Typography } from "../typography/typography";

const DashboardCustomButton = ({
  children,
  icon,
  className,
  disabled,
}: {
  children: React.ReactNode;
  icon?: string;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <Button
      className={cn(
        "space-x-[10px] px-4 py-2 bg-primary-600 w-[247px] h-12 rounded-[8px] text-[16px] font-[700] text-white",
        className
      )}
      disabled={disabled ? disabled : false}
    >
      {icon && (
        <div>
          <ImageComponent className="size-3" src={icon} alt="angle-down" />
        </div>
      )}
      <Typography variant="body1" className="sm:text-[16px] text-[14px]">
        {children}
      </Typography>
    </Button>
  );
};

export default DashboardCustomButton;
