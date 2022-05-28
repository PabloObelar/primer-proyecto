import "../estilos/tabla.css";
const Tabla = () => (
  <table className="table table-dark table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Producto</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Lona Xl</td>
        <td>$3500</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Neceser</td>
        <td>$1500</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Cuello de lona</td>
        <td>$2000</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Cubre coche</td>
        <td>$4000</td>
      </tr>
    </tbody>
  </table>
);
export default Tabla;
