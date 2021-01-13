import React from 'react';
import Navbar from '.';
import Footer from '../components/brandlogo/Footer';

function SpecialListPortal(props){
    return(
        <div className="speciallistportal-1">
           <Navbar/>
         <div className="register-page">
             <form style={{display:"block",margin:"0 auto",border:"1px solid red",width:"auto",height:"auto",borderRadius:"8px",flexWrap:"wrap"}}>
                 <div style={{display:"block"}}>
                 <div style={{width:"100%",height:"150px",background:"#F8CDDA",borderRadius:"2% 2% 90% 70% / 100% 100% 100% 100%",transform:"scaleX(1)"}}>
                     <h4 style={{display:"block",margin:"0 auto",width:"8rem",color:"whitesmoke",lineHeight:"160px"}}>Create Account</h4>
                     <h6 style={{marginTop:"-60px",marginLeft:"55px"}}>Please Sign-up to continue</h6>
                 </div>
                 <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px",marginBottom:"5px"}}>
                 <input type="text" placeholder="Full Name" style={{height:"30px",width:"250px"}}/>
                 </div>

                 <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"5px"}}>
                 <input type="email" placeholder="Email" style={{height:"30px",width:"250px"}}/>
                 </div>

                 <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"5px"}}>
                 <input type="password" placeholder="Password" style={{height:"30px",width:"250px"}}/>
                 </div>

                 <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"5px"}}>
                 <input type="text" placeholder="Comform Password" style={{height:"30px",width:"250px"}}/>
                 </div>

                 <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                     <button type="submit" style={{width:"250px"}}>Signup</button></div>
                     <span style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>Already have an account ?<small>sign in</small></span>
                 </div>
             </form>
         </div>
         <Footer/>
        </div>
    );
}
export default SpecialListPortal;