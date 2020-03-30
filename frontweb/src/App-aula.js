import React, { useState } from 'react';

import Header from './Header'; // conceitos

function App() {
  let [counter, setCounter]= useState(0);

  function increment() {
      counter++;
      setCounter(counter);
;
  }

return (
    <>
      <Header title="Semana OmniStack">
        Marcelo Ratton
      </Header>
      <Header>
        Contador: {counter}
      </Header>
      <button onClick={increment}>Incrementar</button>
    </>
);
}

export default App;
