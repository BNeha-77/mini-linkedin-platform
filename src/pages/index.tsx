import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Mini LinkedIn</h1>
            <p>Your community platform for connecting with others.</p>
            <nav>
                <ul>
                    <li><a href="/feed">Feed</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;