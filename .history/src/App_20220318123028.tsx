import React, { useState, useMemo } from 'react';
import Item from '../src/components/Item';
import './App.css';


function App() {


  const [itens, setItens] = useState<string[]>([])
  const [newItem, setNewItem] = useState('')

  const addItemToList = () => {

    setItens([...itens, `Item ${itens.length}`])
  }

  const countItensWithOne = useMemo(() => {
    return itens.filter(item => item.includes('1')).length
  }, [itens])


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
