import React from 'react'
import { NavLink } from 'react-router-dom';

const EarlyAccess = () => {
    return (
        <div className="container">
            <div class="row mt-5">
                <div class="col-4"></div>
                <div class="col-4">
                    <div class="row mt-5">
                        <div className="col-6">
                            <h1>Get Early Access</h1>
                            <div className="mt-5">
                                <NavLink to='/'>
                                    <button className="btn">Go Back</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-6 pic">
                            <img src="earlyaccess.png" alt="logo"></img>
                        </div>
                    </div>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
    )
}

export default EarlyAccess
