import React, { Component } from 'react';
import emailjs from "emailjs-com"
class Contact extends Component{
    sendEmail=(e)=>{
        e.preventDefault()
        emailjs.sendForm("service_zwoliyp","template_bqx0l5i",e.target, "user_EcBb3qPGhB7OSmnOdVoUU")
        alert("Email sent")
       window.location.reload()
      }
    
      componentDidMount(){
        document.addEventListener('contextmenu',event=>{
          event.preventDefault()
        })
      }
    render(){
        return(
            <div id="contactdiv" style={{marginTop:"2%"}}>
               <center><h1 style={{fontSize:40,color:"darkkhaki"}}>Always available for you.</h1></center>
               <br/> 
      <form className="formdiv" onSubmit={this.sendEmail} >
      <h1 style={{marginBottom:"10%"}}>Fill in these details:</h1>

      <label>
        Email:
        <input
          name="to_email"
          type="email"
          placeholder="Enter your email here..."
        
          
          required />
      </label>
      

      <label>
      Name:
        <input
          name="name"
          type="text"
       
          placeholder="Enter your name here..."
          required />
      </label>

     <label>
       <textarea name="message" required id="textarea1" rows="9" style={{fontFamily:"Raleway, sans-serif" ,marginLeft:"5%"}} cols="50" placeholder="Enter message here"/>
     </label>
      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
       
          required />
        I accept that I am sending a mail to another email address      
      </label>

      <button id="submitbtn">Submit</button>
    </form>
    <center><h1 style={{fontSize:50,marginTop:"2.4%",color:"#0082c8"}}>Or call us at +91-9836050400.</h1></center>
    <br/>
    <br/>
    
            </div>
        );
    }
}
export default Contact;