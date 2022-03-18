import React, { useState } from 'react';

import './App.css';
import { Item } from '../src/component/Item'

function App() {


  const [itens, setItens] = useState<string[]>([])

  const addItemToList = () => {

    setItens([...itens, `Item ${itens.length}`])
  }


  return (
    <div className="App">
      <button onClick={addItemToList}>teste</button>
      <ul>
        {itens.map((item) => {
          return <Item item={item} key={item} />
        })}
      </ul>
    </div>
  );
}

export default App;
