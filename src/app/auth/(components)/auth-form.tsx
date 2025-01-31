/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useApiResponseMessages } from "@/hooks/use-alerts";
import { useRouter } from "next/navigation";
const DashboardAuthForm = ({ type }: { type: string }) => {
  const formSchema = AuthFormSchema(type);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { handleApiResponseMessages } = useApiResponseMessages();
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

  const url = process.env.NEXT_PUBLIC_BASE_URL;
  console.log("urllllll" + url);

  const getEndpoint = () => {
    switch (type) {
      case AuthType.REGISTER:
        return { endpoint: "/auth/signup", redirectUrl: "/auth/login" };
      case AuthType.LOGIN:
        return { endpoint: "/auth/login", redirectUrl: "/" };
      default:
        return { endpoint: "", redirectUrl: "" };
    }
  };

  const getFormInputsData = () => {
    switch (type) {
      case AuthType.REGISTER:
        return registerFormData;
      case AuthType.LOGIN:
        return LoginFormData;
      case AuthType.RETURNINGUSERREGISTRATION:
        return ReturningUserRegistrationFormData;
      case AuthType.FORGET_PASSWORD:
        return ForgotPasswordFormData;
      default:
        return registerFormData;
    }
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const { endpoint, redirectUrl } = getEndpoint();

    startTransition(() => {
      // Inside transition, handle the async operation
      axiosClient
        .post(endpoint, data, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("✅ Success:", response);
          handleApiResponseMessages({
            status: response.status,
            message: response?.data?.message || "Success",
          });
          if (redirectUrl && !endpoint.includes("/auth/login")) {
            router.push(`${redirectUrl}`);
          } else {
            window.location.href = "/";
          }
        })
        .catch((error) => {
          if (error.response) {
            console.error("🔴 Server Error:", error.response.data);
            handleApiResponseMessages({
              status: error?.response.data.statusCode,
              message: error?.response?.data?.message || error?.error,
            });
          } else if (error.request) {
            console.error("🔴 Network Error: No response received");
          } else {
            console.error("🔴 Unexpected Error:", error.message);
          }
        });
    });
  };

  const formInputsData = getFormInputsData();

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
              <DashboardCustomButton
                className="h-[40px] w-full  text-[16px] !font-bold"
                disabled={isPending}
              >
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
