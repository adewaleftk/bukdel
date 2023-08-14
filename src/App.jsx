import Homepage from "./assets/pages/Homepage"
import { Route, Routes } from "react-router-dom"
import Delicacies from "./assets/pages/Delicacies"
import Logistics from "./assets/pages/Logistics"
import Login from "./assets/components/Login"
import ForgotPassword from "./assets/components/ForgotPassword"
import Signup from "./assets/components/Signup"
import Dashboard from "./assets/pages/Dashboard"
import DelicaciesDashboard from "./assets/pages/DelicaciesDashboard"
import LogisticsDashboard from "./assets/pages/LogisticsDashboard"
import OrderFood from "./assets/pages/OrderFood"
import PurchaseCart from "./assets/pages/PurchaseCart"
import Checkout from "./assets/pages/Checkout"
import PaymentMethod from "./assets/pages/PaymentMethod"
import SendPackageDashboard from "./assets/pages/SendPackageDashboard"
import SendPackageReview from "./assets/pages/SendPackageReview"
import SendPackageReceiver from "./assets/pages/SendPackageReceiver"
import ProceedToPay from "./assets/pages/ProceedToPay"
import Profile from "./assets/pages/Profile"

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/delicacies-dashboard" element={<DelicaciesDashboard />} />
        <Route path="/logistics-dashboard" element={<LogisticsDashboard />} />
        <Route path="/profile-dashboard" element={<Profile />} />
        <Route path="/logistics-dashboard/send" element={<SendPackageDashboard />} />
        <Route path="/logistics-dashboard/send/receiver" element={<SendPackageReceiver />} />
        <Route path="/logistics-dashboard/send/review" element={<SendPackageReview />} />
        <Route path="/logistics-dashboard/send/review/pay" element={<ProceedToPay />} />
        <Route path="/delicacies-dashboard/orderfood-dashboard" element={<OrderFood />} />
        <Route path="/delicacies-dashboard/orderfood-dashboard/purchase" element={<PurchaseCart />} />
        <Route path="/delicacies-dashboard/orderfood-dashboard/purchase/checkout" element={<Checkout />} />
        <Route path="/delicacies-dashboard/orderfood-dashboard/purchase/checkout/payment" element={<PaymentMethod />} />
      </Routes>
    </>
  )
}

export default App
