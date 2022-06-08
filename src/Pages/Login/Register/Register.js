import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const navigate = useNavigate();
    let errorElement;

    const navigateLogin = (event) => {
        navigate("/login");
    }

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        console.log('user', user);
    }


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        navigate("/home");
    }

    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message}</p>
    }

    return (
        <div className="register-form">
            <h2 className="text-info text-center mt-3">Register</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="">Your Name</label><br />
                <input type="text" name="name" id="" placeholder="Enter Your Name" required/>
                <br />
                <label htmlFor="">Email Address</label><br />
                <input type="email" name="email" id="" placeholder="Enter Your Email" required/>
                <br />
                <label htmlFor="">Password</label><br />
                <input type="password" name="password" id="" placeholder="Enter Your Password" required/>
                <br />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree? '' : 'text-danger'}`} htmlFor="terms">Accept wild photography Terms & Conditions</label>
                <input disabled={!agree} className="btn btn-warning w-50 mx-auto mb-3 mt-3" type="submit" value="Register" />
                {errorElement}
            </form>
            <p>
                Already Registered?
                <Link to="/login" className="text-primary ps-2 pe-auto text-decoration-none" onClick={navigateLogin}>
                    Please Login
                </Link>
            </p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;