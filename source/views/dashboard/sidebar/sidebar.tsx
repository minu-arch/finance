import { Sidebar, SidebarContent } from "@ui/sidebar";
import Header from "./sidebar-header";
import Footer from "./sidebar-footer";
import Menu from "./sidebar-menu";

export default () => (
  <Sidebar variant="inset">
    <Header />
    <SidebarContent>
      <Menu />
      {/* ... other groups */}
    </SidebarContent>
    <Footer />
  </Sidebar>
);
