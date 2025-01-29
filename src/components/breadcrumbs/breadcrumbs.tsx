"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Typography } from "../typography/typography";
import { SlashIcon } from "lucide-react";

const DashboardBreadcrumbs = () => {
  const pathname = usePathname();
  const notToShowInBreadcrumbs = ["published", "historical"];

  const pathSegments = pathname.split("/").filter(Boolean);

  const shouldShowBreadcrumbs =
    pathname === "/" ||
    notToShowInBreadcrumbs.some((segment) => pathname.includes(segment));

  return (
    <div className="flex items-center gap-2">
      {shouldShowBreadcrumbs ? (
        <Typography
          variant="h5"
          className="font-semibold text-neutral-black leading-6"
        >
          Dashboard
        </Typography>
      ) : (
        <>
          {pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;

            return (
              <React.Fragment key={path}>
                {index > 0 && (
                  <span className="text-muted-foreground">
                    <SlashIcon
                      size={15}
                      className=" text-neutral-black font-[300] text-[16px] -rotate-[30deg]"
                    />
                  </span>
                )}
                <Link href={path}>
                  <Typography
                    variant="h5"
                    className={cn(
                      "capitalize text-[21px] font-bold text-neutral-black leading-6",
                      !isLast && "font-[300]"
                    )}
                  >
                    {segment.includes("-")
                      ? segment.replaceAll("-", " ")
                      : segment}
                  </Typography>
                </Link>
              </React.Fragment>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DashboardBreadcrumbs;
