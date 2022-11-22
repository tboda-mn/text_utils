import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
      console.log("Uppercase was clicked"+text);
      let newText=text.toLowerCase();
      setText(newText);
  }
  const handleClearText=()=>{
    console.log("HandleClearText was clicked"+text);
    let newText=''
    setText(newText);
  }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
  const [text, setText] = useState('');
  //setText("new text");
  return (
    <>
    <div className="container">
            <h3>{props.heading}</h3>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>

    </div>
    <div className="container my-3">
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
