import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import LandingPage from '../../pages/LandingPage'
import Productpage from '../../pages/Productpage'
import ProductDetail from '../../pages/ProductDetail'
import NotFOuntPage from '../../pages/NotFOuntPage'
import LoginPage from '../../pages/Login'

const PublicPagesLayout = () => {
    return (
        <div>
            <header className='bg-gray-700'>
                <nav className='flex  text-white justify-between items-center h-12 max-w-[1140px] m-auto'>
                    <h2>Logo</h2>
                    <ul className='flex items-center gap-4 mr-8'>
                        <Link to="/">Hom</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/dashboard" className='flex items-center justify-center h-10 w-10 rounded-full'>
                            <img src='https://hips.hearstapps.com/hmg-prod/images/elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1400:*' className='h-full w-full object-fit rounded-full' />
                        </Link>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/products' element={<Productpage />} />
                <Route path='/products/:id' element={<ProductDetail />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<NotFOuntPage />} />
            </Routes>
        </div>
    )
}

export default PublicPagesLayout