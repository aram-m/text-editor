import React, { useState } from 'react';
import './editor.css';
import Toolbar from './toolbar';

function getSelectedText() {
  let text = null;

  if (window.getSelection) {
    text = window.getSelection().toString();
  }
  if (document.selection && document.selection.type !== 'Control') {
    text = document.selection.createRange().text;
  }
  return text;
}

const tools = {
  bold: {
    name: 'bold',
    icon: 'B'
  },
  italic: {
    name: 'italic',
    icon: 'I'
  },
  underline: {
    name: 'underline',
    icon: 'U'
  },
  indent: {
    name: 'indent',
    icon: 'indent'
  },
  outdent: {
    name: 'outdent',
    icon: 'outdent'
  },
  removeFormat: {
    name: 'removeFormat',
    icon: 'reset'
  }
};

function Editor(props) {
  const [selected, setSelected] = useState(null);

  const handleKeyUp = () => {
    console.log(getSelectedText());
  };

  const clickColor = color => {
    document.execCommand('foreColor', false, color);
    setSelected({ selected: getSelectedText() });
  };

  const clickTool = toolName => {
    document.execCommand(toolName);
    setSelected({ selected: getSelectedText() });
  };

  return (
    <>
      <Toolbar clickTool={clickTool} clickColor={clickColor} tools={tools} />
      <div id='editor'>
        <div
          contentEditable={true}
          onMouseUp={handleKeyUp}
          onKeyUp={handleKeyUp}
        ></div>
      </div>
    </>
  );
}

export default Editor;
