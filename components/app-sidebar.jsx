"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "./ui/separator"
import { cn } from "@/lib/utils"
import Users from "./Users"

const data = {
  user: {
    name: "aditya",
    email: "ab@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar variant="inset" {...props} >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="select-none">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Blue Chat</span>

                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className='py-2 px-2'>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className='w-full flex justify-evenly'>
            <TabsTrigger value="account">Messages</TabsTrigger>
            <TabsTrigger value="password">Segments</TabsTrigger>
          </TabsList>


          <TabsContent value="account">
            <SidebarMenu className='pt-2'>
              <div className="flex  gap-x-2">


                <Select className='select-none'>
                  <SelectTrigger className="">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Groups</SelectItem>
                    <SelectItem value="dark">Friends</SelectItem>
                    <SelectItem value="system">Business</SelectItem>
                  </SelectContent>
                </Select>
                <Select className='select-none'>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Oldest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Latest</SelectItem>
                    <SelectItem value="dark">Oldest</SelectItem>
                    <SelectItem value="system">New One</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator className='my-2' />
              <div>
               <Users/>
              </div>
            </SidebarMenu>
          </TabsContent>

          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>)
  );
}
