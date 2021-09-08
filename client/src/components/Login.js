import React from 'react'

const Login = () => {
    return (
        <>
            <nav class="uk-navbar-container navbar" uk-navbar>
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li class="uk-active">
                        <img src="./public/images/mtnlogo.png" class="mtn-logo" />
                        <span class="page-title mtn-font">KYC Update</span>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="uk-background-cover" data-src="public/images/bg.jpg" uk-height-viewport="expand: true" uk-img>
            <div class="main-content">
                <div class="uk-container">
                    <div class="uk-flex uk-flex-center@m uk-flex-right@l">
                        <div class="uk-card login-form-container uk-margin-large-top uk-card-default mtn-font uk-card-body uk-width-1-4@l uk-width-1-2@m">
                            <h3 class="uk-card-title mtn-font">Login</h3>
                            <form class="uk-hidden">
                                <p>Enter your MTN phone number and click submit to receive a 6 digit pin</p>
                            
                                <div class="uk-margin">
                                    <label>Enter Phone Number</label>
                                    <input class="uk-input uk-form-small" placeholder="e.g 0240000000" name="Msisdn" />
                                </div>
                                <div class="uk-margin">
                                    <button class="uk-button uk-width-1-1 uk-button-small uk-button-default mtn-btn">Send OTP</button>
                                </div>
                            </form>
                            <form class="uk-margin">
                                <p>Please enter the pin that has been sent to . The pin expires in</p>
                            
                                <div class="">
                                    <label>Enter Pin</label>
                                    <div class="uk-child-width-expand uk-grid-collapse" uk-grid>
                                        <div class="otp-input-container"><input maxlength="1" class="uk-input otp-input uk-form-small otp-1" /></div>
                                        <div class="otp-input-container"><input maxlength="1" class="uk-input otp-input uk-form-small otp-2" /></div>
                                        <div class="otp-input-container"><input maxlength="1" class="uk-input otp-input uk-form-small otp-3" /></div>
                                        <div class="otp-input-container"><input maxlength="1" class="uk-input otp-input uk-form-small otp-4" /></div>
                                        <div class="otp-input-container"><input maxlength="1" class="uk-input otp-input uk-form-small otp-5" /></div>
                                        <div class="otp-input-container"><input maxlength="1" class="uk-input otp-input uk-form-small otp-6" /></div>
                                    </div>
                                    
                                </div>
                                
                                <div class="uk-margin">
                                    <button class="uk-button uk-width-1-1 uk-button-small uk-button-default mtn-btn">Send OTP</button>
                                </div>
                                <div >
                                    <span>Did not recieve an OTP? <a href="#">Resend OTP</a> </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div> 
        </div>
        </>
    )
}

export default Login