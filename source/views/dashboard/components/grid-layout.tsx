import { cn } from "@/theme/lib/utils";

interface GridLayoutProps {
  children: React.ReactNode;
  className?: string;
  columns?: 3 | 4 | 5;
  rows?: 1 | 2;
  stretch?: boolean;
}

export function GridLayout({
  children,
  className,
  columns = 3,
  stretch = false, // the default is 3 columns
}: GridLayoutProps) {
  const gridCols = cn(
    "grid gap-2",
    {
      // for 3 columns that stretch
      "grid-cols-1 md:grid-cols-3": columns === 3 && stretch,
      // for 3 columns responsive
      "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4":
        columns === 3 && !stretch,
      // for 4 columns
      "grid-cols-1 md:grid-cols-2 lg:grid-cols-4": columns === 4,
      // for 5 columns
      "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5": columns === 5,
    },
    className
  );

  return <div className={gridCols}>{children}</div>;
}
