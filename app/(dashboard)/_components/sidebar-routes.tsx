"use client"

import { Layout, Compass } from "lucide-react"
import { SidebarItem } from "./sidebar-item"

const guestRoutes = [
    {
        icon: Layout,
        name: "Dashboard",
        href: "/"
    },
    {
        icon: Compass,
        name: "Browse",
        href: "/search"
    }
]

export const SidebarRoutes = () => {
    const routes = guestRoutes

    return (
        <div className="flex flex-col w-full">
            {
                routes.map((route) => (
                    <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.name}
                    href={route.href}
                    />
                ))
            }
        </div>
    )
}
