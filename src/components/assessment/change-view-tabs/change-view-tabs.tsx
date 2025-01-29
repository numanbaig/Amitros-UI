"use client";
import React from "react";
import { Typography } from "../../typography/typography";
import { Button } from "../../ui/button";
import ImageComponent from "../../image-component/image-component";
import { useViewContext } from "@/context/view-context";
import { cn } from "@/lib/utils";

const ChangeViewTabs = () => {
  const { isGridView, setIsGridView } = useViewContext();

  return (
    <div className="flex justify-end items-center gap-x-2 lg:shrink-0">
      <Typography
        variant="body1"
        className="lg:block hidden leading-4 text-primary-800"
      >
        View
      </Typography>
      <Button
        className={cn("size-10 bg-primary-100", {
          "bg-transparent border border-customGray-300": isGridView,
        })}
        onClick={() => setIsGridView(false)}
      >
        <ImageComponent src="/assets/icons/list-view.svg" alt="list-view" />
      </Button>
      <Button
        className={cn("size-10 bg-transparent border border-customGray-300", {
          "bg-primary-100 border-none": isGridView,
        })}
        onClick={() => setIsGridView(true)}
      >
        <ImageComponent src="/assets/icons/grid-view.svg" alt="grid-view" />
      </Button>
    </div>
  );
};

export default ChangeViewTabs;
