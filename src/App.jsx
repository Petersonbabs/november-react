// resuable block of code to create user interfaces in react. React building block

import Header from "./components/Header"
import UsersList from "./components/UsersList"
import Hero from "./components/Ui/Hero"
import StateManagement from "./components/Ui/StateManagement"
import FeaturedProducts from "./components/Ui/FeaturedProducts"
import Hooks from "./components/Ui/Hooks"

// conditional rednering
// state management
// Hooks

function App() {
  return (
    <>
      {/* <Header />
      <Hero />
      <FeaturedProducts />
      <UsersList /> */}
      {/* <StateManagement /> */}
      <Hooks />
    </>
  )
}

export default App 