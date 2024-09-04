"use client"

import { Layout, Compass, List, BarChart } from "lucide-react"
import { SidebarItem } from "./sidebar-item"
import { usePathname } from "next/navigation"

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

const teacherRoutes = [
    {
        icon: List,
        name: "Courses",
        href: "/teacher/courses"
    },
    {
        icon: BarChart,
        name: "Analytics",
        href: "/teacher/analytics"
    }
]

export const SidebarRoutes = () => {
    const pathname = usePathname()

    const isTeacherPage = pathname?.includes("/teacher")

    const routes = isTeacherPage ? teacherRoutes : guestRoutes

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
