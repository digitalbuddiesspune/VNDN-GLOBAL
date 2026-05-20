import {
  IconBuilding,
  IconInbox,
  IconRevenue,
  IconUsers,
} from "../components/icons";
import { StatCard } from "../components/dashboard/StatCard";

const stats = [
  {
    title: "Total Users",
    value: "12,847",
    change: "12.5% from last month",
    trend: "up",
    icon: IconUsers,
    iconBg: "bg-violet-500",
    sparkColor: "#8b5cf6",
    sparkPoints: [12, 18, 14, 22, 20, 28, 24, 32, 30, 36],
  },
  {
    title: "Active Listings",
    value: "80",
    change: "8.2% from last month",
    trend: "up",
    icon: IconBuilding,
    iconBg: "bg-emerald-500",
    sparkColor: "#10b981",
    sparkPoints: [20, 16, 22, 18, 26, 24, 30, 28, 34, 32],
  },
  {
    title: "New Inquiries",
    value: "156",
    change: "3.1% from last month",
    trend: "down",
    icon: IconInbox,
    iconBg: "bg-orange-500",
    sparkColor: "#f97316",
    sparkPoints: [30, 28, 32, 26, 24, 28, 22, 20, 18, 16],
  },
  {
    title: "Revenue",
    value: "$48.2K",
    change: "15.3% from last month",
    trend: "up",
    icon: IconRevenue,
    iconBg: "bg-blue-500",
    sparkColor: "#3b82f6",
    sparkPoints: [10, 14, 12, 18, 16, 22, 20, 28, 26, 34],
  },
];

const topProperties = [
  { name: "Palm Jumeirah Villa", sales: 24, revenue: "$2.4M", color: "bg-violet-100 text-violet-600" },
  { name: "Downtown Penthouse", sales: 18, revenue: "$1.8M", color: "bg-blue-100 text-blue-600" },
  { name: "Dubai Marina Apt", sales: 15, revenue: "$1.2M", color: "bg-emerald-100 text-emerald-600" },
  { name: "Business Bay Tower", sales: 12, revenue: "$980K", color: "bg-orange-100 text-orange-600" },
  { name: "DIFC Residence", sales: 9, revenue: "$720K", color: "bg-pink-100 text-pink-600" },
];

const recentInquiries = [
  { id: "#VN-2847", name: "Sarah Mitchell", amount: "$2,450", status: "Delivered", statusColor: "bg-emerald-100 text-emerald-700" },
  { id: "#VN-2846", name: "James Wilson", amount: "$189", status: "Processing", statusColor: "bg-orange-100 text-orange-700" },
  { id: "#VN-2845", name: "Emma Davis", amount: "$356", status: "Shipped", statusColor: "bg-blue-100 text-blue-700" },
  { id: "#VN-2844", name: "Michael Brown", amount: "$124", status: "Cancelled", statusColor: "bg-red-100 text-red-700" },
  { id: "#VN-2843", name: "Lisa Anderson", amount: "$567", status: "Delivered", statusColor: "bg-emerald-100 text-emerald-700" },
];

const userGrowth = [40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const trafficSources = [
  { label: "Direct", value: 65, color: "#6366f1" },
  { label: "Organic Search", value: 20, color: "#22c55e" },
  { label: "Social Media", value: 10, color: "#f97316" },
  { label: "Referral", value: 5, color: "#ec4899" },
];

function SalesChart() {
  const revenuePoints = "10,35 25,28 40,32 55,20 70,38 85,25 100,30";
  const ordersPoints = "10,45 25,40 40,42 55,50 70,35 85,48 100,40";

  return (
    <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm lg:col-span-2">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-900">Sales Overview</h2>
        <select className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600 outline-none">
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>
      <div className="flex gap-4 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-indigo-500" /> Revenue
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Inquiries
        </span>
      </div>
      <svg viewBox="0 0 100 50" className="mt-4 h-48 w-full">
        {[0, 25, 50].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#e2e8f0" strokeWidth="0.5" />
        ))}
        <polyline fill="none" stroke="#6366f1" strokeWidth="1.5" points={revenuePoints} />
        <polyline fill="none" stroke="#22c55e" strokeWidth="1.5" points={ordersPoints} />
      </svg>
      <div className="mt-2 flex justify-between text-xs text-slate-400">
        {["Apr 6", "Apr 13", "Apr 20", "Apr 27", "May 4", "May 11", "May 18"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
  );
}

function DonutChart() {
  let offset = 0;
  const gradient = trafficSources
    .map(({ value, color }) => {
      const start = offset;
      offset += value;
      return `${color} ${start}% ${offset}%`;
    })
    .join(", ");

  return (
    <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
      <h2 className="mb-6 text-base font-semibold text-slate-900">Traffic Source</h2>
      <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full" style={{ background: `conic-gradient(${gradient})` }}>
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-center">
          <span className="text-xs font-medium text-slate-500">Sources</span>
        </div>
      </div>
      <ul className="mt-6 space-y-2">
        {trafficSources.map(({ label, value, color }) => (
          <li key={label} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-slate-600">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
              {label}
            </span>
            <span className="font-medium text-slate-900">{value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <SalesChart />

        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-900">Top Properties</h2>
            <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
              View All
            </button>
          </div>
          <ul className="space-y-4">
            {topProperties.map((item) => (
              <li key={item.name} className="flex items-center gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${item.color}`}>
                  {item.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.sales} inquiries</p>
                </div>
                <p className="text-sm font-semibold text-slate-900">{item.revenue}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm lg:col-span-1">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-900">Recent Inquiries</h2>
            <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
              View All
            </button>
          </div>
          <ul className="space-y-4">
            {recentInquiries.map((order) => (
              <li key={order.id} className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                  {order.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-900">{order.name}</p>
                  <p className="text-xs text-slate-500">{order.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-900">{order.amount}</p>
                  <span className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${order.statusColor}`}>
                    {order.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-900">User Growth</h2>
            <select className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600 outline-none">
              <option>This Year</option>
            </select>
          </div>
          <div className="flex h-44 items-end justify-between gap-1.5">
            {userGrowth.map((h, i) => (
              <div key={months[i]} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-md bg-indigo-500/90 transition-all hover:bg-indigo-600"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[10px] text-slate-400">{months[i]}</span>
              </div>
            ))}
          </div>
        </div>

        <DonutChart />
      </div>
    </div>
  );
}
