import React from "react";

function form() {
    return(
        <div>
        <form action="">
            <fieldset>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="enter your name" required/>
                <label htmlFor="">Phone number</label>
                <input type="text" placeholder="enter your phone number" required />
                <label htmlFor="">Email</label>
                <input type="text" placeholder="enter your email" required />
            </fieldset>
        </form>
        </div>
    )
}
export default form;