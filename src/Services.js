import React, { Component } from 'react';
import lowpolybg from "./lowpolybg.jpeg"
import "./index.css"
import { NavLink } from 'react-router-dom';
import userprofile from "./userprofile.png"
import maplocation from "./maplocation.png"
import delivered from "./delivered.jpg"

export default class Services extends React.Component{
    render(){
        return(
            <div className="servicesdiv">
           <center><h1 style={{fontSize:60}}>Our services. Hire one today!</h1></center> 
        <img  id="delivboy" onMouseOver={()=>{alert("You can hire a delivery boy to get things delivered to other locations - quick, touch-less and efficiently. Delivery Status & other info can be tracked in the app.")}} src="https://img.etimg.com/thumb/msid-75694927,width-1200,height-900,imgsize-95217,overlay-economictimes/photo.jpg" style={{marginLeft:70,marginTop:100,float:"left",width:"16%",height:250,borderRadius:"100%","pointer-events": "all"}}/>

         <img id="delivboy" onMouseOver={()=>{alert("You can hire a mailmain to deliver your mail to someone else. You can also get YOUR mails from another person through DeliverIt")}} src="https://thumbs.dreamstime.com/b/black-mailman-character-letter-happy-black-mailman-hat-bag-cartoon-character-holding-letter-isolated-white-174553109.jpg" style={{marginTop:100,float:"right",width:"16%",height:250,borderRadius:"100%",marginRight:40}}/>
        
  <center><img id="delivboy" onClick={()=>{alert("You can hire a postman to deliver your parcels/packages to someone else. It could be a card, or a gift etc.")}} style={{marginTop:100,width:"16%",height:250,borderRadius:"100%"}} src="data:image/png;base64,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" /></center>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
                 <br/>

          <div id="aboutbanner">

<h1 style={{textAlign:"center",color:"cadetblue"}}>Need any help?</h1>
<br/>
<br/>

<ul>
    <NavLink style={{color:"white",textDecoration:"none"}} to="/deliverit/about/">
<h3 >Team</h3>
</NavLink>
<br/>
<NavLink style={{color:"white", textDecoration:"none"}} to="/#">
<h3>Terms</h3>
</NavLink>
<br/>
<NavLink style={{color:"white",textDecoration:"none"}} to="/deliverit/howitworks">
<h4 style={{marginBottom:5}}>How does it work?</h4>
</NavLink>
</ul>


<br/>

           </div>
           </div>

        )
    }
}