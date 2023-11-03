import React, { useState } from 'react';

const App = () => {
  const [fileContent, setFileContent] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [repeatedWords, setRepeatedWords] = useState(0)

  const handleFileRead = (event) => {
    const content = event.target.result;
    setFileContent(content);

    const words = content.split(/\s+/).map(elm => elm.toLowerCase());
    setWordCount(words.length);

    const uniqueWords = [];
    let repeatedWords = new Set();
    words.forEach(word => {
      if (uniqueWords.includes(word)) {
        repeatedWords.add(word);
      } else {
        uniqueWords.push(word);
      }
    });
    setRepeatedWords(repeatedWords.size);

    ///////another way using Map///////
    // const myMap = new Map();
    // words.forEach(word => {
    //   let count = myMap.get(word) || 0;
    //   count++;
    //   myMap.set(word, count)
    // })
    // setRepeatedWords([...myMap.values()].filter(value => value > 1).length)
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file?.name.endsWith('.txt')) {
      const reader = new FileReader();
      reader.onload = handleFileRead;
      reader.readAsText(file);
    }
    else if (file) {
      alert("invalid file format")
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} accept=".txt" />
      <p>Word Count: {wordCount}</p>
      <div>{fileContent}</div>
      <p>Repeated Words: {repeatedWords}</p>
    </div>
  );
};

export default App;