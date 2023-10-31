import {useState, useEffect} from "react";
import './App.css';
import "./style.scss";
import "./media-query.css";
import Home from './pages/Home';
import Detail from './pages/Detail';
import AddEditBlog from './pages/AddEditBlog';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';

function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

  const navigate = useNavigate(); 

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    });
  };

  return (
    <div className="App">
      <Header 
      setActive={setActive} 
      active={active} 
      user = {user} 
      handleLogout= {handleLogout}
      />
      <ToastContainer position= "top-center" />
     <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/create" element={<AddEditBlog />} />
      <Route path="/update/:id" element={<AddEditBlog />} />
      <Route path="/about" element={<About />} />
      <Route path="/auth" element={<Auth setActive= {setActive} />} />
      <Route path="*" element={<NotFound />} />
     </Routes>

    </div>
  );
}

export default App;
