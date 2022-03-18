import React, { useState } from 'react';
import Item from '../src/components/Item';
import './App.css';


function App() {


  const [itens, setItens] = useState<string[]>([])

  const addItemToList = () => {

    setItens([...itens, `Item ${itens.length}`])
  }

  const countItensWithOne = itens.filter(item => item.includes('1')).length


  return (
    <>
      <div className="App">
        <button onClick={addItemToList}>teste</button>
        <ul>
          {itens.map((item) => {
            return <Item item={item} key={item} />
          })}
        </ul>
      </div>
      <div>

      </div>
    </>
  );
}

export default App;
