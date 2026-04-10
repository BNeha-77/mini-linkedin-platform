import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserPosts } from '../services/postService';
import { getUserProfile } from '../services/authService';

const ProfilePage = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const profileData = await getUserProfile(userId);
            setUser(profileData);
        };

        const fetchUserPosts = async () => {
            const userPosts = await getUserPosts(userId);
            setPosts(userPosts);
        };

        fetchUserProfile();
        fetchUserPosts();
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.name}'s Profile</h1>
            <p>Email: {user.email}</p>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <small>Posted on {new Date(post.createdAt).toLocaleString()}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfilePage;