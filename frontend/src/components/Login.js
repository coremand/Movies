import "../styles/Login.css";
import React from 'react';
import Button from '@material-ui/core/Button';

export default function Login() {
    return (
        <div>
            <section className="login-section">
                <div className="row">
                    <div className="login-form1">
                        <div className="form1-container">
                            <form className="form1" id="auth-form1">
                                <div className="form1-text">
                                    <h2>let's hear your voice</h2>
                                </div>

                                <div className="form1-input">
                                   <input type="text" className="form1__input" placeholder="Username" name="name" />
                                   <label for="name" className="form1__label">Username</label>
                                </div>

                                <div className="form1-input">
                                    <input type="password" className="form1__input" placeholder="password" name="password" />
                                    <label for="password" className="form1__label">Password</label>
                                </div>

                                <div className="button__form">
                                    <Button variant="contained" color="primary">
                                        Sign In
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        
        </div>
    )
}
