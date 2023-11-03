import React, { useState } from 'react';
import './FileLoader.css';

const FileLoader = () => {
  const [fileContent, setFileContent] = useState('');
  const [repeatedWords, setRepeatedWords] = useState([]);
  const [wordsCount, setWordsCount] = useState(0);
  const [repeatedWordsCount, setRepeatedWordsCount] = useState(0);

  const handleFileRead = (event) => {
    const content = event.target.result;
    setFileContent(content);

    //Sanitize the content by removing the special charachters, split the content into words, convert to lowercase, count total words, and filter empty strings
    const words = content
      .replace(/[.,#!?^%&*;:\-()]/g, " ")
      .split(/\s+/).map(w => w.toLowerCase())
      .filter(w => w !== "");

    setWordsCount(words.length);
    if (!words.length > 0) {
      alert("No Content Found!");
      return;
    }
    const uniqueWordsArray = [],
      repeatedWordsSet = new Set();

    words.forEach(word => {
      if (uniqueWordsArray.includes(word)) {
        repeatedWordsSet.add(word);
      } else {
        uniqueWordsArray.push(word);
      }
    });
    setRepeatedWordsCount(repeatedWordsSet.size);
    setRepeatedWords([...repeatedWordsSet]);

    /////// Another way using Map ///////
    // This is an alternative approach using a Map to count repeated words
    // const myMap = new Map();
    // words.forEach(word => {
    //   let count = myMap.get(word) || 0;
    //   count++;
    //   myMap.set(word, count);
    // });
    // setRepeatedWordsCount([...myMap.values()].filter(value => value > 1).length);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file?.name.endsWith('.txt')) {
      const reader = new FileReader();
      reader.onload = handleFileRead;
      reader.readAsText(file);
    } else if (file) {
      alert("Invalid format: Only .txt files are allowed.");
    }
  };

  return (
    <div className="file-upload-container">
      <h2 className="title">Please Select a Text File</h2>
      <input
        type="file"
        onChange={handleFileSelect}
        accept=".txt"
        className="file-input"
      />
      {fileContent && (
        <div className="file-content-container">
          <p className="file-content-title">File Content:</p>
          <p className="file-content">{fileContent}</p>
          <p className="words-count">Words Count: {wordsCount}</p>
          <p className="repeated-words-count">Repeated Words Count: {repeatedWordsCount}</p>
          <p className="repeated-words-title">Repeated Words:</p>
          {repeatedWords.length > 0 && (
            <ul className="repeated-words-list">
              {repeatedWords.map((w) => (
                <li key={w} className="repeated-word">
                  {w}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default FileLoader;
