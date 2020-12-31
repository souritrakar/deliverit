import React, { Component } from 'react';
import lowpolybg from "./lowpolybg.jpeg"
import "./index.css"
import { NavLink } from 'react-router-dom';
class Home extends Component{
    render(){
        return(
            <div  className="homediv">
      <div id="banner">

          <h1 style={{textAlign:"center",fontSize:70,color:"#203A43"}}>
              
          <span class="text_1">Delivery? Not a problem.</span>
          <span class="text_2">Mail/Courier? Not a problem.</span>
   

              
              </h1>
          <h2 style={{textAlign:"center" ,fontSize:30,marginTop:30,color:"#0082c8"}}>Get things delivered fast using DeliverIt.</h2>
      </div>
      <div className="bannerflex">
      <div id="banner2">

            <h1 style={{textAlign:"center",fontSize:63,paddingTop:50,color:"#243B55"}}>How does it work?</h1>

            <div class="buttons">
              <div class="container">
  
                 <NavLink to="/deliverit/howitworks" class="btn effect01" ><span>FIND OUT</span></NavLink>
                 </div>
            </div>
    </div>
            <div className="banner3">
                 <h1 style={{textAlign:"center",fontSize:63,paddingTop:50,color:"#182848"}}>What services do I get?</h1>


                <div class="buttons">
                    <div class="container">
     
                         <NavLink to="/deliverit/services" class="btn effect01" ><span>KNOW MORE</span></NavLink>
                     </div>
                </div>
            </div>
    </div>
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
<NavLink style={{color:"white", textDecoration:"none"}} to="#">
<h3>Terms</h3>
</NavLink>
<br/>
<NavLink style={{color:"white",textDecoration:"none"}} to="#">
<h4 style={{marginBottom:5}}>Privacy Policy</h4>
</NavLink>
</ul>


<br/>

</div>

            </div>
            
        );
    }
}
export default Home;