import Container from "react-bootstrap/Container";
import React, {useState} from "react";
import SearchForm from "../components/SearchForm";
import PostItem from "../components/PostItem";

const PostsPage = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'post', body: 'body'},
        {id: 2, title: 'post', body: 'body'},
        {id: 3, title: 'post', body: 'body'}
    ]);

    const searchByTitle = (searchLine: string) => {
        console.log(searchLine);
    }

    return (
        <Container className="pt-5 d-flex justify-content-center" style={{flexDirection: "column"}}>
            <SearchForm searchByTitle={searchByTitle}/>
            <div style={{display: 'flex'}}>
                {posts.map(post =>
                    <PostItem key={post.id} post={post}/>
                )}
            </div>
        </Container>
    );
};

export default PostsPage;