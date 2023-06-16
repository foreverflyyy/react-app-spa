import Container from "react-bootstrap/Container";
import {useState} from "react";
import SearchForm from "../components/SearchForm";
import PostsList from "../components/PostsList";

const PostsPage = () => {
   const [searchLine, setSearchLine] = useState('');

   const searchByTitle = (valueSearchLine: string) => {
      console.log(valueSearchLine);
      setSearchLine(valueSearchLine);
   }

   return (
      <Container className="pt-5 d-flex justify-content-center" style={{ flexDirection: "column" }}>
         <SearchForm searchByTitle={searchByTitle} />
         <PostsList searchLine={searchLine} />
      </Container>
   );
};

export default PostsPage;