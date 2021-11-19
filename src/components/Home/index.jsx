import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Col, Card ,Row ,Button, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './home.css'


import imgLoading from "../../img/imgLoading.png";

function Home (){
  
  const [ isLoading, setIsLoading ] = useState(true);
  const [users, setUsers] = useState([])


  let history = useHistory();


  useEffect(() => {
    if(localStorage.email === '"challenge@alkemy.org"' && localStorage.pass === '"react"'){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        setUsers(users)
        setIsLoading(false)
      })
  
    }else{
      history.push("/sinPermiso");
    }
  }, []);


  const RemoveHandler = async (e) => {
    const postId =e.target.dataset.id
    let response = await Axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    if (response.status === 200) {
      const newUser = users.filter((postToDelete) => postToDelete.id != postId);
      setUsers(newUser);
      console.log(newUser);
      alert("borrado");
    } else {
      alert("error to delete");
    }
  };

 return(
  <Container>
    <Row className="home"> 
    <Button className ="createButton" as={Link} to={`/CreateForm/`}> Create</Button>
    { isLoading && 
            <div className= "cargando">
              <h3 className="loading"> Loading...</h3>  
              <img className="imgLoading" src={imgLoading} alt="" />
              
           </div>
          }


         {users.length > 0 &&
           
  users.map((oneUser, idx) => {
    return (
        <ul>
          <li className="eachUser" >Titulo:  {oneUser.title}</li>
          <Button className ="botoneta" as={Link} to={`/Details/${oneUser.id}`}> Details</Button>
          <Button className ="botoneta" as={Link} to={`/editForm/${oneUser.id}`}> Edit</Button>
          <Button className ="botoneta" data-id={oneUser.id} onClick={RemoveHandler}> Delete</Button>
        </ul>
    );
  })}

    </Row>
  </Container>


 )   
}


export default Home;