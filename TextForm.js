import React, {useState} from 'react'

export default function TextForm(props) {

  const afterclicking=()=>{
    setText(text.toUpperCase())
    props.showAlert("converted to upppercase", "success")
  }
  
  const afterclicking2=()=>{
    setText(text.toLowerCase())
    props.showAlert("converted to lowercase", "success")
  
  }
  const reverseclick=()=>{
    setText(text.split(" ").reverse().join(" "))
    props.showAlert("text is reversed", "success")
  
  }

  const handleChange=(event)=>{
    setText(event.target.value)           /// to change the value of state variable like text
  
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==='blue'}}>
      
 
<div className="mb-3" style={{color:props.mode==='dark'?'white':'black' }}>
  <h1 >{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'  }}  id="box" rows="8"></textarea>
</div>
<button className="btn btn-outline-warning mx-2" onClick={afterclicking} >convert to uppercase</button>
<button className="btn btn-outline-danger mx-5" onClick={afterclicking2} >convert to lowercase</button>
<button className="btn btn-outline-success mx-5" onClick={reverseclick} >reverse the text</button>
    </div>
    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black' }}>
      <h2>enter the summary </h2>
      <p>{text.split("").length===0} words and {text.length} characters </p>
      <p>{text.split("").length*0.00333333333} minutes</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>

    </>
  )
}
