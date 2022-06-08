import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="mt-5 mb-5">
            <h3 className="text-center mt-3 mb-3">My Blogs</h3>
            <div className="container blogs  p-5">
                <h4>What are the Difference between Authorization and Authentication?</h4>
                <p>
                    <b>Authentication: </b>Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process.In authentication process, users or persons are verified.It is done before the authorization process. <br />
                    <b>Authorization: </b>Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.While in this process, users or persons are validated.While this process is done after the authentication process.
                </p>

                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </p>

                <h4>What other services does firebase provide other than authentication?</h4>
                <p>
                    There are many services which Firebase provides, Most useful of them are: 
                </p>
                <ol>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </ol>
            </div>
        </div>
    );
};

export default Blogs;