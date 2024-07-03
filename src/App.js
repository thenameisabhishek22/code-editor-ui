import React from 'react';
import './App.css';
import Editor from './components/Editor';
import IconPane from './components/IconPane';

function App() {
  return (
    <div className="container">
      <IconPane />
      <Editor />
    </div>
  );
}

export default App;
