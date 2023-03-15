import React from 'react';
import { Navigate } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import backgroundImage from "../StaticImages/kapak.jpg"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { createHashHistory } from 'history'

class Home extends React.Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      redirect:false
  }

  }
  onChange=(params)=> {
  this.setState({name:params.target.value.replace(/ /g,'')})
 }

 render() {
  const history = createHashHistory()

  return (
  
    <div className="home-container" style={{backgroundImage:`url(${backgroundImage})`
    ,display:'flex',height:"100vh",backgroundColor:'#FFF4EE',justifyContent:'center',alignItems:'center'}}>
      <div style={{padding:'30px',opacity:'0.8', width:"50vh",border:'3px solid #fff',borderRadius:'10px',backgroundColor:'white',boxShadow:"5px 4px 6px 5px rgb(86 38 223 / 10%)"}}>
      <h1 style={{color:'#352477'}}>Öykünü Oluştur</h1>
        <div style ={{height:"20px"}}></div>
      <h6 style={{color:'#352477'}}>Genel kültürünü destekleyen, yazma ve okuma becerini geliştiren bir kitap
</h6>
<div style ={{height:"5px"}}></div>

      <FloatingLabel
        controlId="floatingInput"
        label="Çocuğun Adı"
        placeholder='Tuğçem'
        className="mb-3"
        ref={this.state.name}
        onChange={this.onChange}

      >
        <Form.Control style = {{border:'3px solid #352477'}}type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <Button style= {{backgroundColor:'#352477'}} variant="primary" size="lg" onClick={()=>{
        history.push('/')

        this.setState({redirect:true})}}>
        ÖN İZLEME
      </Button>
      { 
   this.state.redirect && <Navigate to={"story/"+this.state.name} replace={true}/>
}
      </div>
  
    </div>
  ); 
}
}

export default Home;
