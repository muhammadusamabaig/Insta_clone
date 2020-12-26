import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import ToastMesseg from '../Utils/Toast.js'

export default function Singup() {

  const [toast,settoast]=useState(false)
  const [customBackground,setcustomBackground]=useState('')
  const [toastText,settoastText]=useState("")

const [username,setusername]=useState('')
const [gmail,setgmail]=useState('')
const [password,setpassword]=useState('')
const PostData=()=>{
  console.log("chaaaaala")
fetch('/singup',{
  method:"post",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    username:username,
    password:password,
    gmail:gmail
  
  })
}).then(res=>res.json()).then((data)=>{

if(toast){
  settoast(false)

}
settoast(true)
console.log(data)
if(data.status=="SingUp SucessFully"){
setcustomBackground('green')
settoastText("SingUp SucessFully")
window.location.assign('/login')

}
if(data.status=="please add all Fields"){
  setcustomBackground('red')
  settoastText("please add all Fields")
  }
  if(data.status=="already exist"){
    setcustomBackground('red')
    settoastText("already exist")
    }
})
}
  return (
    
    <div style={{ width: "100%", overflow: "hidden" }}>
      

  {toast===true&&
<div style={{position:"absolute",left:"70%",top:"80%",width:"100%"}}>  <ToastMesseg customBackground={customBackground} toastText={toastText} toast={true}/></div>

}

      
          <div style={{marginTop:"10%",fontFamily:"Lobster Two"}}>
                    <h1 className="col-12 d-flex justify-content-center">Instagram</h1>

      </div>
      <div className="row" >
          <div className="col-12 d-flex justify-content-center">
    <div style={{width:"60%"}}>
        <div>
        <TextField id="username-standard-basic" value={username} onChange={(e)=>{setusername(e.target.value)}} label="Username"  style={{width:"100%"}}/>
        <TextField id="gmail-standard-basic" value={gmail} label="Gmail" onChange={(e)=>{setgmail(e.target.value)}}  style={{width:"100%",marginTop:"2%"}}/>
        <TextField id="password-standard-basic" value={password} label="Password" onChange={(e)=>{setpassword
          
          (e.target.value)}} style={{width:"100%",marginTop:"2%"}}/>
        <button className="btn" onClick={()=>(PostData())} style={{width:"100%",marginTop:"2%",fontSize:"120%",fontFamily:"Lobster Two"}}>SingUp</button>

        </div>

    </div>
    </div>
      </div>
      </div>
  );
}