import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./component/Search";
import Navbar from "./component/Navbar";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>

        


      </Routes>
    </div>
  );
}

export default App;
