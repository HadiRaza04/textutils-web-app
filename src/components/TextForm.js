import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        // console.log("Uppercase Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        // console.log("Lowercase Clicked");
        let newText1 = text.toLowerCase();
        setText(newText1);
    }
    const removeClick = () => {
        // console.log("Remove Clicked");
        let newText2 = text.replaceAll(" ", "");
        setText(newText2);
    }
    const removeNumClick = () => {
        // console.log("Remove Number Clicked");
        let newText3 = text.replace(/[0123456789]/g, "");
        setText(newText3);
    }
    const removeSpeCharClick = () => {
        // console.log("Remove Special Character Clicked");
        let newText4 = text.replace(/[!@#$%^&*)(-_+=}{<>,.?:;''""|]/g, "");
        setText(newText4);
    }
  return (
    <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className='btn btn-primary my-2 mx-2' onClick={handleUpClick}>Uppercase</button>
        <button className='btn btn-info my-2 mx-2' onClick={handleLowClick}>Lowercase</button>
        <button className='btn btn-danger my-2 mx-2' onClick={removeClick}>Remove spaces</button>
        <button className='btn btn-warning my-2 mx-2' onClick={removeNumClick}>Remove Numbers</button>
        <button className='btn btn-secondary my-2 mx-2' onClick={removeSpeCharClick}>Remove Special Character</button>
    </div>
  )
}
