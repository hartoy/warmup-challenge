import React, { useState, useEffect } from 'react';
import { Col, Card ,Row ,Button, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './editForm.css'


function EditForm (){


    let history = useHistory();


    useEffect(() => {
        if(localStorage.email === '"challenge@alkemy.org"' && localStorage.pass === '"react"'){
          
      
        }else{
          history.push("/sinPermiso");
        }
      }, []);

 return(
  <Container>
    <Row className="home"> 
         <h2>Estoy en editForm</h2>
    </Row>
  </Container>


 )   
}


export default EditForm;