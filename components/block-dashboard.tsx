import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { AlertTriangle, Clock, Droplets, Wrench } from "lucide-react"

interface BlockDashboardProps {
  district: string
  block: string
}

const gpPerformance = [
  { name: "Bero GP", households: 485, tapConnections: 92, waterRegularity: 88, grievances: 8, resolved: 7 },
  { name: "Chainpur GP", households: 356, tapConnections: 89, waterRegularity: 85, grievances: 5, resolved: 5 },
  { name: "Hesag GP", households: 412, tapConnections: 95, waterRegularity: 90, grievances: 3, resolved: 3 },
  { name: "Karra GP", households: 298, tapConnections: 87, waterRegularity: 82, grievances: 6, resolved: 4 },
  { name: "Lapung GP", households: 523, tapConnections: 91, waterRegularity: 86, grievances: 9, resolved: 8 },
  { name: "Pithoria GP", households: 367, tapConnections: 88, waterRegularity: 84, grievances: 4, resolved: 4 },
]

const maintenanceSchedule = [
  { activity: "Water Tank Cleaning", scheduled: 12, completed: 10, nextDue: "15-Jul-2024" },
  { activity: "Pump Maintenance", scheduled: 8, completed: 7, nextDue: "20-Jul-2024" },
  { activity: "Pipeline Inspection", scheduled: 15, completed: 12, nextDue: "25-Jul-2024" },
  { activity: "Valve Servicing", scheduled: 6, completed: 6, nextDue: "30-Jul-2024" },
  { activity: "Meter Reading", scheduled: 24, completed: 22, nextDue: "10-Jul-2024" },
]

const recentGrievances = [
  { id: "GRV001", village: "Bero", issue: "Low Water Pressure", status: "Resolved", days: 2, assignedTo: "Ram Kumar" },
  {
    id: "GRV002",
    village: "Chainpur",
    issue: "Water Quality",
    status: "In Progress",
    days: 1,
    assignedTo: "Sita Devi",
  },
  {
    id: "GRV003",
    village: "Hesag",
    issue: "Supply Interruption",
    status: "Resolved",
    days: 3,
    assignedTo: "Mohan Singh",
  },
  { id: "GRV004", village: "Karra", issue: "Billing Issue", status: "Pending", days: 1, assignedTo: "Radha Kumari" },
  { id: "GRV005", village: "Lapung", issue: "Pipe Leakage", status: "Resolved", days: 4, assignedTo: "Suresh Yadav" },
]

const monthlyData = [
  { month: "Jan", interruptions: 12, resumptionDays: 2.3, expenditure: 23.5 },
  { month: "Feb", interruptions: 8, resumptionDays: 1.8, expenditure: 24.2 },
  { month: "Mar", interruptions: 15, resumptionDays: 2.8, expenditure: 25.8 },
  { month: "Apr", interruptions: 11, resumptionDays: 2.1, expenditure: 27.5 },
  { month: "May", interruptions: 18, resumptionDays: 3.2, expenditure: 29.0 },
  { month: "Jun", interruptions: 14, resumptionDays: 2.5, expenditure: 28.5 },
]

export function BlockDashboard({ district, block }: BlockDashboardProps) {
  const britishBlue = "#00247d"
  const britishRed = "#cf142b"
  const britishGold = "#baa635"

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{block} Block Dashboard</h1>
          <p className="text-muted-foreground">
            Water supply O&M performance across 6 gram panchayats in {district} district
          </p>
        </div>
        <Badge variant="outline" className="text-sm" style={{ backgroundColor: britishBlue, color: "white" }}>
          Total HH: 2,441
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card style={{ background: `linear-gradient(to right, ${britishBlue}, #ADD8E6)` }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tap Connections</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">90%</div>
            <Progress value={90} className="mt-2" style={{ backgroundColor: britishRed, color: "white" }} />
            <p className="text-xs text-muted-foreground mt-2">2,197 of 2,441 households</p>
          </CardContent>
        </Card>

        <Card style={{ background: `linear-gradient(to right, ${britishRed}, #FFB6C1)` }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">55 LPCD Regular Supply</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86%</div>
            <Progress value={86} className="mt-2" style={{ backgroundColor: britishBlue, color: "white" }} />
            <p className="text-xs text-muted-foreground mt-2">1,889 households receiving</p>
          </CardContent>
        </Card>

        <Card style={{ background: `linear-gradient(to right, ${britishGold}, #FAFAD2)` }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Grievances</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <Progress value={20} className="mt-2" style={{ backgroundColor: britishRed, color: "white" }} />
            <p className="text-xs text-muted-foreground mt-2">33 resolved this month</p>
          </CardContent>
        </Card>

        <Card style={{ background: `linear-gradient(to right, ${britishBlue}, #ADD8E6)` }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance Score</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <Progress value={85} className="mt-2" style={{ backgroundColor: britishGold, color: "white" }} />
            <p className="text-xs text-muted-foreground mt-2">Preventive maintenance</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="gps" className="space-y-4">
        <TabsList>
          <TabsTrigger value="gps">GP Performance</TabsTrigger>
          <TabsTrigger value="grievances">Grievance Management</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance Schedule</TabsTrigger>
          <TabsTrigger value="personnel">Personnel & Training</TabsTrigger>
        </TabsList>

        <TabsContent value="gps" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gram Panchayat Performance</CardTitle>
              <CardDescription>Performance metrics across all GPs in {block} block</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={gpPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="tapConnections" fill={britishBlue} name="Tap Connections %" />
                  <Bar dataKey="waterRegularity" fill={britishRed} name="Water Regularity %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>GP-wise Details</CardTitle>
              <CardDescription>Detailed performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Gram Panchayat</TableHead>
                    <TableHead>Households</TableHead>
                    <TableHead>Tap Connections</TableHead>
                    <TableHead>Water Regularity</TableHead>
                    <TableHead>Grievances</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gpPerformance.map((gp) => (
                    <TableRow key={gp.name}>
                      <TableCell className="font-medium">{gp.name}</TableCell>
                      <TableCell>{gp.households}</TableCell>
                      <TableCell>{gp.tapConnections}%</TableCell>
                      <TableCell>{gp.waterRegularity}%</TableCell>
                      <TableCell>{gp.grievances}</TableCell>
                      <TableCell>
                        <Badge
                          variant={gp.tapConnections > 90 ? "default" : "secondary"}
                          style={{ backgroundColor: gp.tapConnections > 90 ? britishBlue : britishRed, color: "white" }}
                        >
                          {gp.tapConnections > 90 ? "Good" : "Needs Attention"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grievances" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card style={{ background: `linear-gradient(to right, ${britishRed}, #FFB6C1)` }}>
              <CardHeader>
                <CardTitle>Turnaround Time</CardTitle>
                <CardDescription>Average resolution time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.8 days</div>
                <Progress value={70} className="mt-2" style={{ backgroundColor: britishBlue, color: "white" }} />
                <p className="text-xs text-muted-foreground mt-2">Target: 3 days</p>
              </CardContent>
            </Card>

            <Card style={{ background: `linear-gradient(to right, ${britishBlue}, #ADD8E6)` }}>
              <CardHeader>
                <CardTitle>Resolution Rate</CardTitle>
                <CardDescription>Grievances resolved</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94%</div>
                <Progress value={94} className="mt-2" style={{ backgroundColor: britishGold, color: "white" }} />
                <p className="text-xs text-muted-foreground mt-2">31 of 33 resolved</p>
              </CardContent>
            </Card>

            <Card style={{ background: `linear-gradient(to right, ${britishGold}, #FAFAD2)` }}>
              <CardHeader>
                <CardTitle>User Satisfaction</CardTitle>
                <CardDescription>Feedback score</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.2/5</div>
                <Progress value={84} className="mt-2" style={{ backgroundColor: britishRed, color: "white" }} />
                <p className="text-xs text-muted-foreground mt-2">Based on 156 responses</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Grievances</CardTitle>
              <CardDescription>Latest complaints and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Village</TableHead>
                    <TableHead>Issue</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Days</TableHead>
                    <TableHead>Assigned To</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentGrievances.map((grievance) => (
                    <TableRow key={grievance.id}>
                      <TableCell className="font-medium">{grievance.id}</TableCell>
                      <TableCell>{grievance.village}</TableCell>
                      <TableCell>{grievance.issue}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            grievance.status === "Resolved"
                              ? "default"
                              : grievance.status === "In Progress"
                                ? "secondary"
                                : "destructive"
                          }
                          style={{
                            backgroundColor:
                              grievance.status === "Resolved"
                                ? britishBlue
                                : grievance.status === "In Progress"
                                  ? britishGold
                                  : britishRed,
                            color: "white",
                          }}
                        >
                          {grievance.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{grievance.days}</TableCell>
                      <TableCell>{grievance.assignedTo}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Schedule</CardTitle>
              <CardDescription>Preventive maintenance activities and compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Activity</TableHead>
                    <TableHead>Scheduled</TableHead>
                    <TableHead>Completed</TableHead>
                    <TableHead>Compliance</TableHead>
                    <TableHead>Next Due</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {maintenanceSchedule.map((item) => (
                    <TableRow key={item.activity}>
                      <TableCell className="font-medium">{item.activity}</TableCell>
                      <TableCell>{item.scheduled}</TableCell>
                      <TableCell>{item.completed}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress
                            value={(item.completed / item.scheduled) * 100}
                            className="w-16"
                            style={{ backgroundColor: britishBlue, color: "white" }}
                          />
                          <span className="text-sm">{Math.round((item.completed / item.scheduled) * 100)}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{item.nextDue}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card style={{ background: `linear-gradient(to right, ${britishBlue}, #ADD8E6)` }}>
              <CardHeader>
                <CardTitle>Water Storage Tanks</CardTitle>
                <CardDescription>Tank cleaning and maintenance status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Tanks Cleaned (Monthly)</span>
                    <span className="text-sm font-medium">10/12</span>
                  </div>
                  <Progress value={83} style={{ backgroundColor: britishRed, color: "white" }} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Water Quality Tests</span>
                    <span className="text-sm font-medium">18/20</span>
                  </div>
                  <Progress value={90} style={{ backgroundColor: britishGold, color: "white" }} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Structural Inspections</span>
                    <span className="text-sm font-medium">8/10</span>
                  </div>
                  <Progress value={80} style={{ backgroundColor: britishBlue, color: "white" }} />
                </div>
              </CardContent>
            </Card>

            <Card style={{ background: `linear-gradient(to right, ${britishRed}, #FFB6C1)` }}>
              <CardHeader>
                <CardTitle>Infrastructure Status</CardTitle>
                <CardDescription>Overall infrastructure health</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Pipeline Network</span>
                    <span className="text-sm font-medium">Good</span>
                  </div>
                  <Progress value={85} style={{ backgroundColor: britishGold, color: "white" }} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Pump Stations</span>
                    <span className="text-sm font-medium">Excellent</span>
                  </div>
                  <Progress value={92} style={{ backgroundColor: britishBlue, color: "white" }} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Distribution System</span>
                    <span className="text-sm font-medium">Good</span>
                  </div>
                  <Progress value={88} style={{ backgroundColor: britishRed, color: "white" }} />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Expenditure</CardTitle>
              <CardDescription>Expenditure on maintenance activities</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`₹${Number(value)}L`, "Expenditure"]} />
                  <Bar dataKey="expenditure" fill={britishGold} name="Expenditure (Lakhs)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="personnel" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card style={{ background: `linear-gradient(to right, ${britishGold}, #FAFAD2)` }}>
              <CardHeader>
                <CardTitle>Trained Plumbers</CardTitle>
                <CardDescription>Available at GP level</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5/6</div>
                <Progress value={83} className="mt-2" style={{ backgroundColor: britishBlue, color: "white" }} />
                <p className="text-xs text-muted-foreground mt-2">1 position vacant in Karra GP</p>
              </CardContent>
            </Card>

            <Card style={{ background: `linear-gradient(to right, ${britishBlue}, #ADD8E6)` }}>
              <CardHeader>
                <CardTitle>Handpump Mechanics</CardTitle>
                <CardDescription>Trained personnel available</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6/6</div>
                <Progress value={100} className="mt-2" style={{ backgroundColor: britishRed, color: "white" }} />
                <p className="text-xs text-muted-foreground mt-2">All positions filled</p>
              </CardContent>
            </Card>

            <Card style={{ background: `linear-gradient(to right, ${britishRed}, #FFB6C1)` }}>
              <CardHeader>
                <CardTitle>Electricians</CardTitle>
                <CardDescription>For pump and electrical work</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4/6</div>
                <Progress value={67} className="mt-2" style={{ backgroundColor: britishGold, color: "white" }} />
                <p className="text-xs text-muted-foreground mt-2">2 positions need filling</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card style={{ background: `linear-gradient(to right, ${britishBlue}, #ADD8E6)` }}>
              <CardHeader>
                <CardTitle>VWSC Meeting Compliance</CardTitle>
                <CardDescription>Village Water & Sanitation Committee meetings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Monthly Meetings Held</span>
                    <span className="text-sm font-medium">5/6</span>
                  </div>
                  <Progress value={83} style={{ backgroundColor: britishRed, color: "white" }} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Attendance Rate</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <Progress value={78} style={{ backgroundColor: britishGold, color: "white" }} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Action Items Completed</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <Progress value={85} style={{ backgroundColor: britishBlue, color: "white" }} />
                </div>
              </CardContent>
            </Card>

            <Card style={{ background: `linear-gradient(to right, ${britishRed}, #FFB6C1)` }}>
              <CardHeader>
                <CardTitle>Record Maintenance</CardTitle>
                <CardDescription>O&M records at GP and VWSC level</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Complaint Logbook</span>
                    <span className="text-sm font-medium">Updated</span>
                  </div>
                  <Progress value={90} style={{ backgroundColor: britishGold, color: "white" }} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Maintenance Schedule</span>
                    <span className="text-sm font-medium">Current</span>
                  </div>
                  <Progress value={85} style={{ backgroundColor: britishBlue, color: "white" }} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Financial Records</span>
                    <span className="text-sm font-medium">Up-to-date</span>
                  </div>
                  <Progress value={88} style={{ backgroundColor: britishRed, color: "white" }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
