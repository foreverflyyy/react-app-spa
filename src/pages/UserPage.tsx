import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import Loader from "../UI/Loader";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import {fetchUserOfPost} from "../store/actions/user/userOfPostActions";
import UserPosts from "../components/UserPosts";

const UserPage = () => {

    const params = useParams();
    const {user, isLoading, error} = useAppSelector(state => state.userOfPost);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handlerBack = () => {
        navigate("../../posts");
    }

    useEffect(() => {
        dispatch(fetchUserOfPost(params?.id ?? ''));
    }, []);

    if(isLoading || !user)
        return <Loader/>

    return (
        <Container className="pt-5 d-flex justify-content-center" style={{ flexDirection: "column" }}>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <h2>User #{user.id}</h2>
                <Button
                    style={{minWidth: 100, fontSize: 18}}
                    variant="secondary"
                    onClick={handlerBack}>
                    Back
                </Button>
            </div>
            <div>
                Info about user:
            </div>
            <UserPosts userId={user.id}/>
        </Container>
    );
};

export default UserPage;