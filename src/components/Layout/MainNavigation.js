import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../index.css';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <NavLink to='/' className={classes.nav_logo}>
                    <img src="task_logo.png" alt="logo"></img>
                </NavLink>
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/integration' activeClassName={classes.active}>
                            Integration
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/price' activeClassName={classes.active}>
                            Pricing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog' activeClassName={classes.active}>
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName={classes.active}>
                            About Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={classes.nav_btn}>
                <NavLink to='/earlyaccess'>
                    <button className={`${classes.btn} ${classes.info}`}>Get early access</button>
                </NavLink>
            </div>
        </header>
    )
}

export default MainNavigation;
