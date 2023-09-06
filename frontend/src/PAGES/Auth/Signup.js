import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import './AuthPage.css';
import axios from 'axios';
const Signup = () => {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });

      const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({firstName:formData.firstName, lastName: formData.lastName, email: formData.email, password: formData.password})
          });
          const json =await response.json()
          console.log(json);
          if (json.success) {
            navigate('/login');
          }
        } catch (error) {
          console.error('Error registering user:', error);
        }
      };
    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false}/>

            <div className='authcont'>
                <img src='https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                    alt='signup' />

                <form className='authform' onSubmit={handleSubmit}>
                    <h1>Signup</h1>
                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='fname'>First Name</label>
                            <input type='text' id='fname' name ='firstName' onChange={handleChange} value={formData.firstName}/>
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='lname'>Last Name</label>
                            <input type='text' id='lname' name ='lastName' onChange={handleChange} value={formData.lastName} />
                        </div>
                    </div>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name ='email' onChange={handleChange} value={formData.email} />
                    </div>

                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' name ='password' onChange={handleChange} value={formData.password}/>
                        </div>
                    </div>

                    <Link to='/login'
                        className='stylenone'
                    >
                        <p>Already have an account?</p>
                    </Link>
                        <button className='btn'>Signup</button>
                </form>
            </div>
            
        </div>
    )
}

export default Signup