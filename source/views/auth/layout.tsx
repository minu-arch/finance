import { Outlet } from "react-router";
import { ThemeProvider } from "@ui/theme-provider";

export default () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="h-screen md:min-h-screen flex items-center justify-center bg-background">
      <Outlet />
    </div>
    </ThemeProvider>
  );
}