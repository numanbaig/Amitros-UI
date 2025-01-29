import { notFound } from "next/navigation";
import React from "react";
import DashboardAuthHeader from "../(components)/auth-header";
import { AuthType } from "@/types";
import DashboardAuthForm from "../(components)/auth-form";
import { cn } from "@/lib/utils";
import Link from "next/link";
import DashboardCustomButton from "@/components/custom-button/custom-button";

const DashboardAuthPage = async ({
  params,
}: {
  params: Promise<{ type: string }>;
}) => {
  const { type } = await params;
  console.log(type);

  if (!Object.values(AuthType).includes(type as AuthType)) {
    return notFound();
  }

  // Map the URL to the corresponding form type
  const formType = type;

  return (
    <div className="space-y-7 w-full">
      <DashboardAuthHeader type={formType} />
      <div
        className={cn("mx-auto", {
          "w-[95%] sm:!w-[500px]":
            type === AuthType.LOGIN ||
            type === AuthType.FORGET_PASSWORD ||
            type === AuthType.RETURNINGUSERREGISTRATION,
          "w-[95%] lg:!w-[824px]": type === AuthType.REGISTER,
        })}
      >
        {type === AuthType.GETTING_STARTED ? (
          <div className="flex flex-col justify-center items-center gap-y-6 mt-20 w-full mx-auto sm:p-0 p-4">
            <Link
              href={"/auth/register"}
              className="w-full flex justify-center"
            >
              <DashboardCustomButton className="px-8 py-6 w-full  xs:w-[418px]">
                I am new to Ametros
              </DashboardCustomButton>
            </Link>
            <Link href="/auth/login" className="w-full flex justify-center">
              <DashboardCustomButton className="px-8 py-6  w-full xs:w-[418px]">
                I already have an Ametros account
              </DashboardCustomButton>
            </Link>
          </div>
        ) : (
          <DashboardAuthForm type={formType} />
        )}
      </div>
    </div>
  );
};

export default DashboardAuthPage;
