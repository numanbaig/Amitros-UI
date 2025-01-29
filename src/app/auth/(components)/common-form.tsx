/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "@/components/typography/typography";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";

import React, { useState } from "react";

interface CommonAuthFormProps {
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
  form: {
    control: any; // Replace 'any' with the appropriate type for your form control
  };
}

const CommonAuthForm: React.FC<CommonAuthFormProps> = ({
  type,
  name,
  label,
  form,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="relative">
      <FormField
        control={form.control}
        name={`${name}`}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>
              <Typography variant="body1" className="text-primary-darkBlue">
                {label}
              </Typography>
            </FormLabel>
            <FormControl className="w-full">
              <Input
                type={
                  type === "password" && !showPassword
                    ? "password"
                    : type === "password" && showPassword
                    ? "text"
                    : type
                }
                className="w-full border border-[#D8DAD9] pl-4 h-12 rounded-[8px] shadow-none placeholder:text-light-200 outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0  text-backgroundGrayDark font-[family-name:var(--font-poppins-semibold)] text-[16px] font-normal text-customGray-400 leading-5"
                {...field}
                autoComplete="off"
                placeholder={placeholder && placeholder}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      {type === "password" && (
        <div
          className="absolute top-[55%] right-3 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <span>
            {showPassword ? (
              <Eye className="size-6" />
            ) : (
              <EyeOff className="size-6" />
            )}
          </span>
        </div>
      )}
    </div>
  );
};

export default CommonAuthForm;
