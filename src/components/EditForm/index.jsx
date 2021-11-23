import React, { useState, useEffect } from 'react';
import { Col, Card ,Row ,Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Axios from "axios";
import './editForm.css'


function EditForm (props){

    const id = props.match.params.id;
 
    let history = useHistory();
    

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');
    const [newPost, setNewPost] = useState('');



    useEffect(() => {
      
        const getPost = async () => {
          let response = await Axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
          );
            setTitle(response.data.title);
            setBody(response.data.body);
            setUserId(response.data.userId);
            console.log(response);
        };
        getPost();
      
    }, []);




    const EditHandler = async () => {
      let response = await Axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,JSON.stringify({
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
      setNewPost(response);
      console.log(response.data);
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