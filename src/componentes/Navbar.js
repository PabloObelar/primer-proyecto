import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Novedades from "./Novedades";
import Producto from "./Producto";
import Contacto from "./Contacto";
import Home from "./Home";
import Error404 from "./Error404";
import Footer from "./Footer";
import "../estilos/style.scss";

const Navbar = () => (
  <div id="contenedor">
    <div className="logo">
      <img src={require("../imagenes/himontoto.png")} alt="Hi Montoto" />
      <h1 className="title">Hi Montoto</h1>
    </div>
    <Router>
      <div>
        <nav id="navegacion">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "activa" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) => (isActive ? "activa" : "")}
              >
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/producto"
                className={({ isActive }) => (isActive ? "activa" : "")}
              >
                Producto
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/novedades"
                className={({ isActive }) => (isActive ? "activa" : "")}
              >
                Novedades
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/producto" element={<Producto />}></Route>
          <Route path="/novedades" element={<Novedades />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </div>
    </Router>
    <Footer />
  </div>
);

export default Navbar;
