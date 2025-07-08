import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { CheckCircle, Clock, Droplets, IndianRupee, AlertTriangle } from "lucide-react"

const stateMetrics = {
  totalDistricts: 24,
  totalBlocks: 260,
  totalGPs: 4562,
  totalVillages: 32620,
  populationServed: 28500000,
  tapConnections: 42.8, // Reduced to below 50%
  waterSupplyRegularity: 38.5, // Households receiving 55 LPCD regularly
  grievanceResolution: 72.3,
  avgGrievanceTurnaround: 6.2, // days
  omExpenditure: 285, // Crores
  userChargeCollection: 68.4,
  userChargeRate: 1, // Re 1 per person per month
  fcFundsMobilized: 185, // Crores from 15th FC
  waterInterruptionDays: 45, // average days per year
  resumptionTime: 3.8, // average days to resume
  vwscMeetings: 78.5, // percentage compliance
  logbookUpdation: 65.2, // percentage regular updates
  ftkTesting: 58.3, // percentage with community involvement
  trainedPersonnel: 67.8, // percentage availability at GP level
  electricityBillPayment: 82.4, // percentage timely payment
  tankCleaning: 71.6, // percentage regular cleaning
  preventiveMaintenance: 69.3, // percentage following checklist
  recordMaintenance: 74.8, // percentage proper record keeping
  userSatisfaction: 3.2, // out of 5
}

const districtPerformance = [
  {
    name: "Ranchi",
    tapConnections: 48,
    waterRegularity: 42,
    grievanceResolution: 78,
    omExpenditure: 28.5,
    userChargeCollection: 72,
  },
  {
    name: "Dhanbad",
    tapConnections: 45,
    waterRegularity: 38,
    grievanceResolution: 75,
    omExpenditure: 24.5,
    userChargeCollection: 68,
  },
  {
    name: "East Singhbhum",
    tapConnections: 52,
    waterRegularity: 45,
    grievanceResolution: 80,
    omExpenditure: 32.0,
    userChargeCollection: 75,
  },
  {
    name: "Bokaro",
    tapConnections: 41,
    waterRegularity: 35,
    grievanceResolution: 70,
    omExpenditure: 19.5,
    userChargeCollection: 65,
  },
  {
    name: "Hazaribagh",
    tapConnections: 38,
    waterRegularity: 32,
    grievanceResolution: 68,
    omExpenditure: 16.5,
    userChargeCollection: 62,
  },
  {
    name: "Deoghar",
    tapConnections: 35,
    waterRegularity: 28,
    grievanceResolution: 65,
    omExpenditure: 14.5,
    userChargeCollection: 58,
  },
]

const monthlyTrends = [
  { month: "Jan", grievances: 1250, resolved: 890, waterInterruptions: 45, expenditure: 23.5 },
  { month: "Feb", grievances: 1180, resolved: 920, waterInterruptions: 38, expenditure: 24.2 },
  { month: "Mar", grievances: 1320, resolved: 980, waterInterruptions: 52, expenditure: 25.8 },
  { month: "Apr", grievances: 1450, resolved: 1050, waterInterruptions: 48, expenditure: 27.5 },
  { month: "May", grievances: 1680, resolved: 1180, waterInterruptions: 65, expenditure: 29.0 },
  { month: "Jun", grievances: 1520, resolved: 1100, waterInterruptions: 58, expenditure: 28.5 },
]

const serviceDistribution = [
  { name: "Excellent (>90%)", value: 15, color: "#22c55e" },
  { name: "Good (70-90%)", value: 45, color: "#3b82f6" },
  { name: "Average (50-70%)", value: 30, color: "#f59e0b" },
  { name: "Poor (<50%)", value: 10, color: "#ef4444" },
]

export function StateDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Jharkhand State Water O&M Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive overview of water supply operation and maintenance across the state
          </p>
        </div>
        <Badge variant="outline" className="text-sm">
          Real-time Data
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
            <div className="text-2xl font-bold">{stateMetrics.tapConnections}%</div>
            <Progress value={stateMetrics.tapConnections} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+2.3% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Supply Regularity</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stateMetrics.waterSupplyRegularity}%</div>
            <Progress value={stateMetrics.waterSupplyRegularity} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">55 LPCD target achievement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Grievance Resolution</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stateMetrics.grievanceResolution}%</div>
            <Progress value={stateMetrics.grievanceResolution} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Avg. 4.2 days turnaround</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">O&M Expenditure</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{stateMetrics.omExpenditure}Cr</div>
            <Progress value={75} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">75% of allocated budget utilized</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Grievance Turnaround</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stateMetrics.avgGrievanceTurnaround} days</div>
            <Progress value={100 - (stateMetrics.avgGrievanceTurnaround / 10) * 100} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Target: ≤5 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">15th FC Funds Mobilized</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{stateMetrics.fcFundsMobilized}Cr</div>
            <Progress value={68} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">68% of ₹272Cr allocated</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Interruption Days</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stateMetrics.waterInterruptionDays}</div>
            <Progress value={100 - (stateMetrics.waterInterruptionDays / 365) * 100} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Avg per year across state</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Charge Collection</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stateMetrics.userChargeCollection}%</div>
            <Progress value={stateMetrics.userChargeCollection} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              ₹
              {(
                (stateMetrics.populationServed * stateMetrics.userChargeRate * 12 * stateMetrics.userChargeCollection) /
                10000000
              ).toFixed(1)}
              Cr annually
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">District Performance</TabsTrigger>
          <TabsTrigger value="trends">Monthly Trends</TabsTrigger>
          <TabsTrigger value="service">Service Quality</TabsTrigger>
          <TabsTrigger value="financial">Financial Overview</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Districts</CardTitle>
              <CardDescription>District-wise performance across key O&M indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={districtPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="tapConnections" fill="#3b82f6" name="Tap Connections %" />
                  <Bar dataKey="waterRegularity" fill="#22c55e" name="Water Regularity %" />
                  <Bar dataKey="grievanceResolution" fill="#f59e0b" name="Grievance Resolution %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Grievance Trends</CardTitle>
                <CardDescription>Monthly grievance registration and resolution</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="grievances" stroke="#ef4444" name="Registered" />
                    <Line type="monotone" dataKey="resolved" stroke="#22c55e" name="Resolved" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Water Supply Interruptions</CardTitle>
                <CardDescription>Monthly interruption incidents across state</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="waterInterruptions" fill="#f59e0b" name="Interruptions" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="service" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Service Quality Distribution</CardTitle>
                <CardDescription>Distribution of service quality across districts</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={serviceDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {serviceDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Service Indicators</CardTitle>
                <CardDescription>State-wide service delivery metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">VWSC Meetings Conducted</span>
                    <span className="text-sm font-medium">{stateMetrics.vwscMeetings}%</span>
                  </div>
                  <Progress value={stateMetrics.vwscMeetings} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">FTK Testing (Community Involvement)</span>
                    <span className="text-sm font-medium">{stateMetrics.ftkTesting}%</span>
                  </div>
                  <Progress value={stateMetrics.ftkTesting} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Trained Personnel at GP Level</span>
                    <span className="text-sm font-medium">{stateMetrics.trainedPersonnel}%</span>
                  </div>
                  <Progress value={stateMetrics.trainedPersonnel} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Timely Electricity Bill Payment</span>
                    <span className="text-sm font-medium">{stateMetrics.electricityBillPayment}%</span>
                  </div>
                  <Progress value={stateMetrics.electricityBillPayment} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Tank Cleaning Compliance</span>
                    <span className="text-sm font-medium">{stateMetrics.tankCleaning}%</span>
                  </div>
                  <Progress value={stateMetrics.tankCleaning} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Preventive Maintenance Checklist</span>
                    <span className="text-sm font-medium">{stateMetrics.preventiveMaintenance}%</span>
                  </div>
                  <Progress value={stateMetrics.preventiveMaintenance} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Log Book Updation Frequency</span>
                    <span className="text-sm font-medium">{stateMetrics.logbookUpdation}%</span>
                  </div>
                  <Progress value={stateMetrics.logbookUpdation} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">O&M Record Maintenance</span>
                    <span className="text-sm font-medium">{stateMetrics.recordMaintenance}%</span>
                  </div>
                  <Progress value={stateMetrics.recordMaintenance} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">User Satisfaction Score</span>
                    <span className="text-sm font-medium">{stateMetrics.userSatisfaction}/5</span>
                  </div>
                  <Progress value={(stateMetrics.userSatisfaction / 5) * 100} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>15th FC Funds</CardTitle>
                <CardDescription>Finance Commission allocation utilization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹185Cr</div>
                <Progress value={68} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">68% utilized of ₹272Cr allocated</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Charge Collection</CardTitle>
                <CardDescription>Revenue from user charges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stateMetrics.userChargeCollection}%</div>
                <Progress value={stateMetrics.userChargeCollection} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">₹48.5Cr collected this year</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Maintenance Expenditure</CardTitle>
                <CardDescription>Repair and maintenance costs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹{stateMetrics.omExpenditure}Cr</div>
                <Progress value={75} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">75% of annual budget spent</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Expenditure Trend</CardTitle>
              <CardDescription>O&M expenditure pattern across months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`₹${Number(value)}Cr`, "Expenditure"]} />
                  <Line type="monotone" dataKey="expenditure" stroke="#3b82f6" name="Monthly Expenditure" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
