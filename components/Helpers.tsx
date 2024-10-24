import { cn } from '@/_util/helpers';

type UnderlineProps = {
  className?: string;
};

export default function Underline({ className = '' }: UnderlineProps) {
  return (
    <div
      className={cn(
        '-bottom-3 h-[1px] w-full -translate-x-[102%] bg-foreground transition-all duration-500 ease-in-out group-hover:translate-x-0 md:h-[2px]',
        className,
      )}
    />
  );
}
