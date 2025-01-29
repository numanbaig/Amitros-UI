"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
const DashboardCheckbox = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" className="size-6 rounded-[4px p-1] text-white" />
      <label
        htmlFor="terms"
        className="text-[16px] text-customGray-600 font-medium leading-6"
      >
        I accept the
        <Link href={"/"} className="text-primary-600 underline">
          {" "}
          Terms and Conditions
        </Link>
      </label>
    </div>
  );
};

export default DashboardCheckbox;
