"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { StateDashboard } from "@/components/state-dashboard"
import { DistrictDashboard } from "@/components/district-dashboard"
import { BlockDashboard } from "@/components/block-dashboard"
import { VillageDashboard } from "@/components/village-dashboard"

export default function Dashboard() {
  const [selectedLevel, setSelectedLevel] = useState("state")
  const [selectedLocation, setSelectedLocation] = useState({
    state: "Jharkhand",
    district: "",
    block: "",
    village: "",
  })

  const renderDashboard = () => {
    switch (selectedLevel) {
      case "state":
        return <StateDashboard />
      case "district":
        return <DistrictDashboard district={selectedLocation.district} />
      case "block":
        return <BlockDashboard district={selectedLocation.district} block={selectedLocation.block} />
      case "village":
        return (
          <VillageDashboard
            district={selectedLocation.district}
            block={selectedLocation.block}
            village={selectedLocation.village}
          />
        )
      default:
        return <StateDashboard />
    }
  }

  const getBreadcrumbs = () => {
    const breadcrumbs = [{ label: "Jharkhand", href: "#", active: selectedLevel === "state" }]

    if (selectedLocation.district && selectedLevel !== "state") {
      breadcrumbs.push({ label: selectedLocation.district, href: "#", active: selectedLevel === "district" })
    }

    if (selectedLocation.block && (selectedLevel === "block" || selectedLevel === "village")) {
      breadcrumbs.push({ label: selectedLocation.block, href: "#", active: selectedLevel === "block" })
    }

    if (selectedLocation.village && selectedLevel === "village") {
      breadcrumbs.push({ label: selectedLocation.village, href: "#", active: selectedLevel === "village" })
    }

    return breadcrumbs
  }

  return (
    <SidebarProvider>
      <AppSidebar
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {getBreadcrumbs().map((breadcrumb, index) => (
                  <div key={breadcrumb.label} className="flex items-center">
                    {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
                    <BreadcrumbItem className="hidden md:block">
                      {breadcrumb.active ? (
                        <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href={breadcrumb.href}>{breadcrumb.label}</BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </div>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{renderDashboard()}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
