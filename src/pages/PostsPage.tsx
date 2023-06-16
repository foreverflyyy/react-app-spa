import Container from "react-bootstrap/Container";
import {useEffect, useState} from "react";
import PostsList from "../components/posts/PostsList";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {usePosts} from "../hooks/usePosts";
import {fetchPosts} from "../store/actions/postsActions";
import Loader from "../UI/Loader";
import SectionPagination from "../UI/Pagination";
import IFilter from "../models/IFilter";
import PostsFilter from "../components/filter/PostsFilter";

const PostsPage = () => {

    const [limit] = useState(10);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState<IFilter>({ query: "", sort: "" });

    const { posts, isLoading, error } = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();

    const sortedAndSearchedPosts = usePosts(posts, filter.query, filter.sort);

    useEffect(() => {
        dispatch(fetchPosts(limit, page))
    }, [page]);

   const searchByTitle = (valueSearchLine: string) => {
       setFilter({...filter, query: valueSearchLine});
   }

   return (
      <Container className="pt-5 d-flex justify-content-center" style={{ flexDirection: "column" }}>
         <PostsFilter filter={filter} changeFilter={setFilter}/>
          {isLoading
            ? <Loader />
            :
              <>
                  <PostsList posts={sortedAndSearchedPosts} />
                  <SectionPagination
                      page={page}
                      changePage={(p) => setPage(p)}
                  />
              </>
          }
      </Container>
   );
};

export default PostsPage;