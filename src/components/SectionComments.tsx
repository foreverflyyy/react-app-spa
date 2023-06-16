import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import {fetchComments} from "../store/actions/commentsActions";
import IPost from "../models/IPost";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import CommentItem from "./CommentItem";
import IComment from "../models/IComment";

interface ListCommentsProps {
   post: IPost
}

const SectionComments = ({ post }: ListCommentsProps) => {

   const [visibleComments, setVisibleComments] = useState(false);
   const { commentsByPost, isLoading, error } = useAppSelector(state => state.comment)
   const dispatch = useAppDispatch();

   const handlerGetComments = () => {
      if (!visibleComments){
         dispatch(fetchComments(post.id.toString()));
      }

      setVisibleComments(!visibleComments);
   }

   const handlerGetCommentsAgain = () => {
      dispatch(fetchComments(post.id.toString()));
   }

   return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
         {(visibleComments && !isLoading) &&
             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4>List of Comments: </h4>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                   {commentsByPost
                       .filter((comment: IComment) => comment.postId === post.id)
                       .map((comment: IComment) =>
                           <CommentItem key={comment.id} comment={comment} />
                       )}
                </div>
             </div>
         }
         <Button
            style={{ maxWidth: 150, fontSize: 18, marginTop: 10 }}
            variant="outline-secondary"
            disabled={isLoading}
            onClick={handlerGetComments}
         >
            {isLoading
               ? 'Loading…'
               : (!visibleComments ? 'Comments' : 'Hide')
            }
         </Button>
         <h2 onClick={() => console.log(commentsByPost[0])}>Check</h2>
      </div>
   );
};

export default SectionComments;