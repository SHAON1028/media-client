import React from 'react';
import MediaCard from './MediaCard/MediaCard';
import { useQuery } from '@tanstack/react-query';
const Media = () => {
    const { data: allposts = [], refetch, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allposts');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='mx-auto w-2/5 mt-10'>
            {allposts.map((post) =><MediaCard post={post} key={post._id} refetch={refetch}></MediaCard>)}
        </div>
    );
};

export default Media;