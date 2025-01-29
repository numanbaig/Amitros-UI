import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RubricCriterion {
  name: string;
  levels: {
    description: string;
  }[];
}

interface RubricTableProps {
  criteria: RubricCriterion[];
}

export function RubricTable({ criteria }: RubricTableProps) {
  const maxLevels = Math.max(...criteria.map((c) => c.levels.length));

  return (
    <div className="md:w-[100%] w-[90vw] flex  shrink">
      <Card className="w-full shrink border-none p-0">
        <ScrollArea className="w-full shadow-custom bg-white rounded-[16px] px-0 shrink border border-customGray-300">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow>
                <TableHead className="bg-customGray-100 text-[16px] leading-6 font-bold text-neutral-black h-[72px]">
                  Criteria
                </TableHead>
                {Array.from({ length: maxLevels }, (_, i) => (
                  <TableHead
                    key={i}
                    className="border border-gray-300 bg-gray-100 text-[16px] leading-6 font-bold text-neutral-black text-center h-[72px]"
                  >
                    Level {i + 1}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {criteria.map((criterion, index) => (
                <TableRow key={index}>
                  <TableCell
                    className={cn(
                      " border-r border-customGray-300 bg-customGray-100 text-[16px] leading-6 font-bold text-neutral-black w-[143px]",
                      {
                        "border-t": index === 0,
                      }
                    )}
                  >
                    {criterion.name}
                  </TableCell>
                  {criterion.levels.map((level, levelIndex) => (
                    <TableCell
                      key={levelIndex}
                      className="border border-gray-300"
                    >
                      {/* <div className="font-medium">{level.score} points</div> */}
                      <div className="text-sm text-gray-600">
                        {level.description}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </Card>
    </div>
  );
}
