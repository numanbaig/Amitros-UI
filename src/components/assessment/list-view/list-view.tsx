import React from "react";
import { cn } from "@/lib/utils";
import { AssessmentType } from "@/constants";
import ImageComponent from "../../image-component/image-component";
import { TableCell, TableRow } from "../../ui/table";
import { Button } from "../../ui/button";
interface AssessmentProps {
  id: string; // Changed from number to string to match the type
  type: string;
  title: string;
  details: {
    title: string;
    value: string;
  }[];
}

const AssessentsListView = ({
  assessment,
}: {
  assessment: AssessmentProps;
}) => {
  return (
    <TableRow key={assessment.id}>
      <TableCell className="text-nowrap font-bold text-[16px] leading-[24px] text-primary-800">
        {assessment.title}
      </TableCell>
      <TableCell
        className={cn(
          "text-nowrap font-normal text-sm leading-5 text-neutral-black"
        )}
      >
        <span
          className={cn("bg-secondary-50 py-0.5 px-2 rounded-[37px]", {
            "bg-neutral-cream": assessment.type === AssessmentType.Quick,
          })}
        >
          {assessment.type}
        </span>
      </TableCell>
      {assessment.details.map(({ value, title }, index) => (
        <TableCell
          key={index}
          className="text-nowrap  font-normal text-[16px] leading-6 text-neutral-black"
        >
          <span>{title === "Type" ? null : value}</span>
        </TableCell>
      ))}
      <TableCell className="text-right">
        <div className="flex items-center justify-end gap-4">
          <Button className="border w-10 h-8 border-neutral-lightRed bg-transparent">
            <ImageComponent src="/assets/icons/delete.svg" alt="delete" />
          </Button>
          <Button className="border w-10 h-8 border-primary-600 bg-transparent">
            <ImageComponent src="/assets/icons/edit.svg" alt="edit" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AssessentsListView;
