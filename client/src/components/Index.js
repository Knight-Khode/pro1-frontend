import React from 'react'
import Navbar from './Navbar'

const Index = () => {
    return (
        <>
            <Navbar/>
            <div className="uk-background-cover" data-src="public/images/bg.jpg" uk-height-viewport="expand: true" uk-img>
                <div className="main-content">
                    <div className="uk-container">
                        <div className="uk-flex uk-flex-center@m uk-flex-right@l">
                            <div className="uk-card login-form-container uk-margin-large-top uk-card-default mtn-font uk-card-body uk-width-1-4@l uk-width-1-2@m">
                                <h3 className="uk-card-title mtn-font">Login</h3>
                                <form className="uk-hidden">
                                    <p>Enter your MTN phone number and click submit to receive a 6 digit pin</p>
                                
                                    <div className="uk-margin">
                                        <label>Enter Phone Number</label>
                                        <input className="uk-input uk-form-small" placeholder="e.g 0240000000" name="Msisdn" />
                                    </div>
                                    <div className="uk-margin">
                                        <button className="uk-button uk-width-1-1 uk-button-small uk-button-default mtn-btn">Send OTP</button>
                                    </div>
                                </form>
                                <form className="uk-margin">
                                    <p>Please enter the pin that has been sent to . The pin expires in</p>
                                
                                    <div className="">
                                        <label>Enter Pin</label>
                                        <div className="uk-child-width-expand uk-grid-collapse" uk-grid>
                                            <div className="otp-input-container"><input maxlength="1" className="uk-input otp-input uk-form-small otp-1" /></div>
                                            <div className="otp-input-container"><input maxlength="1" className="uk-input otp-input uk-form-small otp-2" /></div>
                                            <div className="otp-input-container"><input maxlength="1" className="uk-input otp-input uk-form-small otp-3" /></div>
                                            <div className="otp-input-container"><input maxlength="1" className="uk-input otp-input uk-form-small otp-4" /></div>
                                            <div className="otp-input-container"><input maxlength="1" className="uk-input otp-input uk-form-small otp-5" /></div>
                                            <div className="otp-input-container"><input maxlength="1" className="uk-input otp-input uk-form-small otp-6" /></div>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="uk-margin">
                                        <button className="uk-button uk-width-1-1 uk-button-small uk-button-default mtn-btn">Send OTP</button>
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

export default Index
