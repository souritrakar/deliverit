import React from "react"
import swiggy from "./swiggy.png"
import amazon from "./amazon.png"
import fedex from "./fedex.png"
import { NavLink } from 'react-router-dom';
export default class WhoWeCouldWorkWith extends React.Component{
    render(){
        return(
           <div id="workwith">

               <h1 style={{textAlign:"center",fontSize:60,marginTop:20}}>Our possible future business partners:</h1>
               <img  id="delivboy" onClick={()=>{window.location.href="https://www.amazon.com"}} src={amazon} style={{marginLeft:70,marginTop:100,float:"left",width:"24%",height:window.innerHeight/2.5,borderRadius:"50%","pointer-events": "all"}}/>

<img onClick={()=>{window.location.href="https://www.fedex.com"}} id="delivboy"  src={fedex} style={{marginTop:100,float:"right",width:"21%",height:window.innerHeight/2.5,borderRadius:"50%",marginRight:40}}/>

<center><img onClick={()=>{window.location.href="https://www.swiggy.com"}} id="delivboy" src={swiggy}  style={{width:"21%",borderRadius:"100%",height:window.innerHeight/2.5,marginTop:100}}/></center>
<br/>
          <br/>
          <br/>
          <br/>
    
       
         

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