"use client";

import * as React from "react";
import Image from "next/image";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Typography } from "../typography/typography";
import { sidebarData } from "@/constants";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

const DashboardSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const pathname = usePathname();
  const { open, setOpen, isMobile, setOpenMobile } = useSidebar();

  const isActiveLink = (itemUrl: string = "/"): boolean => {
    if (itemUrl === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(itemUrl);
  };

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 980 && width >= 768) {
        setOpen(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setOpen]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent
        className={cn("!bg-[#F8F8F8] p-8 space-y-6", {
          " flex flex-col items-center": !open,
        })}
      >
        <SidebarHeader className="px-0">
          <div
            className={cn("flex justify-center items-center gap-x-6", {
              "justify-between": isMobile,
            })}
          >
            <div
              className={cn("relative w-[143.79px] h-[37.88px]", {
                "h-9 w-9": !open,
              })}
            >
              <Image
                src={!open ? "/assets/logo-mobile.png" : "/assets/logo.png"}
                alt="logo"
                fill
                priority
                className="w-full"
              />
            </div>
            {isMobile ? (
              <X onClick={() => setOpenMobile(false)} />
            ) : (
              <SidebarTrigger
                className={cn("open", {
                  hidden: !open,
                })}
              ></SidebarTrigger>
            )}
          </div>
        </SidebarHeader>
        <SidebarGroup className="p-0">
          <SidebarMenu
            className={cn("flex flex-col  w-full gap-y-[24px] p-0 m-0", {
              "items-center": !open,
            })}
          >
            {sidebarData.map((item) => (
              <React.Fragment key={item.id || Math.random()}>
                {item.seperator ? (
                  <Separator color="#C9D6DF" className="h-0.5 w-full" />
                ) : (
                  <SidebarMenuItem className="p-0 m-0">
                    <SidebarMenuButton
                      className="!w-full !py-5"
                      tooltip={item.title}
                      onClick={() => {
                        if (isMobile) {
                          setOpenMobile(false);
                        }
                        return null;
                      }}
                    >
                      <Link
                        href={item.url ? item.url : "/"}
                        className={cn(
                          "flex items-center gap-[5px] text-neutral-black w-full !py-5 !px-3 rounded-[4px]",
                          {
                            "bg-primary-100": isActiveLink(item.url),
                            "gap-x-6": !open,
                          }
                        )}
                      >
                        {!open && (
                          <div className={cn("relative !size-6 shrink-0 ")}>
                            {item.icon && <item.icon className="size-6" />}
                          </div>
                        )}
                        {open && (
                          <Typography
                            variant="body2"
                            className="text-[18px] !leading-0"
                          >
                            {item.title}
                          </Typography>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              </React.Fragment>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSidebar;
