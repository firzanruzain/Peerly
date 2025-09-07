"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Subjects",
    url: "#",
    icon: Inbox,
  },
  {
    title: "My Questions",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Saved",
    url: "#",
    icon: Search,
  },
  {
    title: "Tags",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="align-middle flex items-center justify-center py-10">
        <div className="text-3xl font-bold">
          {state === "collapsed" ? "P" : "Peerly!"}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="flex items-center-safe align-middle justify-center"
                >
                  <SidebarMenuButton className=" w-[80%]" asChild>
                    <a href={item.url}>
                      <item.icon size={72} />
                      <span className="text-2xl">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
