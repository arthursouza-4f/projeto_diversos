import React from "react";
import { Link } from "react-router-dom";

const Conversor = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/kms">Sobre</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Conversor;
