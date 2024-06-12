import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
}

export default function IconButton({
  className,
  onClick,
  icon,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex rounded-full items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
}
