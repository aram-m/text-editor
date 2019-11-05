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

let tools = {
  bold: {
    icon: 'B'
  },
  italic: {
    icon: 'I'
  },
  underline: {
    icon: 'U'
  },
  indent: {
    icon: 'indent'
  },
  outdent: {
    icon: 'outdent'
  },
  removeFormat: {
    icon: 'reset'
  }
};

function Editor() {
  const [selected, setSelected] = useState(null);
  const [command, setCommandChanged] = useState(null);

  const onHandleSelect = () => {
    setSelected(getSelectedText());
  };

  const clickColor = color => {
    document.execCommand('foreColor', false, color);
    setSelected(getSelectedText());
  };

  const changeWord = synonym => {
    document.execCommand('insertText', false, synonym);
  };

  const clickTool = toolName => {
    document.execCommand(toolName);
    const commandChanged = !command;
    setCommandChanged(commandChanged);
  };
  return (
    <>
      <Toolbar
        clickTool={clickTool}
        clickColor={clickColor}
        changeWord={changeWord}
        tools={tools}
        stateChanged={command}
        word={selected}
      />
      <div id='editor'>
        <div contentEditable={true} onSelect={onHandleSelect}></div>
      </div>
    </>
  );
}

export default Editor;
