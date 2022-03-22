import { useState } from "react";
import NavBar from "../../components/NavBar/index";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./KMS.css";

function App() {
  const [kmUsed, setkmUsed] = useState(0);
  const [kmLitersUse, setkmLitersUse] = useState(0);
  const [result, setResult] = useState(0);

  const handleClick = () => {
    var verifica = Boolean;
    if (document.getElementById("kmUsed").value == 0) {
      document.getElementById("alerta").innerHTML =
        "Informe os kilometros usados!";
      verifica = false;
    } else {
      document.getElementById("alerta").innerHTML = "";
      verifica = true;
    }

    if (verifica) {
      console.log("entrou no if");
      var calculo = Math.ceil(kmUsed / kmLitersUse);
      setResult(calculo);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container" style={{ top: "29%", left: "47%" }}>
        <div className="itens">
          <h1>Km/Litro: {result}</h1>
          <h5 id="alerta"></h5>
          <br></br>
          <TextField
            helperText="Por favor entre com os Km/Rodados"
            id="kmUsed"
            label="Km/Rodados"
            onChange={(e) => setkmUsed(e.target.value)}
          />
          <br></br> <br></br>
          <TextField
            helperText="Por favor entre com os Lt/Usados"
            id="kmUsed"
            label="Lt/Usados"
            onChange={(e) => setkmLitersUse(e.target.value.e)}
          />
          <br></br> <br></br>
          <Button variant="contained" onClick={handleClick}>
            Calcular
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
