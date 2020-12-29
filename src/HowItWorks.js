import React from 'react';
import lowpolybg from "./lowpolybg.jpeg"
import "./index.css"
import { NavLink } from 'react-router-dom';
import userprofile from "./userprofile.png"
import maplocation from "./maplocation.png"
import delivered from "./delivered.jpg"
import valuecanvas from "./valuecanvas.png"
export default class HowItWorks extends React.Component{
    render(){
        return(
            <div className="worksdiv">
                 <div id="bannerworks">
                 <center><h1 style={{fontSize:60,color:"rebeccapurple",marginTop:250}}>So... how does DeliverIt work?</h1></center>


</div>

<br/>
<br/>
<div style={{display:'flex',flexDirection:"row"}}>
    <h1 style={{marginLeft:320,marginTop:90,fontSize:70,color:"cadetblue",marginRight:10}}>Step 1 :</h1> 
 
    <h1 style={{marginTop:90,fontSize:70}}> Register</h1>
    
    <img src={userprofile} style={{width:"18%",marginLeft:"5%"}}/>

    </div >
    <div style={{color:"red"}} class="buttons" onClick={()=>{alert("You can register as Normal User OR Delivery Boy.This will help us to connect users to delivery boys. Companies like Swiggy can connect to our delivery boys through their app, which sends a request to our app.. ")}}>
                    <div class="container" >
     
                         <NavLink to="#" class="btn effect01" style={{marginRight:window.innerWidth/2}} ><span> MORE</span></NavLink>
                     </div>
                </div>
    <hr style={{color:"cadetblue",width:"67%",marginLeft:"17%",marginTop:"2%",height:"0.3%"}}/>

<br/>
<div style={{display:'flex',flexDirection:"row"}}>
   
    <img src={maplocation} style={{width:"18%",marginLeft:"16%"}} alt="mappicture"/>
    <h1 style={{marginLeft:120,marginTop:90,fontSize:55,color:"cadetblue",marginRight:8}}>Step 2 : </h1> 
    <h1 style={{marginTop:"6.5%",fontSize:48,marginLeft:"1%",textAli:"center"}}> Mark pickup & dropoff
    <div class="buttons" onClick={()=>{alert("Choose the drop off and pickup locations so that the geographically-near delivery boy can pickup and deliver as soon as possible. Incase of Swiggy/Amazon etc, we charge 30 - 35% of the order price.")}}>
                    <div class="container">
     
                         <NavLink to="#" class="btn effect01" style={{marginLeft:window.innerWidth/7}} ><span> MORE</span></NavLink>
                     </div>
                </div>
    </h1>
  
    </div >
    <hr style={{color:"cadetblue",width:"67%",marginLeft:"17%",marginTop:"2%",height:"0.3%"}}/>
<br/>
<div style={{display:'flex',flexDirection:"row"}}>
    <h1 style={{marginLeft:"16%",marginTop:90,fontSize:65,color:"cadetblue",marginRight:10}}>Step 3 :</h1> 
 
    <h1 style={{marginTop:90,fontSize:63}}> Delivered. Boom.</h1>
    
    <img src={delivered} style={{width:"18%",marginLeft:"5%",borderRadius:"50%",height:280}}/>

    </div >
    <div class="buttons" onClick={()=>{alert("The delivery boy delivers the parcel to the provided location. User has to pay with UPI, PayTM, Google Pay, etc. to have a paper/touch-less transaction. If Swiggy/Zomato has hired then the money goes to them. If its a normal Post/Mail service then payments are made through the DeliverIt app. The price may vary according to location.")}}>
                    <div class="container">
     
                         <NavLink to="#" class="btn effect01" style={{marginRight:window.innerWidth/2}} ><span> MORE</span></NavLink>
                     </div>
                </div>
    <hr style={{color:"cadetblue",width:"67%",marginLeft:"17%",marginTop:"2%",height:"0.3%"}}/>

<br/>
<br/>
         <img src={valuecanvas} style={{height:window.innerHeight/1.3,marginLeft:window.innerWidth/6}}/>
         <br/>
          <br/>
          <br/>
          <br/>
          <br/>
      <h1 style={{textAlign:"center",marginBottom:30,color:"#2C7744",fontSize:50}}>DeliverIt app yet to be released.</h1>

          <div id="aboutbanner">

<h1 style={{textAlign:"center",color:"cadetblue"}}>Need any help?</h1>
<br/>
<br/>

<ul>
    <NavLink style={{color:"white",textDecoration:"none"}} to="/about/">
<h3 >Team</h3>
</NavLink>
<br/>
<NavLink style={{color:"white", textDecoration:"none"}} to="/#">
<h3>Terms</h3>
</NavLink>
<br/>
<NavLink style={{color:"white",textDecoration:"none"}} to="/#">
<h4 style={{marginBottom:5}}>Privacy Policy</h4>
</NavLink>
</ul>


<br/>

           </div>
            </div>
        )
    }
}