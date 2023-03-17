import { onValue } from "firebase/database";
import React, { useEffect } from "react";
import{Link, Outlet} from "react-router-dom";
import { database } from "../../Firebase/Firebase";
import "../ProductComponent/component.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ActionData } from "../../Redux/Action/Action";
import { ref} from "firebase/database";
function Home(){
    // let dispatch=useDispatch();
    // let state=useSelector(state=>state.ProductReducer)
    // console.log(state)
    // useEffect(()=>{
    //     const Alldata=ref(database,'products/');
    //     onValue(Alldata,(data)=>{
    //         // const finaldata=data.val();
    //         let Dataarr=[];
    //         data.forEach(value=>{
    //             let object=value.val
    //             let key=value.key;
    //             object.id=key;
    //             Dataarr.push(object)
    //         })
    //         // console.log(finaldata)
    //         dispatch(ActionData(Dataarr))
    //     });
    // })
    return(
        <div id="page">    
        <div id="home-img">
            <Link to="/mobiles"><img src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-s908ezgginu/gallery/in-galaxy-s22-ultra-s908-413016-413016-sm-s908ezgginu-531804084?$650_519_PNG$" alt="" /></Link>
           <div>
            <Outlet/>
           </div>
         

           
           <div>
            <Link to="/fashion"><img src="https://www.primermagazine.com/wp-content/uploads/2021/06/mens-clothing-brands_feature.jpg" alt="" srcset="" /></Link>
            
           </div>

           <div>
            <Link to="/footwear"><img src="https://th.bing.com/th?q=Sustainable+Footwear&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="" /></Link>
           </div>
        </div>

    </div>    
    )
}

export default Home;