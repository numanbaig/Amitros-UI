"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthFormSchema } from "@/schemas";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { AuthType } from "@/types";
import { Typography } from "@/components/typography/typography";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import Recaptchaverification from "./recaptcha";
import {
  ForgotPasswordFormData,
  LoginFormData,
  registerFormData,
  ReturningUserRegistrationFormData,
} from "@/utils";
import CommonAuthForm from "./common-form";
import PasswordRequirements from "./password-requirements";
import DashboardCustomButton from "@/components/custom-button/custom-button";
import axiosClient from "@/config";
const DashboardAuthForm = ({ type }: { type: string }) => {
  const formSchema = AuthFormSchema(type);
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      registrationCode: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    try {
      const endpoint =
        type === AuthType.REGISTER
          ? "/auth/signup"
          : type === AuthType.LOGIN
          ? "/auth/login"
          : console.log(data);

      const response = await axiosClient.post(endpoint as string, data, {
        withCredentials: true, // Make sure this is set to allow credentials (cookies, etc.)
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      // if (typeof endpoint === "string") {
      //   startTransition(async () => {
      //     console.log(response);
      //   });
      // } else {
      //   console.error("Invalid endpoint type:", endpoint);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const formInputsData =
    type === AuthType.REGISTER
      ? registerFormData
      : type === AuthType.LOGIN
      ? LoginFormData
      : type === AuthType.RETURNINGUSERREGISTRATION
      ? ReturningUserRegistrationFormData
      : ForgotPasswordFormData;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-7")}>
        <div
          className={cn("space-y-7", {
            "grid grid-cols-1 sm:grid-cols-2 items-center w-full gap-x-6 gap-y-6 space-y-0":
              type === AuthType.REGISTER,
          })}
        >
          {formInputsData.map(({ id, name, type, label, placeholder }) => {
            return (
              <CommonAuthForm
                key={id}
                name={name}
                type={type}
                label={label}
                placeholder={placeholder}
                form={form}
              />
            );
          })}

          {(type === AuthType.LOGIN ||
            type === AuthType.RETURNINGUSERREGISTRATION) && (
            <>
              <div className="flex justify-between items-center w-full">
                <div
                  className={cn("flex items-center gap-x-2", {
                    hidden: type === AuthType.RETURNINGUSERREGISTRATION,
                  })}
                >
                  <Checkbox
                    id="terms"
                    className="text-white size-6 rounded-sm p-1"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <Typography variant="body1" className="text-neutral-black">
                      Remember me
                    </Typography>
                  </label>
                </div>
                {type === AuthType.RETURNINGUSERREGISTRATION && <div />}
                <Link
                  href="/auth/forgot-password"
                  className="text-primary-600 underline"
                >
                  <Typography variant="body1" className="font-bold">
                    Forgot Password?
                  </Typography>
                </Link>
              </div>
              <div
                className={cn(
                  "flex justify-center items-center gap-x-2 w-full",
                  {
                    hidden: type === AuthType.RETURNINGUSERREGISTRATION,
                  }
                )}
              >
                <DashboardCustomButton className="h-[40px] w-full text-[16px] !font-bold shrink">
                  Login
                </DashboardCustomButton>
                <Link href={"/auth/register"} className="w-full shrink">
                  <DashboardCustomButton className="h-[40px] w-full bg-transparent border border-[#2BBECF] text-primary-blueLight text-[16px] !font-bold">
                    Sign Up
                  </DashboardCustomButton>
                </Link>
              </div>
            </>
          )}
        </div>

        {type === AuthType.REGISTER && (
          <div className="flex md:flex-row flex-col gap-y-2 justify-between items-start w-full">
            <div className="space-y-6">
              <PasswordRequirements />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  className="size-6 rounded-[4px p-1] text-white"
                />
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
            </div>
            <div>
              <Recaptchaverification />
            </div>
          </div>
        )}

        {(type === AuthType.FORGET_PASSWORD ||
          type === AuthType.REGISTER ||
          type === AuthType.RETURNINGUSERREGISTRATION) && (
          <>
            <div
              className={cn("w-full", {
                "w-full sm:w-[500px] mx-auto": type === AuthType.REGISTER,
              })}
            >
              <DashboardCustomButton className="h-[40px] w-full  text-[16px] !font-bold">
                Submit
              </DashboardCustomButton>
            </div>
          </>
        )}
      </form>
    </Form>
  );
};

export default DashboardAuthForm;
