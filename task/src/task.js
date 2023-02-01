import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Task (){

      function add(){
        var s="";

        s+=`<input type="text" id="username1" placeholder="Name" className="p-2 m-3"/>
        <input type="email" id="email1" placeholder="Email" className="p-2 m-3"/>
        <input type="number" id="mobile1" placeholder="Mobile"  className="p-2 m-3"/>
        <input type="text" id="pan1" placeholder="PAN" className="p-2 m-3"/> <br/>`;
    
        document.getElementById("sa").innerHTML=s;
        document.getElementById("username").value="";
        document.getElementById("email").value="";
        document.getElementById("mobile").value="";
        document.getElementById("pan").value="";

      }

      var temp="";
      var temp1="";
      function data(){

      

        var username=document.getElementById("username").value;
        var email=document.getElementById("email").value;
        var mobile=document.getElementById("mobile").value;
        var pan=document.getElementById("pan").value;

        //   var username1=document.getElementById("username1").value;
        // var email1=document.getElementById("email1").value;
        // var mobile1=document.getElementById("mobile1").value;
        // var pan1=document.getElementById("pan1").value;

        var result=document.getElementById("result");
        temp+=`<tr><td>${username}</td><td>${email}</td><td>${mobile}</td><td>${pan}</td></tr>`;
        // temp1+=`<tr><td>${username1}</td><td>${email1}</td><td>${mobile1}</td><td>${pan1}</td></tr>`;
        result.innerHTML=temp;

      }
    return(
      <>
      <div className="container-fluid">
        <input type="text" id="username" placeholder="Name" className="p-2 m-3"/>
        <input type="email" id="email" placeholder="Email" className="p-2 m-3"/>
        <input type="number" id="mobile" placeholder="Mobile"  className="p-2 m-3"/>
        <input type="text" id="pan" placeholder="PAN" className="p-2 m-3"/>  
        <button className="text-primary m-3" onClick={add}>ADD ROW</button><br/>
        <div id="sa" className="container-fluid">

        </div>
      </div>
      <div className="text-center p-3">  
        <button className="text-primary p-2" onClick={data}>SAVE</button>
      </div>
      <div>
        <table className="table table-bordered table-responsive">
          <thead>
            <th>Username</th>
            <th>email</th>
            <th>Mobile Number</th>
            <th>Pan Id</th>
          </thead>
          <tbody id="result">

          </tbody>
        </table>
      </div>
      </>
    );
}