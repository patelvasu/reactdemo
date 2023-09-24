import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap';
const TextForm = ({heading,alertHandler}) => {
  const [textstr,setTextStr]=useState("");
  const textAreaEventHandler=(e)=>{    
    setTextStr(e.target.value);    
  } 
  const upperCaseHandler=()=>{
    setTextStr(textstr.toUpperCase())
    alertHandler("Text successfully converted!","success");
  }
  return (
    <Form>
      <h3>{heading}</h3>      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <div className='my-2'>          
          <Form.Control as="textarea" placeholder='Enter your text..' value={textstr} rows={5} onChange={textAreaEventHandler}/>
        </div>        
        <Button type='button' className='btn btn-success mx-1' onClick={upperCaseHandler}>Convert To UpperCase</Button>
        <Button type='button' className='btn btn-danger' onClick={()=>{setTextStr("")}}>Clear Text</Button>
      </Form.Group>
      <div className='container'>
        <h2>Your Text Summary</h2>
        <p>{ (textstr)?textstr.split(" ").length:0} Words and {textstr.length} Characters</p>
      </div>
    </Form>
  )
}

export default TextForm
