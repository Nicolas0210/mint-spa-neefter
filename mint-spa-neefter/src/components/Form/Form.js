import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

export default function CreationForm () {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [input, setInput] = useState({
    name: "",
    description: "",
    viewFile: []
  })
  
  //--drag and drop library//
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    console.log(file)
    setFile(file);
  }
  //----------------------//
  

  return(
    <div>
      <form>
        <label>Set your NFT name</label>
        <input type="text"/>
        <label>Set a short description for your NFT</label>
        <textarea/>
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      </form>
    </div>
  )
}