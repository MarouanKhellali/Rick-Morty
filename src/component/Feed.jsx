import React from 'react'
import axios from "axios"
import { useState,useEffect } from 'react';

function Feed() {
    const [apiData,setApiData]=useState([]);
  const [searchFor,setSearchFor]=useState("");
  useEffect(()=>{
axios.get(`https://rickandmortyapi.com/api/character/?name=${searchFor}`)
.then(res=>{
  setApiData(res.data.results)
}).catch(error=>{

});
  },[searchFor]);
  return (
    <div>
         
    <h1 style={{fontWeight:"bold",fontSize:"32px",color: "white"  ,display:"inline-block"}}>Welcome to <span style={{fontWeight:"bold",fontSize:"32px",color: "green" ,display:"inline-block" }}>Rick And Morty</span> Universe</h1>
    
    
   <input style={{height:"60px",backgroundColor:"var(--second-bg-color)",outline:0,color:"white",display:"block",margin:"auto"}}
    className='w-1/2 md:w-1/4 bg-gray-100 p-6 rounded-lg' 
    placeholder='search for characters...' value={searchFor} onChange={(e)=>setSearchFor(e.target.value)}/>
    <div className='grid grid-cols-4  "'>
{
  apiData.map(item=><div className='grid grid-cols-1 ' style={{ backgroundColor:"var(--second-bg-color)",height:"auto",margin:"25px auto",fontSize:"18px",
  borderRadius:"32px ",fontFamily:'Lilita One '}} >
<div>
   
    <img style={{borderRadius:"32px 32px 0 0  "}} src={item.image} />
    <h1 style={{fontWeight:"bold",fontSize:"24px",color:"white",}}>{item.name}</h1>
    <div style={{color:"gray"}}>
    <h1 >{item.gender}</h1>
    <h1>{item.species}</h1>
    <h1>{item.origin.name}</h1>
</div>
</div>
<h1 style={{color:item.status=="Alive"? "green":"red", }}>{item.status}</h1>

  </div>)
}
    </div>
    </div>
  )
}

export default Feed