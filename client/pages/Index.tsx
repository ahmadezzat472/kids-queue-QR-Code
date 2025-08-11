import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  QrCode,
  Users,
  TrendingUp,
  Settings,
  Bell,
  Search,
  Plus,
  MoreHorizontal,
  Download,
  Eye,
  Trash2,
  Copy,
  X,
  UserPlus,
  Home,
  SquarePen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function Index() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  const [showQRModal, setShowQRModal] = useState(false);
  const [showQROptionsModal, setShowQROptionsModal] = useState(false);
  const [selectedQRType, setSelectedQRType] = useState("");

  // Sample data
  const stats = [
    {
      title: "Total Campaigns",
      value: "3",
      change: "+12%",
      color: "bg-blue-500",
    },
    {
      title: "Total Scans",
      value: "479",
      change: "+8%",
      color: "bg-green-500",
    },
    {
      title: "Avg per Campaign",
      value: "160",
      change: "+23%",
      color: "bg-purple-500",
    },
    {
      title: "This Month",
      value: "+143",
      change: "+18%",
      color: "bg-orange-500",
    },
  ];

  const campaigns = [
    {
      id: 1,
      name: "Fall Enrollment Campaign",
      subTitle: "Preschool",
      status: "Enabled",
      tags: ["enrollment", "fall2024"],
      created: "2024-01-15",
      scans: 234,
      preview: "qr-placeholder",
    },
    {
      id: 2,
      name: "Open House Event",
      status: "Disabled",
      tags: ["event", "tours"],
      created: "2024-01-10",
      scans: 89,
      preview: "qr-placeholder",
    },
    {
      id: 3,
      name: "Infant Room Waitlist",
      subTitle: "Infant Room",

      status: "Enabled",
      tags: ["waitlist", "infant"],
      created: "2024-01-08",
      scans: 156,
      preview: "qr-placeholder",
    },
  ];

  const navigation = [
    { name: "Overview", icon: Home, current: true },
    { name: "QR Codes", icon: QrCode, current: false },
    { name: "Analytics", icon: BarChart3, current: false },
    { name: "Waitlist", icon: UserPlus, current: false },
    { name: "Classrooms", icon: Users, current: false },
    { name: "Team Access", icon: Users, current: false },
    { name: "Settings", icon: Settings, current: false },
  ];

  const openQRModal = (type: string) => {
    setSelectedQRType(type);
    setShowQROptionsModal(false);
    setShowQRModal(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="relative z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-sidebar px-6 pb-4">
            <div className="pt-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h1 className="text-sm font-semibold text-sidebar-foreground">
                      KidsQueue
                    </h1>
                    <p className="text-xs text-sidebar-foreground/70">
                      Admin Dashboard
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 ml-0.5 mb-6">
                  Welcome, <span className="font-bold">Test Admin</span>
                </p>
              </div>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href="#"
                          className={cn(
                            item.current
                              ? "bg-sidebar-accent text-sidebar-accent-foreground"
                              : "text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium",
                          )}
                          onClick={() => setSidebarOpen(false)}
                        >
                          <item.icon
                            className={cn(
                              item.current
                                ? "text-sidebar-accent-foreground"
                                : "text-sidebar-foreground/70 group-hover:text-sidebar-accent-foreground",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <div className="bg-sidebar-accent/50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-sidebar-foreground">
                      MY CENTER (1)
                    </h3>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-sidebar-foreground/70">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        Bright Start Academy at Falls Point
                      </div>
                      <button className="text-xs text-primary hover:text-primary/80 flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        View Center Page
                      </button>
                    </div>
                  </div>
                </li>
                <li className="mt-4">
                  <div className="bg-sidebar-accent/30 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-sidebar-foreground">
                      QUICK STATS
                    </h3>
                    <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                      <div>
                        <div className="text-lg font-semibold text-sidebar-foreground">
                          6
                        </div>
                        <div className="text-xs text-sidebar-foreground/70">
                          Waitlist
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-sidebar-foreground">
                          42
                        </div>
                        <div className="text-xs text-sidebar-foreground/70">
                          Enrolled
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-sidebar-foreground">
                          8h
                        </div>
                        <div className="text-xs text-sidebar-foreground/70">
                          Avg Response
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-sidebar-foreground">
                          4.5
                        </div>
                        <div className="text-xs text-sidebar-foreground/70">
                          Rating
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col custom-scrollbar">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-sidebar px-6 pb-4">
          <div className="pt-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-sm font-semibold text-sidebar-foreground">
                    KidsQueue
                  </h1>
                  <p className="text-xs text-sidebar-foreground/70">
                    Admin Dashboard
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 ml-0.5">
                Welcome, <span className="font-bold">Test Admin</span>
              </p>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-5">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href="#"
                        className={cn(
                          item.current
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium",
                        )}
                      >
                        <item.icon
                          className={cn(
                            item.current
                              ? "text-sidebar-accent-foreground"
                              : "text-sidebar-foreground/70 group-hover:text-sidebar-accent-foreground",
                            "h-6 w-6 shrink-0",
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <div className="bg-sidebar-accent/50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-sidebar-foreground">
                    MY CENTER (1)
                  </h3>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-sidebar-foreground/70">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      Bright Start Academy at Falls Point
                    </div>
                    <button className="text-xs text-primary hover:text-primary/80 flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      View Center Page
                    </button>
                  </div>
                </div>
              </li>
              <li className="mt-4">
                <div className="bg-sidebar-accent/30 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-sidebar-foreground">
                    QUICK STATS
                  </h3>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                    <div>
                      <div className="text-lg font-semibold text-sidebar-foreground">
                        6
                      </div>
                      <div className="text-xs text-sidebar-foreground/70">
                        Waitlist
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-sidebar-foreground">
                        42
                      </div>
                      <div className="text-xs text-sidebar-foreground/70">
                        Enrolled
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-sidebar-foreground">
                        8h
                      </div>
                      <div className="text-xs text-sidebar-foreground/70">
                        Avg Response
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-sidebar-foreground">
                        4.5
                      </div>
                      <div className="text-xs text-sidebar-foreground/70">
                        Rating
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <h1 className="text-xl lg:text-2xl font-bold text-slate-900 truncate">
                School Administration Dashboard
              </h1>
              <p className="text-slate-600 hidden sm:block">
                Manage enrollment, QR codes, and analytics
              </p>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input placeholder="Search..." className="pl-10 w-48 lg:w-64" />
              </div>

              <Button size="icon" variant="outline" className="md:hidden">
                <Search className="w-4 h-4" />
              </Button>

              <Button size="icon" variant="outline">
                <Bell className="w-4 h-4" />
              </Button>

              <Avatar>
                <AvatarFallback className="bg-dashboard-primary text-white">
                  IJ
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="p-4 lg:p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600 mb-1">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold text-slate-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-green-500 font-medium">
                        {stat.change}
                      </p>
                    </div>
                    <div
                      className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}
                    >
                      {index === 0 && (
                        <BarChart3 className="w-6 h-6 text-white" />
                      )}
                      {index === 1 && <QrCode className="w-6 h-6 text-white" />}
                      {index === 2 && (
                        <TrendingUp className="w-6 h-6 text-white" />
                      )}
                      {index === 3 && <Users className="w-6 h-6 text-white" />}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* QR Code Campaigns */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-xl">QR Code Campaigns</CardTitle>
                  <p className="text-slate-600 mt-1">
                    Create and manage QR codes for enrollment, tours, and
                    waitlists
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hidden sm:flex"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View QR Analytics
                  </Button>
                  <Button
                    onClick={() => setShowQROptionsModal(true)}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Create QR Code</span>
                    <span className="sm:hidden">Create</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 text-sm font-medium text-slate-600">
                        Campaign Name
                      </th>
                      <th className="text-left py-3 text-sm font-medium text-slate-600">
                        QR Preview
                      </th>
                      <th className="text-left py-3 text-sm font-medium text-slate-600">
                        Status
                      </th>
                      <th className="text-left py-3 text-sm font-medium text-slate-600">
                        Tags
                      </th>
                      <th className="text-left py-3 text-sm font-medium text-slate-600">
                        Created
                      </th>
                      <th className="text-left py-3 text-sm font-medium text-slate-600">
                        Scans
                      </th>
                      <th className="text-left py-3 text-sm font-medium text-slate-600">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaigns.map((campaign) => (
                      <tr
                        key={campaign.id}
                        className="border-b border-slate-100"
                      >
                        <td className="py-4">
                          <p className="font-medium text-slate-900">
                            {campaign.name}
                          </p>
                          <p className="text-sm text-primary-500">
                            {campaign.subTitle}
                          </p>
                        </td>
                        <td className="py-4">
                          <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                            <QrCode className="w-5 h-5 text-primary" />
                          </div>
                        </td>
                        <td className="py-4">
                          <Badge
                            variant={
                              campaign.status === "Enabled"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              campaign.status === "Enabled"
                                ? "bg-green-500 text-white"
                                : "bg-gray-300 text-gray-700"
                            }
                          >
                            {campaign.status == "Enabled"
                              ? "Branded"
                              : "Unbranded"}
                          </Badge>
                        </td>
                        <td className="py-4">
                          <div className="flex gap-1">
                            {campaign.tags.map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 text-sm text-slate-600">
                          {campaign.created}
                        </td>
                        <td className="py-4 font-medium">{campaign.scans}</td>
                        <td className="py-4">
                          <div className="flex gap-1">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <SquarePen className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden space-y-4">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
                          <QrCode className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">
                            {campaign.name}
                          </p>
                          <p className="text-sm text-slate-500">QR Code</p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          campaign.status === "Enabled"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          campaign.status === "Enabled"
                            ? "bg-dashboard-green text-white"
                            : ""
                        }
                      >
                        {campaign.status}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {campaign.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-600 mb-3">
                      <span>Created: {campaign.created}</span>
                      <span className="font-medium text-slate-900">
                        {campaign.scans} scans
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <SquarePen className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* QR Code Options Modal */}
      <Dialog open={showQROptionsModal} onOpenChange={setShowQROptionsModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <QrCode className="w-5 h-5 text-dashboard-purple" />
              QR Code Options
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-4">
            <Button
              className="w-full justify-start h-12 bg-primary hover:bg-primary/90 text-white"
              onClick={() => openQRModal("school")}
            >
              <QrCode className="w-5 h-5 mr-3" />
              Tour School QR Code
            </Button>
            <Button
              className="w-full justify-start h-12 bg-green-500 hover:bg-green-500/90 text-white"
              onClick={() => openQRModal("enrollment")}
            >
              <Users className="w-5 h-5 mr-3" />
              Enrollment QR Code
            </Button>
            <Button
              className="w-full justify-start h-12 bg-orange-500 hover:bg-orange-500/90 text-white"
              onClick={() => openQRModal("waitlist")}
            >
              <TrendingUp className="w-5 h-5 mr-3" />
              Join QR Waitlist
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* QR Code Display Modal */}
      <Dialog open={showQRModal} onOpenChange={setShowQRModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <QrCode className="w-5 h-5 text-primary" />
              Enrollment QR Code
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <div className="w-48 h-48 bg-gradient-to-br from-primary/60 to-primary/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <QrCode className="w-20 h-20 text-primary" />
              </div>
            </div>
            <p className="text-lg font-medium text-slate-900 mb-2">QR Code</p>
            <p className="text-sm text-slate-500">
              Students can scan this code to quickly access the enrollment form
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" className="flex-1">
              <Copy className="w-4 h-4 mr-2" />
              Copy Link
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
