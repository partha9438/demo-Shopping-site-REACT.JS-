import React from "react";
import { useState } from "react";
import '../Pages/Form.css'
import { Ref,state } from "react"; 
import { set } from "firebase/database";
import { database } from "../../Firebase/Firebase";
import { async } from "@firebase/util";
export const CreateProducts = () => {
    let[loadding,setloadding]=useState();
    let[ProductName,setProductName]=useState();
    let[Imgurl,setImgurl]=useState();
    let[Price,setPrice]=useState();
    let[Description,setDescription]=useState();
    let handlesubmit=(e)=>{
      let senddata=async=()=>{
        set(Ref(database,'Product/'+Date.now()),{
          ProductName,
          Imgurl,
          Price,
          Description
        });
      }
    }
  

  return (
    <div>
         <form  onSubmit={handlesubmit}>
      <fieldset>
        <label htmlFor="">ProductName</label>
        <input type="text" placeholder='Enter Your Product name'
        onChange={(e)=>setProductName(e.target.value)} required/>
        <label htmlFor="">Imageurl</label>
        <input type="url" placeholder='Enter Your img Url'
        onChange={(e)=>setImgurl(e.target.value)} required/>
        <label htmlFor="">Price</label>
        <input type="number" placeholder='Enter Price' 
         onChange={(e)=>setPrice(e.target.value)}required/>
        <label htmlFor="">Description</label>
        <textarea name="" id="" cols="10" rows=" 8"  onChange={(e)=>Description(e.target.value)}></textarea> 
        <button type='submit' style={{backgroundColor:loadding?"green":"gold"}}>{loadding?"loadding..":"submit"}</button>
        </fieldset>
    </form>
    </div>
  )
}
