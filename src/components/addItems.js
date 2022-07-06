
import '../CSS/signin.css'
import React from 'react';
import { useState } from 'react';
import OutPut from './output';
// import OutPut from './output';

 
function  ToList(props){
   
    //Defining the state
    const [groceryType, setGroceryType] = useState("");
    const [conditionType, setCoditionType] = useState("");
    const [itemName, setItemName] = useState("");
 
    // const [disable, setDisable] = useState(false);

    const Add= (()=>{
         
        console.log(groceryType);
        console.log(conditionType);
        console.log(itemName);
        
          props.Add(groceryType, conditionType, itemName);
 
      })
        return(
            <div className="main">
            <div className="sub-main2">
            <header>
                <form id="tofo-form-main">
                    <h1>Add Items to your list</h1>

                    
                    <select className="select-state"  onChange={(e) => setGroceryType(e.target.value)}>
                        <option>Select Type Of Grocery</option>
                        <option >Breakfast</option>
                        <option >Lunch</option>
                        <option >Supper</option>
                        <option >Snack</option>
                    </select>

                    <select className="select-state"  onChange={(e) => setCoditionType(e.target.value)}>
                        <option>Select state</option>
                        <option >High Priority</option>
                        <option >Moderate</option>
                        <option >Not a Priority</option>
                    </select>

                    <br></br>
                    <input type="text" className="select-state"
                     placeholder="Enter name of your item" 
                     onChange={(e) => setItemName(e.target.value)}></input>

                    <div>
                    <button  
                    //  disabled={disable} onClick={() => setDisable}
                  
                    className="Submit-btn2"  type="Submit" onClick={Add}>ADD TO LIST</button>
                    </div>
                    
                </form>
            </header>
            </div>
            </div>
        )
    }
 

export default ToList;

{/* <option onClick={() => setDisable(true)}>Priority</option>
<option onClick={() => setDisable(true)}>Not Priority</option> */}