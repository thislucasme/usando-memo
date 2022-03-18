import React, { useState } from 'react';
import { PostList } from '../src/components/PostList';
import './App.css';

const [itens, setItens] = useState<string[]>([])

const addItemToList = () => {
  setItens([...itens, `Item ${itens.length}`])
}

function App() {
  return (
    <div className="App">
      <PostList />
    </div>
  );
}

export default App;
