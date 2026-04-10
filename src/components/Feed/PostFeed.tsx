import React, { useEffect, useState } from 'react';
import { getPosts } from '../../services/postService';

const PostFeed: React.FC = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const fetchedPosts = await getPosts();
            setPosts(fetchedPosts);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Post Feed</h2>
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map(post => (
                    <div key={post.id} className="post">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <p>
                            <small>
                                Posted by {post.author} on {new Date(post.timestamp).toLocaleString()}
                            </small>
                        </p>
                    </div>
                ))
            )}
        </div>
    );
};

export default PostFeed;