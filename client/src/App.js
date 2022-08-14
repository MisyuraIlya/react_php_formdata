import React, { useEffect, useState } from 'react';
import axios from 'axios'
function App() {

  const [files, setFiles] = useState()

  const onSelectFile = (event) => {
    const file = event.target.files;
    console.log(file)
    setFiles(file)
  }

  const sendFunc = async () => {
    const formData = new FormData();
    formData.append('test','test')

    for(let i = 0, len =files.length; i<len; i++){
      formData.append(`files-${i}`,files[i], files[i].name)
    }


    try {
      const data = await axios({
        url:'http://localhost/react_php_formdata/app_data.php',
        method: 'POST',
        headers: {
          'Content-Length': files.length,
          'Content-Type': 'multipart/form-data'
        },
        data: formData
      }). then((res) => {

      }, (err) => {

      })
      // console.log(data)
    } catch(err) {
      console.log('connection error order',err);
    } finally {
    }
  }
  console.log(files)
  return (
    <div className="App">
       <input type="file" name="images" onChange={onSelectFile} multiple accept='image/png, image/jpeg, image/webp .mov,.mp4'/>
       <button onClick={sendFunc}>send</button>
    </div>
  );
}

export default App;
