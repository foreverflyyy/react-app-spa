import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import Loader from "../UI/Loader";
import Container from "react-bootstrap/Container";
import {fetchUserOfPost} from "../store/actions/user/userOfPostActions";
import UserPosts from "../components/user/UserPosts";
import UserInfo from "../components/user/UserInfo";
import Button from "react-bootstrap/Button";
import Error from "../UI/Error";

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

    if(error)
        return <Error>Something went wrong when loading the user...</Error>

    return (
        <Container className="pt-5 d-flex justify-content-center" style={{ flexDirection: "column"}}>
            <Button
                style={{maxWidth: 60, fontSize: 18}}
                variant="outline-dark"
                onClick={handlerBack}>
                Back
            </Button>
            <h2 style={{textAlign: 'center', paddingBottom: 5}}>User #{user.id}</h2>
            <UserInfo user={user} handlerBack={handlerBack}/>
            <UserPosts userId={user.id}/>
        </Container>
    );
};

export default UserPage;