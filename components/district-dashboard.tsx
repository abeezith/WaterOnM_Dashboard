import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { CheckCircle, Clock, Droplets, IndianRupee, AlertTriangle } from "lucide-react"

interface DistrictDashboardProps {
  district: string
}

const getDistrictData = (district: string) => {
  const baseData = {
    Ranchi: {
      blocks: 12,
      gps: 385,
      villages: 2456,
      population: 2914253,
      tapConnections: 48, // Reduced to below 50%
      waterRegularity: 42, // 55 LPCD regular supply
      grievanceResolution: 78,
      avgTurnaround: 5.8,
      omExpenditure: 28.5,
      userChargeCollection: 72,
      userChargeRate: 1,
      vwscMeetings: 82,
      ftkTesting: 68,
      trainedPersonnel: 75,
      electricityPayment: 85,
      tankCleaning: 78,
      preventiveMaintenance: 72,
      logbookUpdation: 69,
      recordMaintenance: 76,
      waterInterruptions: 38,
      resumptionTime: 3.2,
      fcFunds: 18.5,
    },
    Dhanbad: {
      blocks: 8,
      gps: 198,
      villages: 1456,
      population: 2684487,
      tapConnections: 45,
      waterRegularity: 38,
      grievanceResolution: 75,
      avgTurnaround: 6.1,
      omExpenditure: 24.5,
      userChargeCollection: 68,
      userChargeRate: 1,
      vwscMeetings: 78,
      ftkTesting: 65,
      trainedPersonnel: 72,
      electricityPayment: 82,
      tankCleaning: 75,
      preventiveMaintenance: 68,
      logbookUpdation: 65,
      recordMaintenance: 73,
      waterInterruptions: 42,
      resumptionTime: 3.8,
      fcFunds: 16.2,
    },
  }

  return baseData[district as keyof typeof baseData] || baseData["Ranchi"]
}

const blockPerformance = [
  { name: "Angara", tapConnections: 95, waterRegularity: 88, grievances: 45, resolved: 38 },
  { name: "Bundu", tapConnections: 90, waterRegularity: 85, grievances: 52, resolved: 42 },
  { name: "Chanho", tapConnections: 88, waterRegularity: 82, grievances: 38, resolved: 32 },
  { name: "Kanke", tapConnections: 92, waterRegularity: 86, grievances: 41, resolved: 35 },
  { name: "Lapung", tapConnections: 85, waterRegularity: 80, grievances: 48, resolved: 38 },
  { name: "Mandar", tapConnections: 87, waterRegularity: 83, grievances: 35, resolved: 30 },
]

const grievanceData = [
  { category: "Water Quality", count: 145, resolved: 112, avgDays: 3.2 },
  { category: "Supply Interruption", count: 89, resolved: 78, avgDays: 2.8 },
  { category: "Pressure Issues", count: 67, resolved: 58, avgDays: 4.1 },
  { category: "Billing", count: 34, resolved: 32, avgDays: 2.1 },
  { category: "Infrastructure", count: 28, resolved: 22, avgDays: 6.5 },
]

const monthlyData = [
  { month: "Jan", interruptions: 12, resumptionDays: 2.3, expenditure: 2.35 },
  { month: "Feb", interruptions: 8, resumptionDays: 1.8, expenditure: 2.42 },
  { month: "Mar", interruptions: 15, resumptionDays: 2.8, expenditure: 2.58 },
  { month: "Apr", interruptions: 11, resumptionDays: 2.1, expenditure: 2.75 },
  { month: "May", interruptions: 18, resumptionDays: 3.2, expenditure: 2.9 },
  { month: "Jun", interruptions: 14, resumptionDays: 2.5, expenditure: 2.85 },
]

export function DistrictDashboard({ district }: DistrictDashboardProps) {
  const districtData = getDistrictData(district)

  const britishColors = {
    blue: "#00247d",
    red: "#cf142b",
    green: "#008000",
    yellow: "#ffb833",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{district} District Dashboard</h1>
          <p className="text-muted-foreground">
            Water supply O&M performance across {districtData.blocks} blocks and {districtData.gps} gram panchayats
          </p>
        </div>
        <Badge variant="outline" className="text-sm text-white bg-gray-500 border-none">
          Population: {(districtData.population / 1000000).toFixed(1)}M
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tap Connections</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{districtData.tapConnections}%</div>
            <Progress value={districtData.tapConnections} className="mt-2" color={britishColors.blue} />
            <p className="text-xs text-muted-foreground mt-2">Target: 100% by 2024</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Regularity</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{districtData.waterRegularity}%</div>
            <Progress value={districtData.waterRegularity} className="mt-2" color={britishColors.green} />
            <p className="text-xs text-muted-foreground mt-2">55 LPCD regular supply</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Grievance Resolution</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{districtData.grievanceResolution}%</div>
            <Progress value={districtData.grievanceResolution} className="mt-2" color={britishColors.yellow} />
            <p className="text-xs text-muted-foreground mt-2">Avg. 3.8 days resolution</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Charge Collection</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{districtData.userChargeCollection}%</div>
            <Progress value={districtData.userChargeCollection} className="mt-2" color={britishColors.red} />
            <p className="text-xs text-muted-foreground mt-2">
              ₹{(districtData.omExpenditure * 0.15).toFixed(1)}Cr collected
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Turnaround Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{districtData.avgTurnaround} days</div>
            <Progress
              value={100 - (districtData.avgTurnaround / 10) * 100}
              className="mt-2"
              color={britishColors.blue}
            />
            <p className="text-xs text-muted-foreground mt-2">Target: ≤5 days</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Interruptions</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{districtData.waterInterruptions}</div>
            <Progress
              value={100 - (districtData.waterInterruptions / 100) * 100}
              className="mt-2"
              color={britishColors.red}
            />
            <p className="text-xs text-muted-foreground mt-2">Days interrupted annually</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">15th FC Funds</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{districtData.fcFunds}Cr</div>
            <Progress value={68} className="mt-2" color={britishColors.green} />
            <p className="text-xs text-muted-foreground mt-2">Mobilized for O&M</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resumption Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{districtData.resumptionTime} days</div>
            <Progress
              value={100 - (districtData.resumptionTime / 7) * 100}
              className="mt-2"
              color={britishColors.yellow}
            />
            <p className="text-xs text-muted-foreground mt-2">Avg time to resume supply</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="blocks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="blocks">Block Performance</TabsTrigger>
          <TabsTrigger value="grievances">Grievance Analysis</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="community">Community Participation</TabsTrigger>
        </TabsList>

        <TabsContent value="blocks" className="space-y-4">
          <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
            <CardHeader>
              <CardTitle>Block-wise Performance</CardTitle>
              <CardDescription>Performance metrics across all blocks in {district} district</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={blockPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="tapConnections" fill={britishColors.blue} name="Tap Connections %" />
                  <Bar dataKey="waterRegularity" fill={britishColors.green} name="Water Regularity %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grievances" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
              <CardHeader>
                <CardTitle>Grievance Categories</CardTitle>
                <CardDescription>Breakdown by complaint type</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Category</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Resolved</TableHead>
                      <TableHead>Avg Days</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {grievanceData.map((item) => (
                      <TableRow key={item.category}>
                        <TableCell className="font-medium">{item.category}</TableCell>
                        <TableCell>{item.count}</TableCell>
                        <TableCell>{item.resolved}</TableCell>
                        <TableCell>{item.avgDays}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
              <CardHeader>
                <CardTitle>Monthly Interruptions</CardTitle>
                <CardDescription>Water supply interruption trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="interruptions" stroke={britishColors.red} name="Interruptions" />
                    <Line
                      type="monotone"
                      dataKey="resumptionDays"
                      stroke={britishColors.yellow}
                      name="Avg Resumption Days"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
              <CardHeader>
                <CardTitle>Preventive Maintenance</CardTitle>
                <CardDescription>Scheduled maintenance compliance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <Progress value={78} className="mt-2" color={britishColors.green} />
                <p className="text-xs text-muted-foreground mt-2">Checklist compliance rate</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
              <CardHeader>
                <CardTitle>Tank Cleaning</CardTitle>
                <CardDescription>Water storage tank maintenance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <Progress value={85} className="mt-2" color={britishColors.blue} />
                <p className="text-xs text-muted-foreground mt-2">Tanks cleaned on schedule</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
              <CardHeader>
                <CardTitle>Electricity Bills</CardTitle>
                <CardDescription>Timely payment status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <Progress value={92} className="mt-2" color={britishColors.yellow} />
                <p className="text-xs text-muted-foreground mt-2">Bills paid on time</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
            <CardHeader>
              <CardTitle>Monthly Maintenance Expenditure</CardTitle>
              <CardDescription>Repair and maintenance costs over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`₹${Number(value)}Cr`, "Expenditure"]} />
                  <Bar dataKey="expenditure" fill={britishColors.blue} name="Monthly Expenditure" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
              <CardHeader>
                <CardTitle>VWSC Meetings</CardTitle>
                <CardDescription>Village Water & Sanitation Committee</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{districtData.vwscMeetings}%</div>
                <Progress value={districtData.vwscMeetings} className="mt-2" color={britishColors.green} />
                <p className="text-xs text-muted-foreground mt-2">Monthly meetings conducted</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
              <CardHeader>
                <CardTitle>FTK Testing</CardTitle>
                <CardDescription>Field Test Kit with community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{districtData.ftkTesting}%</div>
                <Progress value={districtData.ftkTesting} className="mt-2" color={britishColors.red} />
                <p className="text-xs text-muted-foreground mt-2">Community involvement</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
              <CardHeader>
                <CardTitle>Trained Personnel</CardTitle>
                <CardDescription>Plumbers, mechanics, electricians</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{districtData.trainedPersonnel}%</div>
                <Progress value={districtData.trainedPersonnel} className="mt-2" color={britishColors.yellow} />
                <p className="text-xs text-muted-foreground mt-2">Available at GP level</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
              <CardHeader>
                <CardTitle>Electricity Payment</CardTitle>
                <CardDescription>Timely bill payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{districtData.electricityPayment}%</div>
                <Progress value={districtData.electricityPayment} className="mt-2" color={britishColors.blue} />
                <p className="text-xs text-muted-foreground mt-2">Bills paid on time</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
              <CardHeader>
                <CardTitle>Tank Cleaning</CardTitle>
                <CardDescription>Water storage maintenance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{districtData.tankCleaning}%</div>
                <Progress value={districtData.tankCleaning} className="mt-2" color={britishColors.green} />
                <p className="text-xs text-muted-foreground mt-2">Regular cleaning schedule</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
              <CardHeader>
                <CardTitle>Preventive Maintenance</CardTitle>
                <CardDescription>Checklist compliance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{districtData.preventiveMaintenance}%</div>
                <Progress value={districtData.preventiveMaintenance} className="mt-2" color={britishColors.red} />
                <p className="text-xs text-muted-foreground mt-2">Following checklist</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
              <CardHeader>
                <CardTitle>Log Book Updates</CardTitle>
                <CardDescription>Record updation frequency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{districtData.logbookUpdation}%</div>
                <Progress value={districtData.logbookUpdation} className="mt-2" color={britishColors.yellow} />
                <p className="text-xs text-muted-foreground mt-2">Regular updates</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
              <CardHeader>
                <CardTitle>Record Maintenance</CardTitle>
                <CardDescription>O&M records at GP/VWSC</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{districtData.recordMaintenance}%</div>
                <Progress value={districtData.recordMaintenance} className="mt-2" color={britishColors.blue} />
                <p className="text-xs text-muted-foreground mt-2">Proper documentation</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
            <CardHeader>
              <CardTitle>User Satisfaction Survey</CardTitle>
              <CardDescription>Feedback from water service users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Water Quality Satisfaction</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <Progress value={78} color={britishColors.green} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Service Reliability</span>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                  <Progress value={82} color={britishColors.red} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Grievance Handling</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <Progress value={75} color={britishColors.yellow} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Overall Satisfaction</span>
                    <span className="text-sm font-medium">79%</span>
                  </div>
                  <Progress value={79} color={britishColors.blue} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
