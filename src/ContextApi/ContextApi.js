import React,{createContext} from "react";
 
export let userContext= createContext();

function ContextApi({children}){
function datafetch(){
    let data=[{
        name:"partha",
        contactnumber:"9438012114",
        address:"marathalli"
    },
    {
        name:"silu",
        contactnumber:"9438012114",
        address:"dodelkundi"
    }
]
return data
}

    return(
        <userContext.Provider value={datafetch}>
            {children}
        </userContext.Provider> 
    )
}
export default ContextApi;