import { useParams } from "react-router-dom";

export default function Produto() {
  const { id } = useParams();
  return (
    <>
      <h1>Grade de Produtos</h1>
      <br />
      <span>Produto selecionado: {id}</span>
    </>
  );
}
