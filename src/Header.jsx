import React from "react";
function Header(props){
    return(
        <div>
            <h1>hii i am child</h1>
            <h1>{props.data.name}</h1>
            <h1>{props.data.age}</h1>
            <h1>{props.address}</h1>

        </div>
    )
}
export default Header;
Header.defaultProps={
    name:"name", 
    age:23,
    address:"marathalli"
}
  