import { Moon, Sun } from "lucide-react";

import { Button } from "./button";
import { useTheme } from "./theme-provider";
import { cn } from "@/theme/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const onPressTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onPressTheme}
      className={cn("size-9", className)}
    >
      <Sun className="size-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-muted-foreground" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
