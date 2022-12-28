import React from 'react';

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
        <div>
            
        </div>
    );
};

export default Media;