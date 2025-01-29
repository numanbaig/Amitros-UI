"use client";

import React from "react";
import DashbaordFilterTabs from "../filter-tabs/filter-tabs";
import DashboardCustomButton from "../../custom-button/custom-button";
import { Typography } from "../../typography/typography";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const DashbaordAssessmentHeader = ({
  filterTabs,
}: {
  filterTabs?: { name: string; href: string }[];
}) => {
  const pathname = usePathname();
  const isNewAssessmentPage = pathname.includes("new-assessment");
  const studentsDashbaordPage =
    pathname.includes("students") || pathname.startsWith("/students");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center  sm:gap-0 gap-y-3 w-full">
        <Typography
          variant="h3"
          className="font-[700] text-lg xs:text-[28px] w- leading-10 text-[#2BBECF] capitalize"
        >
          {isNewAssessmentPage
            ? `${pathname.split("/")[2].replace("-", " ")}`
            : studentsDashbaordPage
            ? "Dashboard"
            : "Assessments"}
        </Typography>
        <DashboardCustomButton
          className={cn(
            "w-[150px] sm:w-[246px] xs:w-[200px] h-[35px] xs:h-[40px] sm:text-[16px] text-sm",
            {
              "bg-transparent border border-primary-600 text-primary-600 !w-[73px]":
                isNewAssessmentPage,
            }
          )}
        >
          {isNewAssessmentPage ? "Save" : "Create Assessment"}
        </DashboardCustomButton>
      </div>
      <DashbaordFilterTabs
        tabs={filterTabs}
        isNewAssessmentPage={isNewAssessmentPage}
      />
    </div>
  );
};

export default DashbaordAssessmentHeader;
