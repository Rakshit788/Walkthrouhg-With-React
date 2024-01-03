import { useState } from "react";
import "./Instagram.css"


function InstaGram(){

    
 
const  [account, Setaccount] = useState(true) // true value means person have the account ;
const [isclicked, Setisclicked] = useState(true)
function changevalue(){
    Setaccount(!account)
    Setisclicked(!isclicked)

}









return (
    <>

    
 
    <div className={`page ${(isclicked) ? '' : 'clicked'}`}>
<img src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png" alt="" id="img1" />

{
    (!account) && (
      <div className="inputwrapper">
<input type="text" className="inputtag "   placeholder="Mobile number or Email "/>
<input type="text" className="inputtag " placeholder="Full Name " />   
</div>
        
    )
}

<div className="inputwrapper">
    
<input type="text" className="inputtag" id={(isclicked) ? '' : 'clickedid' }  placeholder="Phone number,username or email "/>
<input type="text" className="inputtag" placeholder="Password" />
</div>

<button className="btn"  >{(account) ? "Sign in" :  "Sign up"}</button>

<div className="tagwrapper">
    <a href="" className="tags">{(account) ? "Don't have an account ?" :  "Have an account?"}</a>
  <button className="changebtn"onClick={changevalue}>{(account) ? "Sign up" :  "Sign in"}</button>
</div>


    </div>
     

    </>
)
}

export default InstaGram;