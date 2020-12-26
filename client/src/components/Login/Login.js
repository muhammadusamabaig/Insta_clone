import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function Login() {

  return (
    <div style={{width:"100%",overflow:"hidden"}}>
    <div style={{marginTop:"10%",fontFamily:"Lobster Two"}}>
              <h1 className="col-12 d-flex justify-content-center">Instagram</h1>

</div>
<div className="row">
    <div className="col-12 d-flex justify-content-center">
<form style={{width:"60%"}}>
  <div>
  <TextField id="gmail-standard-basic" label="Gmail"  style={{width:"100%",marginTop:"2%"}}/>
  <TextField id="passowrd-standard-basic" label="Password"  style={{width:"100%",marginTop:"2%"}}/>
  <button className="btn" style={{width:"100%",marginTop:"2%",fontSize:"120%",fontFamily:"Lobster Two"}}>SingUp</button>

  </div>

</form>
</div>
</div>
</div>
  );
}




