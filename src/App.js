
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Switch, Route,  } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import NavbarComp from './components/miNavbar';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
import Details from './components/Details';
import SinPermiso from './components/sinPermiso';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/sinPermiso" component={SinPermiso} /> 
      


     <div> 
      <NavbarComp/>
      <Route path="/home" component={Home} />
      <Route path="/createForm" component={CreateForm} />
      <Route path="/editForm/:id" component={EditForm} />
      <Route path="/Details/:id" component={Details} />
     </div>

     </Switch>
    
    </BrowserRouter>
  );
}

export default App;
