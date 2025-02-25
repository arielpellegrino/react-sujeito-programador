import React from "react";
import Nome from "./components/Nome";
import { useState } from "react";

function App() {

  const [aluno, setAluno] = useState('Sujeito PROGRAMADOR');

  return (
    <div>
      <h1>Primeiro App</h1>
          <Nome nome="João" idade={30} />
    </div>
  );
}

export default App;
