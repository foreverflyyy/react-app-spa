import Container from "react-bootstrap/Container";
import React from "react";
import SearchForm from "../components/SearchForm";

const PostsPage = () => {



    const searchByTitle = (searchLine: string) => {
        console.log(searchLine);
    }

    return (
        <Container className="pt-5 d-flex justify-content-center">
            <SearchForm searchByTitle={searchByTitle}/>
        </Container>
    );
};

export default PostsPage;