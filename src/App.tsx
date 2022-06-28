import React from 'react';
import { Header } from './components/Header';
import { Tree } from './components/Tree';
import { TreePanel } from './components/TreePanel/TreePanel';
import './scss/App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Tree />
        <TreePanel />
      </div>
    </div>
  );
}

export default App;
