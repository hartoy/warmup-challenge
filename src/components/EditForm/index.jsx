import React, { useState, useEffect } from 'react';
import { Col, Card ,Row ,Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Axios from "axios";
import './editForm.css'


function EditForm (props){

    const id = props.match.params.id;
    let history = useHistory();
    

    const [ user, setUser ] = useState("");
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
      if(localStorage.email === '"challenge@alkemy.org"' && localStorage.pass === '"react"'){
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => {
            return response.json()
          })
          .then((user) => {
            setTitle(user.title);
            setBody(user.body);
            setUserId(user.userId);
            console.log(user);
          })
    
      }else{
        history.push("/sinPermiso");
      }
    }, []);


    const EditHandler = async (e) => {
      let response = await Axios.post(
        `https://jsonplaceholder.typicode.com/posts/${id}`,JSON.stringify({
          title: user.title,
          body: user.body,
          userId: user.userId,
        }),
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }  
      );
      setNewPost(response.e);
      console.log(newPost);
      alert(" Post modificado");
    };



 return(
  <Container>
    <Row className="home"> 
    <div className="form">
       <p className="tittleForm" >Edit Post</p>
       <h3>Title</h3>
      <Form.Control type="text" placeholder="Insert Title" value ={title}  onChange={(e) => setTitle(e.target.value)}/>
     
       <br />
       <h3>Body</h3>
      <Form.Control size="text" type="text"  as="textarea" rows={4} placeholder="Insert Body" value ={body} onChange={(e) => setBody(e.target.value)}/>
      
      <br />
      <h3>User id</h3>
      <Form.Control size="text" type="number" placeholder="Insert user Id" value ={userId} onChange={(e) => setUserId(e.target.value)}/>
      
      <Button className ="createButton" onClick={EditHandler} > Create</Button>
      </div>
    </Row>
  </Container>



 )   
}


export default EditForm;