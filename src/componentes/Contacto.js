import Otros from "./Otros";
import BotstrapsCarousel from "./BotstrapsCarousel";

const Contacto = () => (
  <>
    <h2>Contactanos</h2>
    <BotstrapsCarousel />
    <form>
      <input type="text" placeholder="Nombre..." id="nombre" />
      <input type="text" placeholder="Apellidos..." id="apellido" />
      <input type="button" onClick="mostrar()" value="Mostrar" />
    </form>
    <a
      href="https://himontoto.mitiendanube.com/productos/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Otros titulo="visitanos" />
    </a>
  </>
);

export default Contacto;
