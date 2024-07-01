import { cn } from "@/_util/helpers";

export const Underline = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "h-[0.5px] w-full -translate-x-[101%] bg-foreground underline duration-300 ease-in-out group-hover:translate-x-0",
      cn(className),
    )}
  ></div>
);
