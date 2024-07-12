import { cn } from "@/_util/helpers";

export const Underline = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "h-[1px] w-full -translate-x-[102%] bg-foreground duration-300 ease-in-out group-hover:translate-x-0 md:h-[2px]",
      cn(className),
    )}
  ></div>
);
