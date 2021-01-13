import React from 'react';
import Navbar from '.';
import Footer from '../components/brandlogo/Footer';

function Login(){
    return(
        <div className="login-1">
        <Navbar/>
         <div className="register-page">
             <form style={{display:"block",margin:"0 auto",border:"1px solid red",width:"auto",height:"auto",borderRadius:"8px",flexWrap:"wrap"}}>
                 <div style={{display:"block"}}>
                 <div style={{width:"100%",height:"150px",background:"#2980b9",borderRadius:"2% 2% 90% 70% / 100% 100% 100% 100%",transform:"scaleX(1)"}}>
                     <h4 style={{display:"block",margin:"0 auto",width:"8rem",color:"whitesmoke",lineHeight:"160px"}}>Welcome Back</h4>
                     <h6 style={{marginTop:"-60px",marginLeft:"55px"}}>Please Sign-up to continue</h6>
                 </div>

                 <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"10px",marginTop:"30px"}}>
                 <input type="email" placeholder="Email" style={{height:"30px",width:"250px"}}/>
                 </div>

                 <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"10px"}}>
                 <input type="password" placeholder="Password" style={{height:"30px",width:"250px"}}/>
                 </div>
                 <span style={{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"5px",marginBottom:"15px",color:"#bdc3c7"}}>Forget Password?</span>

                 <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                     <button type="submit" style={{width:"250px",background:"#71B280"}}>Signup</button></div>
                     <span style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>Already have an account ?<small>sign in</small></span>
                 </div>
             </form>
         </div>
         <Footer/>
        </div>
    );
}
export default Login;