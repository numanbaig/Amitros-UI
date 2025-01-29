import DashboardCustomButton from "@/components/custom-button/custom-button";
import Link from "next/link";
import React from "react";

const DashboardAuthButtons = () => {
  return (
    <div className="space-x-2 flex items-center">
      <Link href={"/auth/login"}>
        <DashboardCustomButton className="w-[77px] h-[40px] text-[16px] !font-bold">
          Login
        </DashboardCustomButton>
      </Link>
      <Link href={"/auth/register"}>
        <DashboardCustomButton className="w-[94px] h-[40px] bg-transparent border border-primary-600 text-[16px] !font-bold text-primary-600">
          Sign Up
        </DashboardCustomButton>
      </Link>
    </div>
  );
};

export default DashboardAuthButtons;
