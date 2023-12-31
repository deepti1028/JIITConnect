import { useState, useEffect } from "react";
import "./App.css";
import "./style.scss";
import "./media-query.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import AddEditBlog from "./pages/AddEditBlog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import Annapurna from "./pages/Annapurna";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./pages/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AddProduct from "./pages/admin/dashboard/AddProduct";
import AdminAuth from "./pages/AdminAuth";
function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        setIsLoggedIn(true);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setIsLoggedIn(false);
      setActive("login");
      navigate("/auth");
    });
  };

  return (
    <div className="App" style={{ backgroundColor: "#22092C" }}>
      <Header
        setActive={setActive}
        active={active}
        user={user}
        handleLogout={handleLogout}
      />
      <ToastContainer position="top-center" />

      <Routes>
        <Route path="/" element={<Home setActive={setActive} user={user} />} />
        <Route
          path="/detail/:id"
          element={<Detail setActive={setActive} user={user} />}
        />
        <Route
          path="/create"
          element={
            user?.uid ? <AddEditBlog user={user} /> : <Navigate to="/" />
          }
        />
        <Route
          path="/update/:id"
          element={
            user?.uid ? (
              <AddEditBlog user={user} setActive={setActive} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/auth"
          element={<Auth setActive={setActive} setUser={setUser} />}
        />

        <Route
          path="/annapurna"
          element={
            user?.uid ? (
              <Annapurna setActive={"annapurna"} user={user} />
            ) : (
              <Navigate to="/auth" />
            )
          }
          
        />
        {/* <Route
          path="/annapurna"
          element={
            <ProtectedRoutes>
              {user?.uid ? (
                <Annapurna setActive="annapurna" />
              ) : (
                <Navigate to="/auth" />
              )}
            </ProtectedRoutes>
          }
        /> */}
        <Route
          path="/adminauth"
          element={<AdminAuth setActive={setActive} setUser={setUser} />}
        />
        <Route path="/dashboard" element={<Dashboard setActive={setActive} setUser={setUser}/>} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<Cart setActive={setActive} user={user}/>}  />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("users")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
