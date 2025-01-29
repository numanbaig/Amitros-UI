"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import DashboardBreadcrumbs from "../breadcrumbs/breadcrumbs";
import Image from "next/image";
import { cn } from "@/lib/utils";

import DashboardAuthButtons from "@/app/auth/(components)/auth-buttons";
import { Menu } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import DashboardUserProfileDrawer from "../user-profile-drawer/user-profile-drawer";
import { usePathname } from "next/navigation";
const DashboardHeader = () => {
  const isLoggedIn = false;
  const { setOpen, isMobile, setOpenMobile } = useSidebar();
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center w-full py-4 sm:px-8 px-4 h-20 bg-[#F8F8F8]">
      {isLoggedIn ? (
        <>
          {pathname.startsWith("/students") || pathname.includes("students") ? (
            <div className="">
              <Image
                src={"/assets/logo.png"}
                alt="logo"
                height={38}
                width={120}
                priority
                className=" w-full"
              />
            </div>
          ) : (
            <div className="hidden md:block">
              <DashboardBreadcrumbs />
            </div>
          )}
          {isMobile && (
            <div
              className={cn(
                " flex items-center gap-x-2  sm:w-[143.79px] sm:h-[37.88px]",
                {}
              )}
            >
              <Menu
                className="text-neutral-black !size-6"
                onClick={() => {
                  setOpen(true);
                  setOpenMobile(true);
                }}
              />

              <Image
                src={"/assets/logo.png"}
                alt="logo"
                priority
                height={38}
                width={120}
              />
            </div>
          )}
        </>
      ) : (
        <div
          className={cn(
            "relative w-[120px] h-[30px] sm:w-[143.79px] sm:h-[37.88px]",
            {}
          )}
        >
          <Image
            src={"/assets/logo.png"}
            alt="logo"
            fill
            priority
            className=" w-full"
          />
        </div>
      )}
      <div className="flex justify-center items-center gap-x-2">
        {isLoggedIn ? (
          <>
            {" "}
            <DashboardUserProfileDrawer />
          </>
        ) : (
          <>
            <DashboardAuthButtons />
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
