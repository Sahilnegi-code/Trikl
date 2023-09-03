import React, {useState , useEffect} from 'react'
import Draggable from "react-draggable"
const DragDrop = () => {
    const [ val ,setVal ] =    useState("Empty");
    const [imgstyle , setImgstyle ] = useState("")
    const call = async()=>{
        
     const res = await  fetch("https://api.unsplash.com/photos/random/?client_id=PJ6KrG-bxBXborLQ5z5SAXVV9OmK-uIpeI4uiCxatX8");
     const data = await res.json();
setImgstyle(data.urls.regular);

    }
useEffect( ()=>{
    call();
},[]);
  return (
    <>
       <div style= {
    {
        backgroundImage:`url(${imgstyle})`,
            height: '100vh',
            border: '2px solid red',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat'
    }
    } >
      <Draggable    
      axis='both'
      grid={[100, 20]}
      handle= ".handle"
      position={null}
      scale={4}

      >
        
            <div>
            <textarea className='handle'
                value={val}
             
                onChange={(e) => {
                    setVal(e.target.value);
                }}
    style={{ color:'white', fontSize:'40px' ,background:'transparent', outline:'none',  borderBottom:'grey'}}
            />  
            </div>
    

   
        </Draggable>
        </div>
    </>
  )
}

export default DragDrop
