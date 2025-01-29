"use client";

import { assessmentData } from "@/constants";
import React from "react";
import { cn } from "@/lib/utils";
import { useViewContext } from "@/context/view-context";
import AssessentsGridView from "../grid-view/grid-view";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import AssessentsListView from "../list-view/list-view";
const DashboardAssessmentCard = () => {
  const { isGridView } = useViewContext();
  return (
    <div className="min-w-full">
      {isGridView ? (
        <div
          className={cn(
            "grid gap-6 w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
            {}
          )}
        >
          {assessmentData.map((assessment) => (
            <AssessentsGridView key={assessment.id} assessment={assessment} />
          ))}
        </div>
      ) : (
        <div className="md:w-[100%] w-[90vw] flex shrink">
          <Card className="w-full shrink border-none ">
            <ScrollArea className="w-full !border-none shadow-custom bg-white rounded-[16px] px-6 shrink">
              <Table className="w-full border-none">
                <TableHeader>
                  <TableRow>
                    {["Title", "Type", "Version", "Created", "Updated", ""].map(
                      (value, index) => (
                        <TableHead
                          key={index}
                          className="font-normal text-sm leading-5 text-neutral-black"
                        >
                          {value}
                        </TableHead>
                      )
                    )}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assessmentData.map((assessment) => (
                    <AssessentsListView
                      assessment={assessment}
                      key={assessment.id}
                    />
                  ))}
                </TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DashboardAssessmentCard;
