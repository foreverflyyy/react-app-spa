import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import PostsList from "../components/PostsList";
import Loader from "../UI/Loader";
import { fetchPosts } from "../store/actions/postsActions";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const PostsPage = () => {
   const [searchLine, setSearchLine] = useState('');

   const { posts, isLoading, error } = useAppSelector(state => state.posts);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchPosts())
   }, []);

   const searchByTitle = (valueSearchLine: string) => {
      console.log(valueSearchLine);
      setSearchLine(valueSearchLine);
   }

   return (
      <Container className="pt-5 d-flex justify-content-center" style={{ flexDirection: "column" }}>
         <SearchForm searchByTitle={searchByTitle} />
         {isLoading
            ? <Loader />
            : <PostsList posts={posts} searchLine={searchLine} />
         }
      </Container>
   );
};

export default PostsPage;