import React from "react";
import Navbar from "./component/Navbar";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./component/Pages/Home";
// import Contact from "./component/Pages/Contact";
import About from "./component/Pages/About";
import Login from "./component/Pages/Login";
import Signup from "./component/Pages/Signup";
import PageNotFound from "./component/Pages/PageNotFound";
import Mobile from "./component/ProductComponent/Mobile";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Fashion from "./component/ProductComponent/Fashion";
import Footwear from "./component/ProductComponent/Footwear";
import { AuthContext } from "./ContextApi/AuthContext";
import { CreateProducts } from "./component/AdminComponents/CreateProducts";
// import { Provider } from "react-redux";
// import Store from "./Redux/Action/Store";
function App(){
    return(
      // <Provider Store={Store}>
        <BrowserRouter>
        <AuthContext>
           <Navbar/>
           <ToastContainer/>
           <Routes>
              <Route path="/" element={<Home/>}>
              <Route path="/fashion" element={<Fashion/>}></Route>
              <Route path="/mobiles" element={<Mobile/>}></Route>
             <Route path="/footwear" element={<Footwear/>}></Route>
              </Route>
              <Route path="/contact" element={<CreateProducts/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
              <Route path="*" element={<PageNotFound/>}></Route>

           </Routes>
           </AuthContext>
        </BrowserRouter>
      // </Provider>  
    )
}



// export default App;


// // import React from "react";
// // import form from "./component/form";
 
// import React from "react";
// import Video from "./Components/Video";
// function App(){
//   return(
//    <>
//    <Video/>
//    </>
//   )
// }
export default App;