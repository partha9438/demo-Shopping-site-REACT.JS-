import React, { Component,createRef } from "react";
import "./page1.css";
import TableDataPage from "./TableDataPage";
 class Inputpage extends Component {
    
  constructor(){
    super();

    this.state={
      nameRef:createRef(),
      emailRef:createRef(),
      phoneRef:createRef(),
      dataarr:[],
   
    }
  }


handledata=(e)=>{
  e.preventDefault();
  let Name = this.state.nameRef.current.value;
  let Email = this.state.emailRef.current.value;
  let Phone = this.state.phoneRef.current.value;
  // console.log(Name,Email,Phone);
  let student={
    Name,
    Email,
    Phone,
  }
this.setState({dataarr:[...this.state.dataarr,student]})
}

  render() {
    return (
      <div className="body">
        <div className="nav">
          <header>
            <h1><u>Data Base React</u></h1>
            <ul>
              <li>Home</li>
              <li>Form</li>
              <li>Table</li>
            </ul>
          </header>
        </div>
        <div className="form">
          <form onSubmit={this.handledata}>
              <fieldset>
                <legend>Personal Info:</legend>

                <label htmlFor="name">NAME:</label>
                <input type="text" placeholder="ex:Harry" ref={this.state.nameRef}/>

                <label htmlFor="email">EMAIL:</label>
                <input type="text" placeholder="ex:Harry@gmail.com" ref={this.state.emailRef}/>

                <label htmlFor="phone number">PHONE NUMBER:</label>
                <input type="text" placeholder="+91********** " ref={this.state.phoneRef}/>
<button> ENTER THE DATA</button>
              </fieldset>
          </form>
        </div>
        <h1>
          {console.log(this.state.dataarr)}
        </h1>
        <TableDataPage name={this.state.nameRef} email={this.state.emailRef} phone={this.state.phoneRef}></TableDataPage>
    
      </div>
      
    )
  }
}


export default Inputpage;
