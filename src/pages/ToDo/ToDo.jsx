import { useState } from "react";
import NavBar from "../../components/NavBar/index";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

function App() {
  return (
    <>
      <NavBar />
      <div className="container" style={{ top: "29%", left: "47%" }}>
        <div className="itens">
          <h1>ToDo</h1>
          <TextField id="outlined-search" label="ToDo" type="search" />
          <AddIcon />
        </div>
      </div>
    </>
  );
}

export default App;
