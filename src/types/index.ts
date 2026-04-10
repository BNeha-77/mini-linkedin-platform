export interface User {
    id: string;
    username: string;
    email: string;
    profilePicture?: string;
    bio?: string;
}

export interface Post {
    id: string;
    authorId: string;
    content: string;
    createdAt: Date;
    updatedAt?: Date;
}

export interface AuthResponse {
    token: string;
    user: User;
}