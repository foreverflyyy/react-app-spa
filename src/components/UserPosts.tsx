import React, {useState} from 'react';
import {fetchUserPosts} from "../store/actions/user/userPostsActions";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import PostsList from "./posts/PostsList";
import Loader from "../UI/Loader";
import Button from "react-bootstrap/Button";

interface UserPostsProps{
    userId: number
}
const UserPosts = ({userId}: UserPostsProps) => {

    const [showBtn, setShowBtn] = useState(true);
    const {userPosts, isLoading, error} = useAppSelector(state => state.userPosts)
    const dispatch = useAppDispatch();

    const handlerLoadPosts = () => {
        setShowBtn(false);
        dispatch(fetchUserPosts(userId.toString()));
    }

    if(showBtn) {
        return (
            <Button
                style={{maxWidth: 300, fontSize: 18}}
                variant="secondary"
                onClick={handlerLoadPosts}>
                Load Posts
            </Button>
        )
    }

    if(isLoading || !userPosts)
        return <Loader/>

    return (
        <>
            <h3>User posts:</h3>
            {isLoading
                ? <Loader/>
                : <PostsList posts={userPosts}/>
            }
        </>
    );
};

export default UserPosts;