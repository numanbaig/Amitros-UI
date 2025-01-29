"use client";

import React, { useState } from "react";
import { Typography } from "../../typography/typography";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import Search from "../search/search";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListFilter } from "lucide-react";
import ChangeViewTabs from "../change-view-tabs/change-view-tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = {
  name: string;
  href: string;
};

const DashbaordFilterTabs: React.FC<{
  isNewAssessmentPage?: boolean;
  tabs?: { name: string; href: string }[];
}> = ({ isNewAssessmentPage = false, tabs }) => {
  const pathname = usePathname();
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null);
  const [tabsDropdownOpen, setTabsDropdownOpen] = useState<boolean>(false);

  const commonTabs: Tab[] = [
    { name: "Drafts", href: "/" },
    { name: "Published", href: "/published" },
    { name: "Historical", href: "/historical" },
  ];

  const newAssessmentTabs: Tab[] = [
    { name: "Overview", href: "/dashboard/new-assessment" },
    { name: "Narrative", href: "/dashboard/new-assessment/narrative" },
    { name: "Rubric", href: "/dashboard/new-assessment/rubric" },
    { name: "Test", href: "/dashboard/new-assessment/test" },
  ];

  const isActiveLink = (itemUrl: string = "/"): boolean => {
    if (itemUrl === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(itemUrl) && pathname === itemUrl;
  };

  const tabsData = tabs
    ? tabs
    : isNewAssessmentPage
    ? newAssessmentTabs
    : commonTabs;
  return (
    <>
      {/* Desktop View */}
      <div className="hidden sm:flex justify-between items-center w-full gap-x-6">
        <div className="flex items-center gap-x-2 w-full shrink">
          <ul className="sm:flex hidden gap-x-2 bg-transparent">
            {tabsData.map((tab, index) => (
              <Link
                href={tab.href}
                key={index}
                className={cn(
                  "px-4 py-2 rounded-[8px] text-[#1D818C]",
                  isActiveLink(tab.href)
                    ? "!bg-primary-100"
                    : "border border-customGray-300 bg-transparent"
                )}
                onClick={() => setActiveTabIndex(index)}
              >
                <Typography variant="body3" className="text-[14px]">
                  {tab.name}
                </Typography>
              </Link>
            ))}
          </ul>
          {!isNewAssessmentPage && <Search />}
        </div>
        {!isNewAssessmentPage && <ChangeViewTabs />}
      </div>

      {/* Mobile View */}
      <div className="flex sm:hidden justify-between items-center w-full">
        <DropdownMenu
          open={tabsDropdownOpen}
          onOpenChange={setTabsDropdownOpen}
        >
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="size-10 bg-primary-100 rounded-[8px] border-none"
            >
              <ListFilter className="text-primary-800" size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 ml-8 flex flex-col items-start gap-y-4 p-4">
            <ul className="flex sm:flex-row flex-col justify-start items-center gap-y-2 !p-0 bg-transparent !h-auto w-full">
              {tabsData.map((tab, index) => (
                <Link
                  href={tab.href}
                  key={index}
                  className={cn(
                    "px-4 py-2 rounded-[8px] text-[#1D818C] sm:w-auto w-full",
                    activeTabIndex === index
                      ? "!bg-primary-100 "
                      : "border border-customGray-300 bg-transparent"
                  )}
                  onClick={() => {
                    setActiveTabIndex(index);
                    setTabsDropdownOpen(false);
                  }}
                >
                  <Typography variant="body3" className={cn("text-[14px]")}>
                    {tab.name}
                  </Typography>
                </Link>
              ))}
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex justify-center items-center gap-x-2">
          {!isNewAssessmentPage && <Search />}
          {!isNewAssessmentPage && <ChangeViewTabs />}
        </div>
      </div>
    </>
  );
};

export default DashbaordFilterTabs;
