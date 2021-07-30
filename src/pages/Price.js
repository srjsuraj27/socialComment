import React from 'react'
import { NavLink } from 'react-router-dom';

const Price = () => {
    return (
        <div className="container">
            <div class="row mt-5">
                <div class="col-4"></div>
                <div class="col-4">
                    <div class="row mt-5">
                        <div className="col-6">
                            <h1>Price Page</h1>
                            <div className="mt-5">
                                <NavLink to='/'>
                                    <button className="btn">Go Back</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-6 pic">
                            <img src="price.png" alt="logo"></img>
                        </div>
                    </div>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
    )
}

export default Price;