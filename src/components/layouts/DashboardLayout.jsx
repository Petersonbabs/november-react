import React, { useEffect } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Sidebar from '../Ui/Sidebar'
import Dashboard from '../../pages/dashboard/DashboardIndex'
import OrdersPage from '../../pages/dashboard/OrdersPage'
import AddProduct from '../../pages/dashboard/AddProduct'

const DashboardLayout = () => {
    const auth = localStorage.getItem("auth_token")
    const navigate = useNavigate()
    useEffect(() => {
        if (!auth) {
            navigate("/login")
        }
    }, [])
    return (
        <div>
            <header className='bg-black'>
                <nav className='flex  text-white justify-between items-center h-12 max-w-[1140px] m-auto'>
                    <Link to="/"> <h2>Logo</h2></Link>
                    <ul className='flex items-center gap-4 mr-8'>
                        <Link to="/dashboard/">Overview</Link>
                        <Link to="/dashboard/orders">Orders</Link>
                        <Link to="/dashboard/analytics">Analytics</Link>
                        <Link to="/dashboard/profile" className='flex items-center justify-center h-10 w-10 rounded-full'>
                            <img src='https://hips.hearstapps.com/hmg-prod/images/elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1400:*' className='h-full w-full object-fit rounded-full' />
                        </Link>
                    </ul>
                </nav>
            </header>
            <section className='flex gap-4'>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/orders' element={<OrdersPage />} />
                    <Route path='/add-product' element={<AddProduct />} />
                </Routes>
            </section>
        </div>
    )
}

export default DashboardLayout