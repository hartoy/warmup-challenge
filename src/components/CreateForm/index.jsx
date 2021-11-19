import React, { useState, useEffect } from 'react';
import { Col, Card ,Row ,Button, Container, Form } from 'react-bootstrap';
import Axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import './createForm.css'


function CreateForm (){
    
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const [newPost, setNewPost] = useState('');

     
    let history = useHistory();

    useEffect(() => {
        if(localStorage.email === '"challenge@alkemy.org"' && localStorage.pass === '"react"'){
          
      
        }else{
          history.push("/sinPermiso");
        }
      }, []);

      const CreateHandler = async (data) => {
        let id = parseInt(data.userId);
        let response = await Axios.post(
          `https://jsonplaceholder.typicode.com/posts`,JSON.stringify({
            title: title,
            body: body,
            userId: userId,
          }),
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }  
        );
        setNewPost(response.data);
        console.log(newPost);
        alert("Nuevo Post creado");
      };



     


 return(
  <Container>
    <Row className="home"> 
    <div className="form">
       <p className="tittleForm" >Create New Post</p>
       <h3>Title</h3>
      <Form.Control type="text" placeholder="Insert Title" value ={title} onChange={(e) => setTitle(e.target.value)}/>
     
       <br />
       <h3>Body</h3>
      <Form.Control size="text" type="text" placeholder="Insert Body" value ={body} onChange={(e) => setBody(e.target.value)}/>
      
      <br />
      <h3>User id</h3>
      <Form.Control size="text" type="number" placeholder="Insert user Id" value ={userId} onChange={(e) => setUserId(e.target.value)}/>
      
      <Button className ="createButton"  onClick={CreateHandler} > Create</Button>
      </div>
    </Row>
  </Container>


 )   
}


export default CreateForm;