import { DropdownMenuItem, DropdownMenuTrigger } from "@ui/dropdown-menu";
import { DropdownMenu, DropdownMenuContent } from "@ui/dropdown-menu";
import { SidebarMenuItem, SidebarMenuButton } from "@ui/sidebar";
import { SidebarMenu, SidebarHeader } from "@ui/sidebar";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";


export default function DropdownHeader() {
  const options = ["Apartments", "Motostyle"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="w-full font-muted-foreground">
              {selectedOption}
              
              <ChevronDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width]"
            align="start"

          >
            {options.map((option) => (
              <DropdownMenuItem
                key={option}
                onSelect={() => setSelectedOption(option)}
                className="flex w-full justify-between gap-36 md:gap-28"
              >
               {option}
                  {option === selectedOption && <Check className="ml-auto" />}  
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
  );
}
