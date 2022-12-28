import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { BiLike } from 'react-icons/bi';
import { AuthContext } from '../../contexts/AuthProvider';
import PostCard from './PostCard/PostCard';

const SecondSection = () => {
    const { user } = useContext(AuthContext)
    const { data: posts = [], refetch, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/posts');
            const data = await res.json();
            return data;
        }
    });
    console.log(posts)
    return (
        <div>
            {posts.map(post=><PostCard post={post} key={post._id} refetch={refetch}></PostCard>)}
        </div>
    );
};

export default SecondSection;