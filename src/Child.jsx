import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Table.css"
class Child extends Component{
    constructor (props){
        super(props)
        this.state={
           data:[],
           user:[]
        }
    }




componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(a=>{return a.json()})
    .then(a=>{this.setState({data:a})})
    .catch(arr=>{console.log(arr)})
}
 handleuser=(user)=>{
    this.setState({user:user})}
    
 deleteuser=(a)=>{
    let arr=[];
    this.state.data.filter(value=>{
       if(value.id !==a.id){
       arr.push(value)}})
       this.setState({data:arr})
    }   
    
 

render(){
    return(
        <div>
            <h1>child class component</h1>
            {console.log(this.state.data )}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Details</th>
                        <th>Delete user</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map(a=>{
                            return (
                              <tr key={a.id} onClick={()=>this.handleuser(a)}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td>{a.phone}</td>
                                <td>{a.address.city},{a.address.street}</td>
                                <td><button onClick={()=>this.handleuser(a)}>Details</button></td>
                                <td><button onClick={()=>this.deleteuser(a)}>Delete</button></td>
                                
                            </tr>
                        )
                        }
                        )
                    }
                </tbody>
            </table>
            {
                <div>
                    <h1>{this.state.user.name}</h1>
                    <h1>{this.state.user.email}</h1>
                   <div>{this.state.user.address===undefined?<h1>loading</h1>:<h1>{this.state.user.address.city}</h1>}</div>
                    


                </div>
                
            }
        </div>
    )
}
}
export default Child