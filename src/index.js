import React from "react";
import ReactDOM from "react-dom";
import Contacto from "./componentes/Contacto";
import Otros from "./componentes/Otros";
import Navbar from "./componentes/Navbar";
import Novedades from "./componentes/Novedades";
import Producto from "./componentes/Producto";
import Home from "./componentes/Home";
import Error404 from "./componentes/Error404";
import Footer from "./componentes/Footer";

const App = () => <Navbar />;

<Home />;

<Contacto />;
<Producto />;
<Novedades />;
<Error404 />;
<Footer />;
<Otros />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
