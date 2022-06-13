import { Link } from "react-router-dom";
export default function Erro() {
  return (
    <div>
      <h1>Parece que essa página não existe</h1>
      <br />

      <span>Você pode estar procurando:</span>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/contato">Contato</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}
