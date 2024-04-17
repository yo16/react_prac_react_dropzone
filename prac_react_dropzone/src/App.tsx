import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';


import './App.css';

function App() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something!
    console.log("Do something!!");
    console.log(acceptedFiles);

    // open if type is text/plain
    acceptedFiles.forEach((f:File) => {
      if (f.type === "text/plain") {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          if (typeof reader.result === "string" ) {
            console.log(reader.result);
          } else {
            console.log("no string!!");
          }
        });
        reader.readAsText(f, "utf-8");
      } else {
        console.log("no text/plain!");
      }
    })

  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});


  return (
    <>
      try react-dropzone!
      <hr />
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive?
            <p>Drop the files here ...</p>:
            <p>Drag 'n' drop some files here, or click to select files!</p>
        }
      </div>
    </>
  );
}

export default App;
