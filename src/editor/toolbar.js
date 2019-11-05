import React from 'react';
import useSynonyms from '../useSynonyms';

export default function Toolbar(props) {
  const synonyms = useSynonyms(props.word);

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
            className={document.queryCommandState(key) ? ' active' : ''}
            onClick={() => props.clickTool(key)}
          >
            {tool.icon}
          </button>
        );
      })}
      <select
        className='synonyms'
        onChange={e => props.changeWord(e.target.value)}
      >
        <option key='default'>Select synonym</option>
        {synonyms.map((item, key) => (
          <option key={key} value={item.word}>
            {item.word}
          </option>
        ))}
      </select>
    </div>
  );
}
