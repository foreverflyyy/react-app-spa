import React, {useEffect, useState} from 'react';
import Button from "react-bootstrap/Button";
import {fetchComments} from "../../store/actions/commentsActions";
import IPost from "../../models/IPost";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import CommentItem from "./CommentItem";
import IComment from "../../models/IComment";
import Error from "../../UI/Error";

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

   useEffect(() => {
       if(commentsByPost[0]?.postId !== post.id){
           setVisibleComments(false);
       }
   }, [commentsByPost])

    if(error)
        return <Error>Something went wrong when loading the comments...</Error>

   return (
       <>
           <div style={{ display: 'flex', flexDirection: 'column' }}>
               {(visibleComments && !isLoading) &&
                   <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                       <h4>List of Comments: </h4>
                       <div style={{ display: 'flex', flexDirection: 'column' }}>
                           {commentsByPost.map((comment: IComment) =>
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
                   {!visibleComments ? 'Comments' : 'Hide'}
               </Button>
           </div>
       </>
   );
};

export default SectionComments;