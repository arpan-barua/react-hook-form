import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import './App.css';

function App() {
  const {register, handleSubmit, formState: { errors }, reset} = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data)=>{
    setUserInfo(data);
    reset();
    console.log(data);
    console.log(errors)
  }
  
  
  return (
    <div className="App">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>User Name</label>
        <input type="text" placeholder="Username" {...register("username",{required:true})}/>
      </div>
      {errors.username && <p>Username is required</p>}
      <div>
        <label>Email</label>
        <input type="email" placeholder="Email" {...register("email",{required:true, pattern:/^\S+@\S+\.\S+$/})}/>
      </div>
      {errors.email && <p>Email is required</p>}
      <div>
        <label>Password</label>
        <input type="password" placeholder="Password" {...register("password",{required:true, minLength:4, maxLength:8})}/>
      </div>
     {errors.password && <p>Password is required</p>}
      
      <input type="submit" />
      
    </form>  
    </div>
  );
}

export default App;
