import React from 'react';
import PostsList from '../components/PostsList';

const HomePage = () => {
    return (
        <div className='home'>
            <div className="container">
                <div className="home__inner">
                    <h1 className='home__logo'>Welcome to my blog!</h1>
                    <PostsList/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;