// resuable block of code to create user interfaces in react. React building block

import Header from "./components/Header"
import UsersList from "./components/UsersList"
import Hero from "./components/Ui/Hero"
import StateManagement from "./components/Ui/StateManagement"
import FeaturedProducts from "./components/Ui/FeaturedProducts"

// conditional rednering

// state management

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <UsersList />
      {/* <StateManagement /> */}
    </>
  )
}

export default App 