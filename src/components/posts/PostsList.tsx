import PostItem from "./PostItem";
import IPost from "../../models/IPost";

interface PostsListProps {
   posts: IPost[]
}

const PostsList = ({ posts }: PostsListProps) => {
   return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {posts.map((post: IPost) =>
                <PostItem key={post.id} post={post}/>)
            }
        </div>
      </>
   );
};

export default PostsList;