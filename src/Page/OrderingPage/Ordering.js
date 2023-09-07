import React, { useEffect, useState } from 'react'
import './orderpage.css'
export default function ({setSelectItem,item, selectItem }){
    
  return (
    <>
<div>
    
        
</div>


    <div > 
        <div>
            <select  className='select_box' value={selectItem} name="" id="" onChange={(e)=> setSelectItem(e.target.value) }>
                <option > </option>
                <option value="Passenger1">Passenger1</option>
                <option value="Passenger2">Passenger2</option>
            </select>
        </div>

        <div>
        <div className="accordion" id="accordionExample">
  <div className="card" style={{marginTop :'2rem' , marginBottom:'2rem'} }>
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".collapseOne" aria-controls="collapseOne" >
        Passenger 1
        </button>
      </h2>
    </div>

    <div id="" className="collapse collapseOne" >
      <div className="card-body" >
           
      {item && item["Passenger1"] && item["Passenger1"].map((curr, index) => (
        <React.Fragment key={index}>
        
         <div style={{display:'flex'}}>
            <div style={{width:'50%'}}>
              
                {  curr.title}
            </div>
            <div style={{width:'50%' ,textAlign:'right'}}>
              {""}  {  curr.price}
            </div>
        </div>    
        </React.Fragment>
        ))}
           
      </div>
    </div>
  </div>
 
  <div className="card" style={{marginTop :'2rem' , marginBottom:'2rem'}}>
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-primary btn-lg" type="button" data-toggle="collapse" data-target=".collapseTwo" aria-controls="collapseTwo" >
        Passenger 2
        </button>
      </h2>
    </div>

    <div id="" className="collapse collapseTwo" >
      <div className="card-body">
      {item && item["Passenger2"] && item["Passenger2"].map((curr, index) => (
        <React.Fragment key={index}>
        
         <div style={{display:'flex'}}>
            <div style={{width:'50%'}}>
              
                {  curr.title}
            </div>
            <div style={{width:'50%' ,textAlign:'right'}}>
              {""}  {  curr.price}
            </div>
        </div>    
        </React.Fragment>
        ))}

      </div>
    </div>
  </div>


</div>
        </div>

    </div> 
    </>
  )
}