import { Typography } from "@/components/typography/typography";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 justify-center items-center">
      <Typography variant="h1" className="text-3xl font-bold">
        404
      </Typography>
      <Typography variant="h1" className="text-3xl font-bold">
        Page not found
      </Typography>
    </div>
  );
};

export default NotFound;
