import React, { useState } from "react";
import NavBar from "../../components/NavBar/index";
import Button from "@mui/material/Button";

import "../TransformaLetras/Conversor.css";

const Conversor = () => {
  const [texto, setTexto] = useState("");

  const handleMaiscula = () => {
    var textoMaisculo = texto.toUpperCase();
    setTexto(textoMaisculo);
  };

  const handleMinusculo = () => {
    var textoMinusculo = texto.toLowerCase();
    setTexto(textoMinusculo);
  };

  const handleAlternado = () => {
    var textoAlternado = texto.toLowerCase();
    setTexto(textoAlternado);
  };

  return (
    <>
      <NavBar />
      <div className="container" style={{ top: "29%", left: "37%" }}>
        <div className="itens">
          <h1>Conversor</h1>
          <textarea
            style={{
              maxHeight: "150px",
              minHeight: "100px",
              resize: "none",
              width: "500px",
              fontSize: "15px",
            }}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          ></textarea>

          <div style={{ marginTop: "10px" }} className="botoes">
            <Button
              style={{ marginRight: "10px" }}
              variant="contained"
              onClick={handleMaiscula}
            >
              Maicula
            </Button>
            <Button
              style={{ marginRight: "10px" }}
              variant="contained"
              onClick={handleMinusculo}
            >
              Minuscula
            </Button>
            <Button
              style={{ marginRight: "10px" }}
              variant="contained"
              onClick={handleAlternado}
            >
              Alternado
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversor;
