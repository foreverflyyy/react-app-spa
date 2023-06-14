import React, {useEffect} from 'react';
import PostItem from "./PostItem";
import Loader from "../UI/Loader";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {fetchPosts} from "../store/actions/postsActions";

interface PostsListProps {
    searchLine: string
}

const PostsList = ({searchLine}: PostsListProps) => {

    const {posts, isLoading, error} = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    if(isLoading)
        return <Loader/>

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {posts.map(post =>
                    <PostItem key={post.id} post={post}/>
                )}
            </div>
        </div>
    );
};

export default PostsList;