import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Clock, Droplets, IndianRupee, TestTube } from "lucide-react"

interface VillageDashboardProps {
  district: string
  block: string
  village: string
}

const householdData = [
  { ward: "Ward 1", households: 45, tapConnections: 42, regularSupply: 38, userCharge: 85 },
  { ward: "Ward 2", households: 52, tapConnections: 48, regularSupply: 45, userCharge: 78 },
  { ward: "Ward 3", households: 38, tapConnections: 36, regularSupply: 34, userCharge: 92 },
  { ward: "Ward 4", households: 41, tapConnections: 39, regularSupply: 37, userCharge: 88 },
]

const waterQualityTests = [
  { date: "2024-07-01", ph: 7.2, turbidity: 1.8, chlorine: 0.5, result: "Pass" },
  { date: "2024-07-08", ph: 7.1, turbidity: 2.1, chlorine: 0.4, result: "Pass" },
  { date: "2024-07-15", ph: 6.9, turbidity: 1.9, chlorine: 0.6, result: "Pass" },
  { date: "2024-07-22", ph: 7.3, turbidity: 2.3, chlorine: 0.3, result: "Fail" },
  { date: "2024-07-29", ph: 7.0, turbidity: 1.7, chlorine: 0.5, result: "Pass" },
]

const recentActivities = [
  { date: "2024-07-28", activity: "Tank Cleaning", status: "Completed", personnel: "Ram Kumar" },
  { date: "2024-07-25", activity: "Pump Maintenance", status: "Completed", personnel: "Sita Devi" },
  { date: "2024-07-22", activity: "Pipeline Repair", status: "Completed", personnel: "Mohan Singh" },
  { date: "2024-07-20", activity: "Water Quality Test", status: "Failed", personnel: "VWSC Team" },
  { date: "2024-07-18", activity: "Meter Reading", status: "Completed", personnel: "Radha Kumari" },
]

const vwscMembers = [
  { name: "Sunita Devi", role: "President", contact: "9876543210", active: true },
  { name: "Rajesh Kumar", role: "Secretary", contact: "9876543211", active: true },
  { name: "Meera Singh", role: "Treasurer", contact: "9876543212", active: true },
  { name: "Amit Yadav", role: "Member", contact: "9876543213", active: false },
  { name: "Priya Kumari", role: "Member", contact: "9876543214", active: true },
]

export function VillageDashboard({ district, block, village }: VillageDashboardProps) {
  const totalHouseholds = householdData.reduce((sum, ward) => sum + ward.households, 0)
  const totalConnections = householdData.reduce((sum, ward) => sum + ward.tapConnections, 0)
  const totalRegularSupply = householdData.reduce((sum, ward) => sum + ward.regularSupply, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{village} Village Dashboard</h1>
          <p className="text-muted-foreground">
            Detailed water supply O&M data for {village} village in {block} block, {district} district
          </p>
        </div>
        <Badge variant="outline" className="text-sm">
          Population: 892
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tap Connections</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round((totalConnections / totalHouseholds) * 100)}%</div>
            <Progress value={(totalConnections / totalHouseholds) * 100} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {totalConnections} of {totalHouseholds} households
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">55 LPCD Regular</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round((totalRegularSupply / totalHouseholds) * 100)}%</div>
            <Progress value={(totalRegularSupply / totalHouseholds) * 100} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">{totalRegularSupply} households receiving</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Quality</CardTitle>
            <TestTube className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">80%</div>
            <Progress value={80} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">4 of 5 tests passed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Charge Collection</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86%</div>
            <Progress value={86} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">₹1.24L collected this month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="household" className="space-y-4">
        <TabsList>
          <TabsTrigger value="household">Household Data</TabsTrigger>
          <TabsTrigger value="quality">Water Quality</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="vwsc">VWSC Details</TabsTrigger>
        </TabsList>

        <TabsContent value="household" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ward-wise Household Data</CardTitle>
              <CardDescription>Detailed breakdown of water supply coverage by ward</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ward</TableHead>
                    <TableHead>Total HH</TableHead>
                    <TableHead>Tap Connections</TableHead>
                    <TableHead>Regular Supply (55 LPCD)</TableHead>
                    <TableHead>User Charge Collection</TableHead>
                    <TableHead>Coverage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {householdData.map((ward) => (
                    <TableRow key={ward.ward}>
                      <TableCell className="font-medium">{ward.ward}</TableCell>
                      <TableCell>{ward.households}</TableCell>
                      <TableCell>
                        {ward.tapConnections} ({Math.round((ward.tapConnections / ward.households) * 100)}%)
                      </TableCell>
                      <TableCell>
                        {ward.regularSupply} ({Math.round((ward.regularSupply / ward.households) * 100)}%)
                      </TableCell>
                      <TableCell>{ward.userCharge}%</TableCell>
                      <TableCell>
                        <Badge variant={ward.tapConnections / ward.households > 0.9 ? "default" : "secondary"}>
                          {ward.tapConnections / ward.households > 0.9 ? "Excellent" : "Good"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Service Interruptions</CardTitle>
                <CardDescription>Water supply interruption history</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Days Interrupted (This Month)</span>
                    <span className="text-sm font-medium">2 days</span>
                  </div>
                  <Progress value={93} />
                  <p className="text-xs text-muted-foreground">93% uptime</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Average Resumption Time</span>
                    <span className="text-sm font-medium">4.5 hours</span>
                  </div>
                  <Progress value={75} />
                  <p className="text-xs text-muted-foreground">Target: 6 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Summary</CardTitle>
                <CardDescription>Revenue and expenditure overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Monthly Revenue</span>
                    <span className="text-sm font-medium">₹1.24L</span>
                  </div>
                  <Progress value={86} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">O&M Expenditure</span>
                    <span className="text-sm font-medium">₹0.88L</span>
                  </div>
                  <Progress value={70} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Net Balance</span>
                    <span className="text-sm font-medium text-green-600">₹0.37L</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="quality" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Water Quality Test Results</CardTitle>
              <CardDescription>FTK (Field Test Kit) testing results with community involvement</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>pH Level</TableHead>
                    <TableHead>Turbidity (NTU)</TableHead>
                    <TableHead>Chlorine (mg/L)</TableHead>
                    <TableHead>Result</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {waterQualityTests.map((test, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{test.date}</TableCell>
                      <TableCell>{test.ph}</TableCell>
                      <TableCell>{test.turbidity}</TableCell>
                      <TableCell>{test.chlorine}</TableCell>
                      <TableCell>
                        <Badge variant={test.result === "Pass" ? "default" : "destructive"}>{test.result}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Quality Parameters</CardTitle>
                <CardDescription>Current water quality status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">pH Level</span>
                    <span className="text-sm font-medium">7.0 (Normal)</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Turbidity</span>
                    <span className="text-sm font-medium">1.7 NTU (Good)</span>
                  </div>
                  <Progress value={90} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Chlorine Residual</span>
                    <span className="text-sm font-medium">0.5 mg/L (Adequate)</span>
                  </div>
                  <Progress value={75} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Testing</CardTitle>
                <CardDescription>Community involvement in water quality monitoring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">FTK Tests by Community</span>
                    <span className="text-sm font-medium">12/15</span>
                  </div>
                  <Progress value={80} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Trained Community Members</span>
                    <span className="text-sm font-medium">8</span>
                  </div>
                  <Progress value={100} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Monthly Testing Frequency</span>
                    <span className="text-sm font-medium">Weekly</span>
                  </div>
                  <Progress value={100} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Maintenance Activities</CardTitle>
              <CardDescription>Latest maintenance and repair activities</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Activity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Personnel</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentActivities.map((activity, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{activity.date}</TableCell>
                      <TableCell>{activity.activity}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            activity.status === "Completed"
                              ? "default"
                              : activity.status === "In Progress"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {activity.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{activity.personnel}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Infrastructure Status</CardTitle>
                <CardDescription>Overall system health</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Water Tank</span>
                    <span className="text-sm font-medium">Good</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Distribution Network</span>
                    <span className="text-sm font-medium">Excellent</span>
                  </div>
                  <Progress value={92} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Pump System</span>
                    <span className="text-sm font-medium">Good</span>
                  </div>
                  <Progress value={88} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preventive Maintenance</CardTitle>
                <CardDescription>Scheduled maintenance compliance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Tank Cleaning</span>
                    <span className="text-sm font-medium">Monthly</span>
                  </div>
                  <Progress value={100} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Pump Servicing</span>
                    <span className="text-sm font-medium">Quarterly</span>
                  </div>
                  <Progress value={75} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Pipeline Inspection</span>
                    <span className="text-sm font-medium">Bi-annual</span>
                  </div>
                  <Progress value={90} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personnel Availability</CardTitle>
                <CardDescription>Trained staff for maintenance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Plumber</span>
                    <span className="text-sm font-medium">Available</span>
                  </div>
                  <Progress value={100} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Electrician</span>
                    <span className="text-sm font-medium">Available</span>
                  </div>
                  <Progress value={100} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Handpump Mechanic</span>
                    <span className="text-sm font-medium">Available</span>
                  </div>
                  <Progress value={100} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="vwsc" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>VWSC Committee Members</CardTitle>
              <CardDescription>Village Water & Sanitation Committee composition and contact details</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vwscMembers.map((member, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell>{member.contact}</TableCell>
                      <TableCell>
                        <Badge variant={member.active ? "default" : "secondary"}>
                          {member.active ? "Active" : "Inactive"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Meeting Records</CardTitle>
                <CardDescription>VWSC meeting frequency and attendance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Meetings This Year</span>
                    <span className="text-sm font-medium">10/12</span>
                  </div>
                  <Progress value={83} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Average Attendance</span>
                    <span className="text-sm font-medium">4.2/5</span>
                  </div>
                  <Progress value={84} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Action Items Completed</span>
                    <span className="text-sm font-medium">18/22</span>
                  </div>
                  <Progress value={82} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Record Maintenance</CardTitle>
                <CardDescription>Documentation and record keeping status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Complaint Logbook</span>
                    <span className="text-sm font-medium">Up-to-date</span>
                  </div>
                  <Progress value={95} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Financial Records</span>
                    <span className="text-sm font-medium">Current</span>
                  </div>
                  <Progress value={90} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Maintenance Log</span>
                    <span className="text-sm font-medium">Updated</span>
                  </div>
                  <Progress value={88} />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>User Satisfaction Survey</CardTitle>
              <CardDescription>Recent feedback from water service users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Water Quality</span>
                    <span className="text-sm font-medium">4.2/5</span>
                  </div>
                  <Progress value={84} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Service Reliability</span>
                    <span className="text-sm font-medium">4.0/5</span>
                  </div>
                  <Progress value={80} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Grievance Handling</span>
                    <span className="text-sm font-medium">3.8/5</span>
                  </div>
                  <Progress value={76} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Overall Satisfaction</span>
                    <span className="text-sm font-medium">4.1/5</span>
                  </div>
                  <Progress value={82} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
