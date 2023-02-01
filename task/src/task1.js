import React from "react";
// import Task2 from "./task2";
import {Link} from 'react-router-dom'
import axios from 'axios';

export default function Task1(){


    const handlesubmit = (e) => {
        e.preventDefault();
        var datastring = new FormData(e.target);
        var config = {headers : {"enctype":"multipart/form-data"}};

         axios.post('http://localhost:3004/Add',datastring,config)
              .then(function(res){
                if(res.data.status === 'success'){
                    alert('Inserted');
                    window.location.reload();
                }
                else if(res.data.status === 'error'){
                    alert('Not Inserted');
                    window.location.reload();
                }
              })
              .catch(function(error){
                    alert(error);
                    window.location.reload();
              })

    }


    return(
       <>
        <form onSubmit={handlesubmit}>
         <h1>Component A</h1>
         <div className="text-right container">
            <button type="submit" value="submit" className="btn " name="submit">Save</button>
         {/* <input type="submit" value="Save" className="p-2" /> */}
         </div><br/>
         <div className="row m-2">
           
          <input type="text" name="name" id="name" placeholder="Name" className="p-2 col-lg-12 m-2"/>
          <input type="email" name="email" id="email" placeholder="Email" className="p-2 col-lg-12 m-2"/>
          <input type="number" name="mobile" id="mobile" placeholder="Mobile" className="p-2 col-lg-12 m-2"/>

         </div>
         </form>
       </>
    );
}
