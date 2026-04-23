import { cn } from "@/components/utils/cn";

type SectionShellProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} className={cn("w-full py-10 md:py-16 px-4 sm:px-6 md:px-12", className)}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
