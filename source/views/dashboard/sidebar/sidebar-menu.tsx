import { Link } from "react-router";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@ui/sidebar";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@ui/sidebar";
import { menu } from "./sidebar-menu.data";

export default () => (
  <SidebarGroup>
    <SidebarGroupLabel>{menu.title}</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        {menu.items.map((item: {
          title: string;
          url: string;
          icon: React.ComponentType;
        }) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link relative="path" to={item.url}>
                <item.icon />
                <span>
                  {item.title}
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
);
