import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../pages/dashboard/DashboardIndex'
import OrdersPage from '../../pages/dashboard/OrdersPage'
import Profile from '../../pages/dashboard/Profile'
import Analytics from '../../pages/dashboard/Analytics'

const DashboardLayout = () => {
    return (
        <div >
            <nav className='h-16  bg-black text-white flex items-center'>Dashboard layout</nav>
            <aside className='bg-black text-white fixed left-0  h-full  w-1/5'>
                <ul className='p-8 space-y-4 block bg-black h-full pl-8 pt-4'>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                    <li>Dashboard</li>
                </ul>
            </aside>
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