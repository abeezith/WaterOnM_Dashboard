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
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { CheckCircle, Clock, Droplets, IndianRupee, AlertTriangle, Users, FileText, TestTube, Star } from "lucide-react"

// Comprehensive KPI data for Jharkhand state
const comprehensiveKPIs = {
  // Basic metrics
  totalPopulation: 33406061,
  ruralPopulation: 25055073,
  totalDistricts: 24,
  totalBlocks: 260,
  totalGPs: 4562,
  totalVillages: 32620,

  // Water supply coverage (realistic low values)
  tapConnections: 42.8, // % of households with tap connections
  regularSupply55LPCD: 38.5, // % receiving 55 LPCD regularly

  // Grievance management
  avgGrievanceTurnaround: 6.2, // days
  grievanceResolutionRate: 72.3, // %
  totalGrievancesMonth: 2450,
  resolvedGrievancesMonth: 1772,

  // Financial indicators (in Crores and Lakhs)
  totalOMExpenditure: 285, // Crores annually
  fcFundsMobilized: 185, // Crores from 15th FC
  fcFundsAllocated: 272, // Crores total allocation
  userChargeRate: 1, // Re 1 per person per month
  userChargeCollectionRate: 68.4, // % collection efficiency
  annualUserChargeTarget: 30.1, // Crores (population * 12 * 1 Re)
  annualUserChargeCollected: 20.6, // Crores actual collection

  // Service interruptions
  avgInterruptionDaysYear: 45, // days per year
  avgResumptionTime: 3.8, // days to resume supply
  totalInterruptionIncidents: 1250, // per month across state

  // Community participation
  vwscMeetingCompliance: 78.5, // % of VWSCs conducting regular meetings
  logbookUpdationFreq: 65.2, // % regular updates
  ftkTestingCommunity: 58.3, // % with community involvement

  // Personnel and infrastructure
  trainedPersonnelAvailability: 67.8, // % at GP level
  electricityBillPaymentTimely: 82.4, // % paid on time
  tankCleaningCompliance: 71.6, // % regular cleaning
  preventiveMaintenanceCompliance: 69.3, // % following checklist
  recordMaintenanceCompliance: 74.8, // % proper record keeping

  // User satisfaction
  userSatisfactionScore: 3.2, // out of 5
  feedbackSurveysCompleted: 15680, // number of surveys
}

// District-wise performance data
const districtKPIData = [
  {
    district: "Ranchi",
    tapConnections: 48,
    regularSupply: 42,
    grievanceTurnaround: 5.8,
    omExpenditure: 28.5,
    userChargeCollection: 72,
    vwscMeetings: 82,
    trainedPersonnel: 75,
    userSatisfaction: 3.4,
  },
  {
    district: "Dhanbad",
    tapConnections: 45,
    regularSupply: 38,
    grievanceTurnaround: 6.1,
    omExpenditure: 24.5,
    userChargeCollection: 68,
    vwscMeetings: 78,
    trainedPersonnel: 72,
    userSatisfaction: 3.2,
  },
  {
    district: "East Singhbhum",
    tapConnections: 52,
    regularSupply: 45,
    grievanceTurnaround: 5.2,
    omExpenditure: 32.0,
    userChargeCollection: 75,
    vwscMeetings: 85,
    trainedPersonnel: 78,
    userSatisfaction: 3.6,
  },
  {
    district: "Bokaro",
    tapConnections: 41,
    regularSupply: 35,
    grievanceTurnaround: 6.8,
    omExpenditure: 19.5,
    userChargeCollection: 65,
    vwscMeetings: 75,
    trainedPersonnel: 68,
    userSatisfaction: 3.0,
  },
  {
    district: "Hazaribagh",
    tapConnections: 38,
    regularSupply: 32,
    grievanceTurnaround: 7.2,
    omExpenditure: 16.5,
    userChargeCollection: 62,
    vwscMeetings: 72,
    trainedPersonnel: 65,
    userSatisfaction: 2.9,
  },
  {
    district: "Deoghar",
    tapConnections: 35,
    regularSupply: 28,
    grievanceTurnaround: 7.8,
    omExpenditure: 14.5,
    userChargeCollection: 58,
    vwscMeetings: 68,
    trainedPersonnel: 62,
    userSatisfaction: 2.7,
  },
]

// Monthly trend data
const monthlyTrendData = [
  {
    month: "Jan",
    grievances: 2250,
    resolved: 1620,
    interruptions: 95,
    resumptionTime: 4.2,
    expenditure: 23.5,
    userChargeCollection: 1.68,
  },
  {
    month: "Feb",
    grievances: 2180,
    resolved: 1680,
    interruptions: 82,
    resumptionTime: 3.8,
    expenditure: 24.2,
    userChargeCollection: 1.72,
  },
  {
    month: "Mar",
    grievances: 2420,
    resolved: 1850,
    interruptions: 108,
    resumptionTime: 4.1,
    expenditure: 25.8,
    userChargeCollection: 1.75,
  },
  {
    month: "Apr",
    grievances: 2650,
    resolved: 1980,
    interruptions: 125,
    resumptionTime: 3.9,
    expenditure: 27.5,
    userChargeCollection: 1.78,
  },
  {
    month: "May",
    grievances: 2880,
    resolved: 2150,
    interruptions: 142,
    resumptionTime: 4.5,
    expenditure: 29.0,
    userChargeCollection: 1.65,
  },
  {
    month: "Jun",
    grievances: 2720,
    resolved: 2050,
    interruptions: 118,
    resumptionTime: 3.6,
    expenditure: 28.5,
    userChargeCollection: 1.7,
  },
]

// KPI performance radar data
const kpiRadarData = [
  { indicator: "Tap Connections", value: 42.8, fullMark: 100 },
  { indicator: "55 LPCD Supply", value: 38.5, fullMark: 100 },
  { indicator: "Grievance Resolution", value: 72.3, fullMark: 100 },
  { indicator: "User Charge Collection", value: 68.4, fullMark: 100 },
  { indicator: "VWSC Meetings", value: 78.5, fullMark: 100 },
  { indicator: "Trained Personnel", value: 67.8, fullMark: 100 },
  { indicator: "Preventive Maintenance", value: 69.3, fullMark: 100 },
  { indicator: "User Satisfaction", value: 64, fullMark: 100 }, // 3.2/5 * 100
]

// Service quality distribution
const serviceQualityData = [
  { name: "Excellent (>80%)", value: 12, color: "#22c55e" },
  { name: "Good (60-80%)", value: 35, color: "#3b82f6" },
  { name: "Average (40-60%)", value: 38, color: "#f59e0b" },
  { name: "Poor (<40%)", value: 15, color: "#ef4444" },
]

export function ComprehensiveKPIDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Jharkhand Rural Water Supply O&M Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive KPI monitoring for operation and maintenance across {comprehensiveKPIs.totalDistricts}{" "}
            districts
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="text-sm">
            Rural Population: {(comprehensiveKPIs.ruralPopulation / 10000000).toFixed(1)}Cr
          </Badge>
          <Badge variant="outline" className="text-sm">
            Last Updated: {new Date().toLocaleDateString()}
          </Badge>
        </div>
      </div>

      {/* Primary KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tap Connections Coverage</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{comprehensiveKPIs.tapConnections}%</div>
            <Progress value={comprehensiveKPIs.tapConnections} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Target: 100% by 2024 (Current: Below 50%)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">55 LPCD Regular Supply</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{comprehensiveKPIs.regularSupply55LPCD}%</div>
            <Progress value={comprehensiveKPIs.regularSupply55LPCD} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Households receiving adequate water regularly</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Grievance Turnaround</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{comprehensiveKPIs.avgGrievanceTurnaround} days</div>
            <Progress value={100 - (comprehensiveKPIs.avgGrievanceTurnaround / 10) * 100} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Target: ≤5 days (Current: Above target)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total O&M Expenditure</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{comprehensiveKPIs.totalOMExpenditure}Cr</div>
            <Progress value={75} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Annual repair & maintenance spending</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">District Performance</TabsTrigger>
          <TabsTrigger value="community">Community Participation</TabsTrigger>
          <TabsTrigger value="satisfaction">User Satisfaction</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>KPI Performance Radar</CardTitle>
                <CardDescription>Overall performance across key indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={kpiRadarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="indicator" tick={{ fontSize: 10 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 8 }} />
                    <Radar name="Performance" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Quality Distribution</CardTitle>
                <CardDescription>Distribution of service quality across districts</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={serviceQualityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {serviceQualityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>District-wise Performance Comparison</CardTitle>
              <CardDescription>Key performance indicators across top 6 districts</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={districtKPIData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="district" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="tapConnections" fill="#3b82f6" name="Tap Connections %" />
                  <Bar dataKey="regularSupply" fill="#22c55e" name="55 LPCD Supply %" />
                  <Bar dataKey="userChargeCollection" fill="#f59e0b" name="User Charge Collection %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">VWSC Meetings</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{comprehensiveKPIs.vwscMeetingCompliance}%</div>
                <Progress value={comprehensiveKPIs.vwscMeetingCompliance} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">VWSCs conducting regular meetings</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">FTK Testing (Community)</CardTitle>
                <TestTube className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{comprehensiveKPIs.ftkTestingCommunity}%</div>
                <Progress value={comprehensiveKPIs.ftkTestingCommunity} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Field Test Kit usage with community involvement</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Log Book Updates</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{comprehensiveKPIs.logbookUpdationFreq}%</div>
                <Progress value={comprehensiveKPIs.logbookUpdationFreq} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Regular logbook updation frequency</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="satisfaction" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Overall Satisfaction</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{comprehensiveKPIs.userSatisfactionScore}/5</div>
                <Progress value={(comprehensiveKPIs.userSatisfactionScore / 5) * 100} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  Based on {comprehensiveKPIs.feedbackSurveysCompleted.toLocaleString()} surveys
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Water Quality Rating</CardTitle>
                <TestTube className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.1/5</div>
                <Progress value={62} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">User perception of water quality</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Service Reliability</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.0/5</div>
                <Progress value={60} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Consistency of water supply</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Grievance Handling</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.4/5</div>
                <Progress value={68} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Satisfaction with complaint resolution</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
