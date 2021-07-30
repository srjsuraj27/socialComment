import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'; //faCaretSquareRight

import classes from './HomeContent.module.css';

const HomeContent = () => {
    return (
        <div>
            <div>
                <h1 className={classes.home_content1}>Don't worry.</h1>
                <h1 className={classes.home_content1}>We are here for every solution.</h1>
                <h6 className={classes.home_content2}>Bushwick meh Blue Bottle pork belly mustache skateboard 3 wolf moon. Actually beard single-orian coffee. twee 90's PBR Echo Park.</h6>
            </div>
            <div className="mt-5">
                <NavLink to='/getstarted'>
                    <button className={`${classes.btn1} ${classes.info1}`}>Get started</button>
                </NavLink>
                <NavLink to='/watchvideo' className="pl-5">
                    <button className={`${classes.btn2} ${classes.info2}`}><FontAwesomeIcon icon={faCaretRight} /> Watch Video</button>
                </NavLink>
            </div>
            <div className="mt-5">
                <img src="footer.png" alt="logo"></img>
            </div>
        </div>
    )
}

export default HomeContent;
