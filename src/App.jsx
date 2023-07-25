import Homepage from "./assets/pages/Homepage"
import { Route, Routes } from "react-router-dom"
import Delicacies from "./assets/pages/Delicacies"
import Logistics from "./assets/pages/Logistics"
import Login from "./assets/components/Login"
import ForgotPassword from "./assets/components/ForgotPassword"
import Signup from "./assets/components/Signup"

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Homepage/>} />
        <Route path="/delicacies" element={<Delicacies />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App
