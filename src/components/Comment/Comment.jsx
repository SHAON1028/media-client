import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CommentCard from './CommentCard';

const Comment = ({ cmntData }) => {
    console.log(cmntData)



    return (
        <div>
            {cmntData?.map((cmnt) => <CommentCard cmnt={cmnt} key={cmnt._id} ></CommentCard>)}
        </div>
    );
};

export default Comment;