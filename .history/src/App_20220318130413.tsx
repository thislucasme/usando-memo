import React, { useState, useMemo, useCallback } from 'react';
import Item from '../src/components/Item';
import './App.css';


function App() {


  const [itens, setItens] = useState<string[]>([])
  const [wishList, setWishList] = useState<string[]>([])
  const [newItem, setNewItem] = useState('')

  const addItemToList = () => {

    setItens([...itens, `Item ${itens.length}`])
  }

  const addItemToWishList = useCallback((item: string) => {
    //state é a wishlist antes da autalização
    setWishList(state => [...state, item])
  }, [])

  const countItensWithOne = useMemo(() => {
    console.log("teste")
    return itens.filter(item => item.includes('1')).length
  }, [itens])


  return (
    <>
      <input type={"text"} onChange={e => setNewItem(e.target.value)} value={newItem} />
      <div className="App">
        <button onClick={addItemToList}>teste</button>
        <ul>
          {itens.map((item) => {
            return <Item onAddToWishList={addItemToWishList} item={item} key={item} />
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
