import React from 'react'

import HomeContent from '../components/HomeContent'
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div className="container">
            <div class="row mt-5">
                <div class="col-6">
                    <HomeContent />
                </div>
                <div class="col-6">
                    <Banner />
                </div>
            </div>
        </div>
    )
}

export default Home;
