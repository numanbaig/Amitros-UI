import React from "react";
import { AssessmentType } from "@/constants";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import ImageComponent from "@/components/image-component/image-component";
import { Separator } from "@/components/ui/separator";

interface AssessmentProps {
  id: string; // Changed from number to string to match the type
  type: string;
  title: string;
  details: {
    title: string;
    value: string;
  }[];
}

const AssessentsGridView = ({
  assessment,
}: {
  assessment: AssessmentProps;
}) => {
  return (
    <div
      className="flex flex-col gap-[16px] shadow-custom p-6 rounded-[16px]"
      key={assessment.id}
    >
      <div className="flex justify-between items-center w-full">
        <Typography
          variant="body3"
          className={cn(
            "text-neutral-black py-0.5 px-2 bg-neutral-cream rounded-[37px]",
            {
              "bg-secondary-50": assessment.type === AssessmentType.Full,
            }
          )}
        >
          {assessment.type}
        </Typography>
        <div className="flex items-center gap-4">
          <Button className="border w-10 h-8 border-neutral-lightRed bg-transparent">
            <ImageComponent src="/assets/icons/delete.svg" alt="delete" />
          </Button>
          <Button className="border w-10 h-8 border-primary-600 bg-transparent">
            <ImageComponent src="/assets/icons/edit.svg" alt="edit" />
          </Button>
        </div>
      </div>
      <Separator className="w-full bg-[#C9D6DF] h-[1px]" />
      <div className="text-center">
        <Typography
          variant="h5"
          className="leading-[25px] text-[18px] font-bold text-neutral-black"
        >
          {assessment.title}
        </Typography>
      </div>
      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-2 w-full gap-6">
          {assessment.details.map(({ title, value }, index) => (
            <div className="space-y-1" key={index}>
              <Typography
                variant="body3"
                className="leading-[14px] text-neutral-black"
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                className="text-[16px] text-neutral-black"
              >
                {value}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssessentsGridView;
