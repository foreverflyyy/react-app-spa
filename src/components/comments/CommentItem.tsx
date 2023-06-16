import React from 'react';
import IComment from "../../models/IComment";

interface CommentItemProps {
    comment: IComment;
}

const CommentItem = ({comment}: CommentItemProps) => {
    return (
        <div>
            {comment.id}. {comment.name}
        </div>
    );
};

export default CommentItem;