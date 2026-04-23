import { cn } from "@/components/utils/cn";

type SectionShellProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} className={cn("px-4 py-16 sm:px-6 lg:px-8 lg:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
