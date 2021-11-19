import React, { useState, useEffect } from 'react';
import { Col, Card ,Row ,Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Axios from "axios";
import './editForm.css'


function EditForm (props){

    const id = props.match.params.id;
    let history = useHistory();
    

    const [ user, setUser ] = useState("");
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
      if(localStorage.email === '"challenge@alkemy.org"' && localStorage.pass === '"react"'){
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => {
            return response.json()
          })
          .then((user) => {
            setUser(user)
            console.log(user);
            setLoading(true)
          })
    
      }else{
        history.push("/sinPermiso");
      }
    }, []);


    const EditHandler = async (data) => {
      let response = await Axios.post(
        `https://jsonplaceholder.typicode.com/posts/:id`,JSON.stringify({
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
      //setNewPost(response.data);
      //console.log(newPost);
      //alert("Nuevo Post creado");
    };



 return(
  <Container>
    <Row className="home"> 
    <div className="form">
       <p className="tittleForm" >Edit Post</p>
       <h3>Title</h3>
      <Form.Control type="text" placeholder="Insert Title" value ={user.title}/>
     
       <br />
       <h3>Body</h3>
      <Form.Control size="text" type="text"  as="textarea" rows={4} placeholder="Insert Body" value ={user.body}/>
      
      <br />
      <h3>User id</h3>
      <Form.Control size="text" type="number" placeholder="Insert user Id" value ={user.userId}/>
      
      <Button className ="createButton" onClick={EditHandler} > Create</Button>
      </div>
    </Row>
  </Container>



 )   
}


export default EditForm;