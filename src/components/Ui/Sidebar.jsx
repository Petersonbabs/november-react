import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("auth_token")
        navigate("/login")
    }
    return (
        <aside className='bg-black text-white h-screen p-4 w-[25%]'>
            <ul className=''>
                <li>Dashboard</li>
                <li>My Ordersx</li>
                <Link to="/dashboard/add-product">Add product</Link>

            </ul>
                <button onClick={logout}>Logout</button>
        </aside>
    )
}

export default Sidebar