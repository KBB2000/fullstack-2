import React, { useContext } from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import Home from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { Routes, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"
import { Context } from "./context/Context"

const App = () => {

  const { user } = useContext(Context)
  return (
    <>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Regsiter/>} />
          <Route exact path='/post/:id' element={<DetailsPages />} />
          <Route exact path='/account' element={<Account />} />
          <Route exact path='/create' element={<Create />} />
          </Routes>
    </>
  )
}
export default App