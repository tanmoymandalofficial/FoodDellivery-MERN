import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'

export default function Signup() {


    const [userData, setUserData] = useState({name:'',email:'',location:'',password:''})

    const HandleChange = (event)=>{
        setUserData({...userData, [event.target.name]:event.target.value})
    }

    const HandleSubmit = async (e)=>{
        e.preventDefault();

        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // const responce = await fetch('http://localhost:5000/api/creatuser',{
        //     method:'POST',
        //     header:{
        //        'Content-Type':'application.json'
        //     },
        //     body: JSON.stringify({name:userData.name, email:userData.email, location:userData.location,  password:userData.password})
            
        //         // method: 'POST',
        //         // headers: myHeaders,
        //         // body: JSON.stringify({name:userData.name, email:userData.email, location:userData.location,  password:userData.password}),
        //         // redirect: 'follow'
            
        // })
        
        // const json = await responce.json();
        // console.log(json);

// ***************************
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "name": userData.name,
        "email": userData.email,
        "password": userData.password,
        "location": userData.location
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:5000/api/creatuser", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }






  return (
    <div className='container' style={{margin:'50px auto', maxWidth:'50%', textAlign:'left'}}>
        <form onSubmit={HandleSubmit}>
            <h4 style={{textAlign:'center', margin:'15px auto'}}>Signup</h4>
            <div class="mb-3">
                <label for="name" style={{marginLeft:'30px'}} class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name='name' value={userData.name} onChange={HandleChange}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" style={{marginLeft:'30px'}} class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" name='email'  onChange={HandleChange} value={userData.email} aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="location" style={{marginLeft:'30px'}} class="form-label">Address</label>
                <input type="text" class="form-control" id="location"  value={userData.location}  onChange={HandleChange} name='location'/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1"style={{marginLeft:'30px'}}  class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"  onChange={HandleChange} value={userData.password} name='password'/>
            </div>
            <button type="submit" style={{marginLeft:'30px'}} class=" m-3 btn btn-primary">Submit</button>
            <Link to='/login' className='m-3 btn-danger btn'> Already a User</Link>
        </form>

    </div>
  )
}
