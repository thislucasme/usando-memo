import React, { useState } from 'react';
import { PostList } from '../src/components/PostList';
import './App.css';


function App() {


  const [itens, setItens] = useState<string[]>([])

  const addItemToList = () => {
    setItens([...itens, `Item ${itens.length}`])
  }

  return (
    <div className="App">
      <PostList />
    </div>
  );
}

export default App;
