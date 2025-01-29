import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body1"
    | "body2"
    | "body3"
    | "button";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
}

const variantStyles = {
  h1: "text-[64px] leading-[72px] font-normal",
  h2: "text-[38px] xs:text-[48px] leading-[56px] font-normal",
  h3: "text-[32px] leading-[40px] font-normal",
  h4: "text-[24px] leading-[32px] font-normal",
  h5: "text-[20px] leading-[28px] font-normal",
  body1: "text-[16px] leading-[24px] font-normal",
  body2: "text-[14px] leading-[20px] font-normal",
  body3: "text-[12px] leading-[16px] font-normal",
  button: "text-[16px] leading-[24px] font-normal",
};

const defaultElements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body1: "p",
  body2: "p",
  body3: "p",
  button: "span",
} as const;

export function Typography({
  children,
  className,
  variant = "body1",
  as,
  ...props
}: TypographyProps) {
  const Component = as || defaultElements[variant];

  return (
    <Component className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </Component>
  );
}
