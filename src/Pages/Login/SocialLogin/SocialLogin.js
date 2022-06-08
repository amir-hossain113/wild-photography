import React from 'react';
import googleImg from '../../../images/social/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from "react-router-dom";
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message}</p>
    }

    if(user){
        navigate('/home');
    }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{height: '1px'}} className="bg-danger w-50"></div>
                <p className="mt-2 mx-2">or</p>
                <div style={{height: '1px'}} className="bg-danger w-50"></div>
            </div>

            {errorElement}

            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-info d-block mx-auto w-100 my-3">
                    <img style={{width: '30px'}} src={googleImg} alt="" />
                    <span className="mx-2">Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;