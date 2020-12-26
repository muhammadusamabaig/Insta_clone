import React,{useState} from 'react';
import {Toast} from 'react-bootstrap'
export default function ToastMesseg(props) {

    const [show, setShow] = useState(true);

    
    return (
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-4 d-md-block d-none" >
          <Toast onClose={()=>setShow(false)} show={show} style={{background:props.customBackground,padding:"5%",color:"white"}} delay={3000} >
            <Toast.Header>
              {/* <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              /> */}
              {/* <strong className="mr-auto"></strong> */}
              {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body>{props.toastText}</Toast.Body>
          </Toast>
        
        
        </div>
      </div>
    );
  }
  
