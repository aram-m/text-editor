import React from 'react';

export default function Toolbar(props) {
  return (
    <div id='control-panel'>
      <input
        className='color-picker'
        type='color'
        onChange={e => props.clickColor(e.target.value)}
      />
      {Object.entries(props.tools).map(([key, tool]) => {
        return (
          <button
            key={key}
            className={document.queryCommandState(tool.name) ? ' active' : ''}
            onClick={e => props.clickTool(key)}
          >
            {tool.icon}
          </button>
        );
      })}
    </div>
  );
}
