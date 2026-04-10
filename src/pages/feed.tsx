import React from 'react';
import PostFeed from '../components/Feed/PostFeed';

const FeedPage: React.FC = () => {
    return (
        <div>
            <h1>Public Post Feed</h1>
            <PostFeed />
        </div>
    );
};

export default FeedPage;