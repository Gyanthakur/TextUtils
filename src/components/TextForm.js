import React ,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Upper Case Clicked " + text)
    let newText = text.toUpperCase();
    // setText("You are clicked on handleClick")
    setText(newText)
    props.showAlert("convert to upperCase","primary")
  }
  const handleLoClick=()=>{
    console.log("Lower case clicked" + text);
    let newText2=text.toLowerCase();
    setText(newText2);
    props.showAlert("convert to lowerCase","success")
  }
  const handleOnchange = (event)=>{
    console.log("On change")
    setText(event.target.value)
  }
  const handleClearClick=(event)=>{
    console.log("clear text is clicked")
    let newText='';
    setText(newText)
    props.showAlert("Clear to all text","danger")
  }
  const handleCopy=(event)=>{
    // console.log("copy text clicked");
    // let text=document.getElementById("myBox");
    // text.select()
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("copied the text to clickBoard","info")
  }
  const handleExtraSpace=(event)=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Remove extra space","dark")
  }
  
  
  const [text,setText] = useState('');
  // text="gyan pratap singh" // this is wrong way to update text 
  // setText("Gyan pratap singh")  // correct way to update setState
  return (
    <>
      <div className="container" style={{color: props.mode==='light'?'#042743':'white'}} >
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='light'?'#042743':'white'}} value={text} onChange={handleOnchange} id="myBox" rows="5"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}  >Convert to UpperCase</button>
       <button disabled={text.length===0} className="btn btn-success mx-1 my-1"  onClick={handleLoClick}  >Convert to LowerCase</button>
       <button disabled={text.length===0} className='btn btn-danger mx-1 my-1'  onClick={handleClearClick} >Clear text</button>
       <button disabled={text.length===0} className='btn btn-info mx-1 my-1' onClick={handleCopy} >Copy text</button>
       <button disabled={text.length===0} className='btn btn-dark mx-1 my-1' onClick={handleExtraSpace} >Reamove Extra Space</button>
        </div>
       <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}} >
        <h1>Your text summery</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minuts read </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
       </div>

    </>
  )
}
