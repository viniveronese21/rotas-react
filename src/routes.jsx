import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Erro from "./pages/Erro";
import Produto from "./pages/Produto";

import Header from "./components/Header";

export default function AppRoutes() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Sobre" element={<Sobre />} />
          <Route exact path="/Contato" element={<Contato />} />
          <Route path="/produto/:id" element={<Produto />} />

          <Route path="*" element={<Erro />} />
        </Routes>
      </Router>
    </>
  );
}
