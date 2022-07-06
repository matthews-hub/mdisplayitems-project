 
import './App.css';
import Login from './components/signin';
import ToList from './components/addItems';
import Welcome from './components/welcome';
import {link} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {useState} from 'react';
import OutPut from './components/output';
 

function App(props) {

  const [listofItems, setlistofItems] = useState ([]);

  const addTransact = ((groceryType, conditionType, itemName) =>{

      setlistofItems((item)=>[...item,{
        groceryType:groceryType,
        conditionType:conditionType,
        itemName:itemName,
      }])

      console.log(addTransact)
  })
  return (
    <div className="App">
    
      <Router>
        <Switch>
            <Route exact path="/" component={Welcome}></Route>
            <Route exact path="/signin" component={Login}></Route>
            <Route  path="/addItems" component={ToList} Add={addTransact}></Route>
             
            <OutPut></OutPut>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
