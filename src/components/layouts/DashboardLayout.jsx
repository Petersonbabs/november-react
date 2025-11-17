import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../pages/dashboard/DashboardIndex'
import OrdersPage from '../../pages/dashboard/OrdersPage'
import Profile from '../../pages/dashboard/Profile'
import Analytics from '../../pages/dashboard/Analytics'

const DashboardLayout = () => {
    return (
        <div>
            <h1>Dashboard layout</h1>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/orders' element={<OrdersPage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/analytics' element={<Analytics />} />
            </Routes>
            <h1>Footer</h1>
        </div>
    )
}

export default DashboardLayout