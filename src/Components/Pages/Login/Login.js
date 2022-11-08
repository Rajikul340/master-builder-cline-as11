import React from 'react';
import { UserContext } from '../../AuthContext/AuthContex';
import {useContext} from 'react';
import {Link} from 'react-router-dom';


const Login = () => {
    const{emailLogin} = useContext(UserContext)



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        emailLogin(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(err=>{
            console.log(err);
        })
           
    }


    return (
        <div className='mx-auto w-5/12 mb-4 border'>

        <h3 className='text-center text-3xl font-bold capitalize'>Please LogIn</h3>

        <form className=' p-4 ' onSubmit={handleLogin}>

            <label htmlFor="name">Email</label>
            <br />
            <input type="email" name='email' placeholder="email" className="border p-3 rounded-md w-5/6" /><br />
            <label htmlFor="name">password</label>
            <br />
            <input type="password" name='password' placeholder="password" className="border p-3 rounded-md w-5/6" /><br />

            <button type='submit' className=' btn btn-outline lg:w-48 lg:ml-20 mt-5'>Login</button>

            <div className='text-center mt-5'>

                <p className='text-center'>create a new account please <Link to='/register' className='text-red-300 underline'>register</Link></p>
            </div>

            <div className='text-center my-3 '>
                {/* <button onClick={googleLoginBtn} className=''>
                    <img src={logo} className='w-10 border ' alt="" />
                </button> */}
                
            </div>


        </form>

    </div>
    );
};

export default Login;