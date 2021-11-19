import React, { useState, useEffect } from 'react';
import { Col, Card ,Row ,Button, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './details.css'


function Details (props){

    const id = props.match.params.id;
    
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(false);
   
    let history = useHistory();

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

 return(
  <Container>
    <Row className="home"> 
         {loading &&
         
         <ul>
             <li> Id: {user.id} </li>
             <li> Body: {user.body} </li>
             <li> Title: {user.title} </li>
             <li> UserId: {user.userId} </li>
         </ul>
         
         
         
         }
         
         
    </Row>
  </Container>


 )   
}


export default Details;