import React from 'react';
import './Editor.css';

const Editor = () => {
  return (
    <div className="editor-container">
      <div className="editor">
        <div className="editor-header">
          <input type="text" value="main.js"/>
          <button>Run</button>
        </div>
        <textarea value={`// Online Javascript Editor for free\n// Write, Edit and Run your Javascript code using JS Online Compiler\n\nconsole.log("Try programiz.pro");`} readOnly />
      </div>
      <div className="output">
        <p>Output</p>
        <div className="output-divider"></div>
      </div>
    </div>
  );
};

export default Editor;
