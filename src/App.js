import './App.css';
import DragDrop from './DragDrop'; 
import LandingPage from './Page/LandingPage'
import Ordering from './Page/OrderingPage/Ordering'
import { useEffect, useState } from 'react';
import data from './data.json'
function App() {
  const [selectItem , setSelectItem] = useState("");
  const [item , setItem] = useState({});
  console.log(item)
  useEffect(()=>{
  },[selectItem])
  return (
    <>
    {/* <DragDrop/> */}

<div className='container_box' style={{marginTop:'2rem'}}>
<div style={{display:'flex'}}>
<div style={{width:'50%'}}>
  <LandingPage setSelectItem={setSelectItem} item={item} setItem={setItem} selectItem={selectItem} data={data}/>
</div>
      <div style={{ padding:'1rem' ,backgroundColor:'#D3D3D3' , width:'40%', height:'100vh' ,marginLeft:'auto'}}> 
      <Ordering setSelectItem={setSelectItem} item={item} selectItem={selectItem}/>
       </div>
    
    </div>
</div>
   
    </>

  );
}

export default App;
