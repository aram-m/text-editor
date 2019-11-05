import React from 'react';
import './App.css';
import Editor from './editor/editor';

function App() {
  return (
    <div className='App'>
      <header>
        <span>Simple Text Editor</span>
      </header>
      <main>
        <Editor />
      </main>
    </div>
  );
}

export default App;
