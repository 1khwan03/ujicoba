import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AddCategory from "./Components/AddCategory";
import PaymentSuccess from "./Components/PaymentSuccess";
import Users from "./Components/Users";
import Report from "./Components/Report";
import Order from "./Components/Order";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Routes>
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/users" element={<Users />} />
        <Route path="/report" element={<Report />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
};

export default App;
