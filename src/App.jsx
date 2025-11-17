// resuable block of code to create user interfaces in react. React building block

import Header from "./components/Header"
import UsersList from "./components/UsersList"
import Hero from "./components/Ui/Hero"
import StateManagement from "./components/Ui/StateManagement"
import FeaturedProducts from "./components/Ui/FeaturedProducts"
import Hooks from "./components/Ui/Hooks"
import LandingPage from "./pages/LandingPage"
import Productpage from "./pages/Productpage"
import Dashboard from "./pages/dashboard/DashboardIndex"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFOuntPage from "./pages/NotFOuntPage"
import ProductDetail from "./pages/ProductDetail"
import Footer from "./components/Footer"
import DashboardLayout from "./components/layouts/DashboardLayout"

// conditional rednering
// state management
// Hooks

// layout component

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/dashboard/*" element={<DashboardLayout />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          <Route path="*" element={<NotFOuntPage />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}

      {/* <Hero />
      <FeaturedProducts />
      <UsersList /> */}
      {/* <StateManagement /> */}
      <Hooks />
    </>
  )
}

export default App 

