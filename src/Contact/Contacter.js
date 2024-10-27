import React from 'react';
import './Contact.css'; // Assurez-vous d'avoir ce fichier CSS pour le style

const Contact = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        // Ajoutez votre logique de connexion ici
        console.log('Login form submitted');
    };

    const handleOAuthLogin = (provider) => {
        // Ajoutez votre logique de connexion OAuth ici
        console.log(`Login with ${provider}`);
    };

    return (
        <div className="contact-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required placeholder="Enter your username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="Enter your password" />
                </div>
                <button type="submit">Se connecter</button>
                <div className="forgot-password">
                    <a href="/reset-password">Forgot Password?</a>
                </div>
            </form>
            <div className="oauth-container">
                <p>Or connect with:</p>
                <button onClick={() => handleOAuthLogin('Google')}>Login with Google</button>
                <button onClick={() => handleOAuthLogin('Facebook')}>Login with Facebook</button>
                <button onClick={() => handleOAuthLogin('LinkedIn')}>Login with LinkedIn</button>
            </div>
        </div>
    );
};

export default Contact;
