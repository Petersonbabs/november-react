// resuable block of code to create user interfaces in react. React building block

import Header from "./components/Header"
import UsersList from "./components/UsersList"
import Hero from "./components/Ui/Hero"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <UsersList />
    </>
  )
}

export default App 