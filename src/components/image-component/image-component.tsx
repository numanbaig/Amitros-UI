import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ImageComponentProps {
  className?: string;
  src: string;
  alt: string;
  height?: number;
  width?: number;
}

const ImageComponent = ({ className, src, alt }: ImageComponentProps) => {
  return (
    <div className={cn("relative size-6 !shrink-0", className)}>
      <Image
        className={cn("w-full")}
        src={src}
        alt={alt ? alt : "icon"}
        fill
        priority
      />
    </div>
  );
};

export default ImageComponent;
