import React from "react";
function Navbar({data}){
    return(
        <div>
            <h1>{data.name}</h1>
            <h1>{data.age}</h1>
            
            <h1>{data.contactNumber}</h1>
            <h1>{data.address}</h1>

        </div>
    )
       }
   

export default Navbar          
           
          
         
