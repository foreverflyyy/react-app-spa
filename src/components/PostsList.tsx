import PostItem from "./PostItem";
import IPost from '../models/IPost';

interface PostsListProps {
   posts: IPost[];
   searchLine: string
}

const PostsList = ({ searchLine, posts }: PostsListProps) => {

   return (
      <div>
         <div style={{ display: 'flex', flexDirection: 'column' }}>
            {posts?.map(post =>
               <PostItem key={post.id} post={post} />
            )}
         </div>
      </div>
   );
};

export default PostsList;