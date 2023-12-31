import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'

export default function Signup() {


    const [userData, setUserData] = useState({email:'',password:''})

    const HandleChange = (event)=>{
        setUserData({...userData, [event.target.name]:event.target.value})
    }

    const HandleSubmit = async (e)=>{
        e.preventDefault();

// ***************************
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": userData.email,
        "password": userData.password,
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:5000/api/loginuser", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }






  return (
    <div className='container' style={{margin:'50px auto', maxWidth:'50%', textAlign:'left'}}>
        <form onSubmit={HandleSubmit}>
            <h4 style={{textAlign:'center', margin:'15px auto'}}>Login</h4>
            <div class="mb-3">
                <label for="exampleInputEmail1" style={{marginLeft:'30px'}} class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" name='email'  onChange={HandleChange} value={userData.email} aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1"style={{marginLeft:'30px'}}  class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"  onChange={HandleChange} value={userData.password} name='password'/>
            </div>
            <button type="submit" style={{marginLeft:'30px'}} class=" m-3 btn btn-primary">Submit</button>
            <Link to='/creatuser' className='m-3 btn-danger btn'> I am a new user</Link>
        </form>

    </div>
  )
}
