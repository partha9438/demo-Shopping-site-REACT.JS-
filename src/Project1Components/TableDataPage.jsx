import React, { Component } from "react";
import "./page1tab.css";
 class TableDataPage extends Component {
constructor(){
  super();
  this.state={

  }
}

  render(){

    return(
<div>
      <table id="details">o
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>

        
            <tr>
              {console.log(this.props)}
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
 }
export default TableDataPage;