import React from 'react'
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

export default function CreationForm (name, description, file) {
  const fileTypes = ["JPG", "PNG", "GIF"];

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  }
  

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