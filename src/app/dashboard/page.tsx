// src/modules/dashboard/Dashboard.tsx
// import Loading from "@/components/common/loading"
// import React, { Suspense } from "react"

import { DashboardPage } from "@/modules/dashboard/pages/DashboardPage"

// // Carga diferida del componente de DashboardPage
// const DashboardPag = React.lazy(
//   () => import("@/dashboard/pages/DashboardPage/DashboardPage")
// )

const Dashboard = () => <DashboardPage />

export default Dashboard
