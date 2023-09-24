import React,{useState} from 'react'
import TextForm from './TextForm'

function Search() {
const [alertMsg,setAlertMsg]=useState(null);
  const showAlert=(message,type)=>{
    setAlertMsg({
      message,
      variant:type
    });
    setTimeout(()=>{
      setAlertMsg(null);
    },2000);
  }
  return (
    <div className="container my-3">
        <TextForm heading="Enter the text analyze" alertHandler={showAlert}/>
    </div>  
  )
}

export default Search
