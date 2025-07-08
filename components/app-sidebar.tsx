"use client"

import { Building2, MapPin, Users, Home, BarChart3, Settings, FileText, Droplets } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronRight } from "lucide-react"

const districts = [
  "Ranchi",
  "Dhanbad",
  "East Singhbhum",
  "West Singhbhum",
  "Bokaro",
  "Deoghar",
  "Hazaribagh",
  "Giridih",
  "Palamu",
  "Gumla",
  "Simdega",
  "Khunti",
  "Saraikela Kharsawan",
  "Pakur",
  "Godda",
  "Sahebganj",
  "Dumka",
  "Jamtara",
  "Koderma",
  "Chatra",
  "Garhwa",
  "Latehar",
  "Lohardaga",
  "Ramgarh",
]

const blocks = {
  Ranchi: [
    "Angara",
    "Bundu",
    "Chanho",
    "Kanke",
    "Lapung",
    "Mandar",
    "Namkum",
    "Ormanjhi",
    "Rania",
    "Silli",
    "Sonahatu",
    "Tamar",
  ],
  Dhanbad: ["Baghmara", "Baliapur", "Dhanbad", "Govindpur", "Jharia", "Nirsa", "Topchanchi"],
  "East Singhbhum": [
    "Baharagora",
    "Chakulia",
    "Dhalbhumgarh",
    "Ghatshila",
    "Gurabandha",
    "Jamshedpur",
    "Musabani",
    "Patamda",
    "Potka",
  ],
}

const villages = {
  Angara: ["Bero", "Chainpur", "Hesag", "Karra", "Lapung", "Pithoria", "Rahe", "Soso"],
  Bundu: ["Bundu", "Rajadera", "Sonahatu", "Tamar", "Torpa"],
  Chanho: ["Chanho", "Ichak", "Khelari", "Rargaon", "Sukurhutu"],
}

interface AppSidebarProps {
  selectedLevel: string
  setSelectedLevel: (level: string) => void
  selectedLocation: {
    state: string
    district: string
    block: string
    village: string
  }
  setSelectedLocation: (location: any) => void
}

export function AppSidebar({
  selectedLevel,
  setSelectedLevel,
  selectedLocation,
  setSelectedLocation,
}: AppSidebarProps) {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Droplets className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Water O&M Dashboard</span>
                <span className="truncate text-xs">Jharkhand State</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Administrative Levels</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    setSelectedLevel("state")
                    setSelectedLocation({ state: "Jharkhand", district: "", block: "", village: "" })
                  }}
                  isActive={selectedLevel === "state"}
                >
                  <Building2 />
                  <span>State Level</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <MapPin />
                      <span>District Level</span>
                      <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {districts.map((district) => (
                        <SidebarMenuSubItem key={district}>
                          <SidebarMenuSubButton
                            onClick={() => {
                              setSelectedLevel("district")
                              setSelectedLocation({ ...selectedLocation, district, block: "", village: "" })
                            }}
                            isActive={selectedLevel === "district" && selectedLocation.district === district}
                          >
                            <span>{district}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {selectedLocation.district && (
                <Collapsible className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <Users />
                        <span>Block Level</span>
                        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {(blocks[selectedLocation.district as keyof typeof blocks] || []).map((block) => (
                          <SidebarMenuSubItem key={block}>
                            <SidebarMenuSubButton
                              onClick={() => {
                                setSelectedLevel("block")
                                setSelectedLocation({ ...selectedLocation, block, village: "" })
                              }}
                              isActive={selectedLevel === "block" && selectedLocation.block === block}
                            >
                              <span>{block}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )}

              {selectedLocation.block && (
                <Collapsible className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <Home />
                        <span>Village Level</span>
                        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {(villages[selectedLocation.block as keyof typeof villages] || []).map((village) => (
                          <SidebarMenuSubItem key={village}>
                            <SidebarMenuSubButton
                              onClick={() => {
                                setSelectedLevel("village")
                                setSelectedLocation({ ...selectedLocation, village })
                              }}
                              isActive={selectedLevel === "village" && selectedLocation.village === village}
                            >
                              <span>{village}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <BarChart3 />
                  <span>Generate Report</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <FileText />
                  <span>Export Data</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <span className="text-xs text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
