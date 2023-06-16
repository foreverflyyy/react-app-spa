import PostItem from "./PostItem";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {useEffect, useState} from "react";
import {fetchPosts} from "../store/actions/postsActions";
import Loader from "../UI/Loader";
import IPost from "../models/IPost";
import SectionPagination from "./Pagination";

interface PostsListProps {
   searchLine: string
}

const PostsList = ({ searchLine }: PostsListProps) => {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(100);

    const { posts, isLoading, error } = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(page)
        dispatch(fetchPosts(limit, page))
    }, [page]);

    if(isLoading)
        return <Loader />

   return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {posts.map((post: IPost) =>
                <PostItem key={post.id} post={post}/>)
            }
            <SectionPagination
                page={page}
                changePage={(p) => setPage(p)}
            />
        </div>
      </>
   );
};

export default PostsList;