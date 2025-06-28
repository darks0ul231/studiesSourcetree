import React from "react";
import { useState } from 'react';
import api from './../common/Api'

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
            <div class="container">
        <div class="left-side">
            <div class="left-content">
                <h1>All the content you want,<br/>the OnlySub you need.</h1>
            </div>
            <div class="background-shape"></div>
        </div>

        <div class="right-side">
            <div class="login-container">
                <div class="logo">
                    <img src="src\common\onlysublogo.png" width="330px" height="80px"/>
                </div>

                <form>
                    <div class="form-group">
                        <input type="text" placeholder="username"/>
                    </div>
                    <div class="form-group password-field">
                        <input type="password" placeholder="password"/>
                    </div>
                    <button type="button" defaultValue="Sign In" class="login-button">Login</button>
                </form>

                <div class="help-text">
                    Visit <a href="#">Help Center</a> for any help if you are not able to login with your existing account.
                </div>

                <div class="signup-text">
                    Don't have an account yet? <a href="#">Sign up here</a>.
                </div>

                <div class="forgot-text">
                    <a href="#">Forgot password?</a>
                </div>

                <div class="divider">
                    <div class="divider-line"></div>
                    <span class="divider-text">Or</span>
                    <div class="divider-line"></div>
                </div>

                <div class="social-login">
                    <button class="social-button twitter-button">
                        Sign in with Twitter
                    </button>
                    <button class="social-button google-button">
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    </div>
            </form>
                
        </div>
    )
}

export default LoginForm;