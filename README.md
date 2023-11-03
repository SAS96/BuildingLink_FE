## FileLoader

This React component provides a simple way to upload and analyze text files. It supports only .txt files and will display an alert if the user tries to upload a file with a different format.

### Usage

To use the FileLoader component, simply import it into your React project and add it to your component tree.

```
import FileLoader from './FileLoader';

function MyComponent() {
  return (
    <div>
      <FileLoader />
    </div>
  );
}
```
### Features

*The FileLoader component provides the following features:*
- File uploading: Users can select a .txt file from their computer to upload.
- Text analysis: The component analyzes the uploaded file and displays the following information:
    - Words count: The total number of words in the file.
    - Repeated words count: The number of unique words in the file that appear more than once.
    - Repeated words list: A list of all the unique words in the file that appear more than once.
### Example

The following code shows an example of how to use the FileLoader component:

When the user selects a .txt file and clicks the upload button, the FileLoader component will analyze the file and display the following information:
File Content: 
The quick brown fox jumped over the lazy dog. In the serene forest, it encountered a mysterious, ancient tree. That massive tree was a symbol of strength, wisdom, and endurance.
Words Count: 30
Repeated Words Count: 3
Repeated Words:
  - the
  - tree
  - a
