import React, { useEffect, useState } from 'react';
import { getUserData, getUserPosts } from '../../services/userService';
import { User, Post } from '../../types';

const ProfilePage: React.FC<{ userId: string }> = ({ userId }) => {
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUserData(userId);
                const userPosts = await getUserPosts(userId);
                setUser(userData);
                setPosts(userPosts);
            } catch (err) {
                setError('Failed to fetch user data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {user && (
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.bio}</p>
                </div>
            )}
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