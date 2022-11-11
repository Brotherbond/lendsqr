import type { NextPage } from 'next'
import Head from 'next/head'
import DashboardLayout from '@/layouts/Dashboard'

const Dashboard: NextPage = () => {
  return (
    <DashboardLayout title="Dashboard">
      <>
        Welcome to Dashboard
      </>
    </DashboardLayout>
  )
}

export default Dashboard
