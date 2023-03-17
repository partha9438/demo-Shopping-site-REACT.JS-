import React, { useEffect, useState } from "react"; 

import "./Useeffecttable.css"
 const useEffectdemo=()=>{
    let[posts,setposts]=useState([])
  
    useEffect(()=>{
        let URL="https://jsonplaceholder.typicode.com/posts "
       fetch(URL)
       .then(res=>res.json())
       .then(data=>{
        setposts(data)
       })
    //    .catch(err=>console.log(err))
    //    console.log(result)
    },[])
   return(
    <div className="title">
        {/* {console.log(posts)} */}
        {/* <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>title</th>
                </tr>
            </thead>
            <tbody>{
               posts.map((item)=>{
                return(
                    <tr className="nd">
                        <td>{item.id}</td>
                        <td>{item.title}</td>

                    </tr>
                )
               }) 
                }
               
            </tbody>
        </table> */}
        {
                
                posts.map(item=>{
                    return(
                        <div className="box">
                            
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </div>
                    )
                })
              }
    </div>
   )
 }
 export default useEffectdemo;