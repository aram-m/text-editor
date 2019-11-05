import { useEffect, useState } from 'react';

const useSynonyms = word => {
  const [synonyms, setSynonyms] = useState([]);

  const fetchRes = async word => {
    let res;
    if (word) {
      res = await fetch(`https://api.datamuse.com/words?ml=${word}`);
      res.json().then(res => setSynonyms(res));
      return;
    }
    setSynonyms([]);
  };

  useEffect(() => {
    fetchRes(word);
  }, [word]);

  return synonyms;
};

export default useSynonyms;
