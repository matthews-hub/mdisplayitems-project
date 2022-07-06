import React from "react";
// import '../CSS/OutPut'

function OutPut(props){

    return(
        
        <div className="container">
           
        {props.list.map((item) =>(
                <div key={item.id}>

                    {item.listofItems == "priority" ?(
                    <div>
                     
                            <div id="list">
                                <h3 style={{paddingleft:"12px", paddingTop:'25px'}}>{item.groceryType}</h3>
                            </div>
                            <div>
                                <h3 style={{paddingLeft:'290px', paddingTop:'25px'}}>{item.conditionType}</h3>
                            </div>

                            <div>
                                <h3 style={{paddingLeft:"290px", paddingTop:'25px'}}>{item.conditionType}</h3>
                            </div>
                            <div className="priority-color"></div>
                        
                    </div> 
                )  :   (

                     <div>
                            <div>
                                <h3 style={{paddingleft:"12px", paddingTop:'25px'}}>{item.groceryType}</h3>
                            </div>
                        
                            <div>
                                <h3 style={{paddingLeft:"290px", paddingTop:'25px'}}>{item.conditionType}</h3>
                            </div>

                            <div>
                                <h3 style={{paddingLeft:"290px", paddingTop:'25px'}}>{item.conditionType}</h3>
                            </div>
                            <div className="none-priority"></div>
                     </div>
                )
                }  
                </div>
            ))}
        </div>
    )   
}

export default OutPut;