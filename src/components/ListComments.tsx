import React from 'react';
import CommentItem from "./CommentItem";
import IComment from "../models/IComment";

interface ListCommentsProps {
    comments: IComment[]
}

const ListComments = ({comments}: ListCommentsProps) => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h4>List of Comments: </h4>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {comments?.map(comment =>
                    <CommentItem key={comment.id} comment={comment}/>
                )}
            </div>
        </div>
    );
};

export default ListComments;