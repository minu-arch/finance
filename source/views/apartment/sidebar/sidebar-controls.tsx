import { SidebarTrigger } from "@ui/sidebar";
import { ModeToggle } from "@ui/mode-toggle";

const SidebarControls = () => {
  return (
    <div className="flex w-full items-center justify-between px-4">
      <SidebarTrigger className="text-muted-foreground" />
      <div className="flex items-center py-2">
        <ModeToggle className="hover:bg-transparent" />
      </div>
    </div>
  );
};

export default SidebarControls;
