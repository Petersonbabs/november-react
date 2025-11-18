import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("auth_token")
        navigate("/login")
    }
    return (
        <aside className='bg-black text-white h-screen p-4 w-[25%]'>
            <ul>
                <li>Dashboard</li>
                <li>My Ordersx</li>

                <button onClick={logout}>Logout</button>
            </ul>
        </aside>
    )
}

export default Sidebar