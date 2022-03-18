import React, { useState, useMemo } from 'react';
import Item from '../src/components/Item';
import './App.css';


function App() {


  const [itens, setItens] = useState<string[]>([])
  const [newItem, setNewItem] = useState('')

  const addItemToList = () => {

    setItens([...itens, `Item ${itens.length}`])
  }

  const countItensWithOne = itens.filter(item => {
    console.log('teste')
    return item.includes('1')
  }).length


  return (
    <>
      <input type={"text"} onChange={e => setNewItem(e.target.value)} value={newItem} />
      <div className="App">
        <button onClick={addItemToList}>teste</button>
        <ul>
          {itens.map((item) => {
            return <Item item={item} key={item} />
          })}
        </ul>
      </div>
      <div>
        Contagem: {countItensWithOne}
      </div>
    </>
  );
}

export default App;
