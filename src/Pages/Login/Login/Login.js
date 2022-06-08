import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if(loading || sending){
        return <Loading></Loading>
    }

    if(user){
        navigate(from, {replace: true});
    }

    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message}</p>
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        signInWithEmailAndPassword(email, password);
    };


    const navigateRegister = (event) => {
        navigate("/register");
    };

    const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('sent email');
        }
        else{
            toast('Please enter your email address');
        }
    }

    return (
        <div className="container w-50 mx-auto login-form">
            <h2 className="text-info text-center mt-3">Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    ref={emailRef}
                    type="email"
                    placeholder="Enter Your Email"
                    required
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    ref={passwordRef}
                    type="password"
                    placeholder="Enter Your Password"
                    required
                />
                </Form.Group>
                <Button variant="warning" type="submit" className="w-50 mx-auto d-block mb-3">
                Login
                </Button>
            </Form>

        {errorElement}

        <p>
            New to wild Photography?
            <Link to="/register" className="text-primary ps-2 pe-auto text-decoration-none" onClick={navigateRegister}>
            Please Register
            </Link>
        </p>
        <p>
            Forget password?
            <button className="btn btn-link text-primary pe-auto text-decoration-none" onClick={resetPassword}>
            Reset Password
            </button>
        </p>

        <SocialLogin></SocialLogin>
        <ToastContainer />
        </div>
    );
};

export default Login;
