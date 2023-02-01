import {React,useState,useEffect} from "react";

export default function Task2(){


    const [employeelist,setEmployeelist] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3004/addlist')
    .then((res)=>res.json())
    .then((json)=>setEmployeelist(json));


    },[]);
    return(
       <>
         <h1>Component B</h1>
         <div className="text-right container">
          <input type={"button"} value="Edit" className="p-2"/>
         </div><br/>
        <div> 
         <table className="table table-bordered tableresponsive">
            <thead>
             <th>Name</th>
             <th>Email</th>
             <th>Mobile</th>
            </thead>
            <tbody>
                {
                    employeelist.map((v,index)=>(
                        <tr>
                            <td>{v.name}</td>
                            <td>{v.email}</td>
                            <td>{v.mobile}</td>
                        </tr>
                    ))
                }
            </tbody>
         </table>
       </div>
       </>
    );
}