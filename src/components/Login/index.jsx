import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Row,  Col, Button, Container } from 'react-bootstrap';
import { Formik } from 'formik';
import Axios from "axios";
import './login.css'





function Login (){
   
const [error,setError] = useState('');
const history = useHistory();



  


 return (
<Container>  
  <Row>
    <h1 className="logTitle">Welcome</h1>
     
    <Col>
    <Formik 
    initialValues={{ 
      email:"",
      password:""
    }}

    validate={(valores)=>{
      let errores = {};

      //Validacion email
      if(!valores.email){
        errores.email = "Por favor ingresa un email"
      }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
        errores.email = "El email tiene caracteres incorrectos"
      }

      //Validacion password
      if(!valores.password){
        errores.password = "Por favor ingresa un contraseña"
      }
      return errores;
    }}

    onSubmit={(valores, {resetForm}) =>{
      Axios({
        method: "post",
        url: "http://challenge-react.alkemy.org/",
        data: {
          email: valores.email,
          password: valores.password,
        },
      })
      .then((res) => {
        localStorage.setItem("token",JSON.stringify(res.data.token));
        history.push('/home');
      })
      .catch(({ response }) => {
        const message = response.data.error;
        const status = `Error ${response.status}: ${response.statusText}`;
        setError(JSON.stringify(`${message}. ${status}`));
      });
      resetForm();     
    }}>


      {( {values, errors, touched, handleSubmit, handleChange, handleBlur} )=>(
         <Form className="formulario" onSubmit={handleSubmit}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            placeholder="Enter email"  
            value={values.email} 
            onChange={handleChange}
            onBlur={handleBlur}
           />
           {touched.email && errors.email && <div className="error">{errors.email}</div>}
         </Form.Group>
   
         <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="text" 
            name="password" 
            placeholder="Enter Password" 
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && <div className="error">{errors.password}</div>}
         </Form.Group>
           {error && <div className="error">{error}</div>}
         <Button className ="loginButton" variant="primary" type="submit">Submit</Button>
         
         
        </Form>
      )}
    </Formik>
   </Col>
  </Row>
</Container> 
 )

}

export default Login;




<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" id="email" name="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="text" id="password" name="password" placeholder="Enter Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>