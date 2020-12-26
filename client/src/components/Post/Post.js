import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import ToastMesseg from '../Utils/Toast.js'

export default function Post() {

  const [toast,settoast]=useState(false)
  const [customBackground,setcustomBackground]=useState('green')
  const [toastText,settoastText]=useState("Post Succesfully")
  const [image,setimage]=useState("")

const [title,settitle]=useState('')
const [body,setbody]=useState('')
const PostData=()=>{
  const data=new FormData()
  data.append('file',image)
  console.log(image)
  data.append('upload_preset','insta-clone')
  data.append('cloud_name','fuuast')

fetch("https://api.cloudinary.com/v1_1/fuuast/image/upload",{
  method:"post",
  body:data
}).then(res=>res.json()).then((data)=>{
  // setimage(data)
  console.log(data)
})
fetch('/create_post',{
  method:"post",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    Tile:title,
    Body:body
  })
}).then(res=>res.json()).then((res)=>{
  console.log(res)
})

settoast(true)
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
        <TextField id="gmail-standard-basic" value={title} label="Title" onChange={(e)=>{settitle(e.target.value)}}  style={{width:"100%",marginTop:"2%"}}/>
        <TextField id="password-standard-basic" value={body} label="Body" onChange={(e)=>{setbody(e.target.value)}} style={{width:"100%",marginTop:"2%"}}/>
<input type="file" onChange={(e)=>{setimage(e.target.files[0])}}/>
        <button className="btn" onClick={()=>(PostData())} style={{width:"100%",marginTop:"2%",fontSize:"120%",fontFamily:"Lobster Two"}}>SingUp</button>

        </div>

    </div>
    </div>
      </div>
      </div>
  );
}