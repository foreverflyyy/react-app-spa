import React from 'react';
import IPost from "../models/IPost";
import Card from 'react-bootstrap/Card';
import SectionComments from "./SectionComments";
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

interface PostProps {
   post: IPost
}

const PostItem = ({ post }: PostProps) => {

   const { } = useAppSelector(state => state.user);
   const dispatch = useAppDispatch();

   const navigate = useNavigate();

   const handlerMoveToUser = () => {
      navigate(`/user/${post.id}`);
   }

   return (
      <Card style={{ marginBottom: 15, minWidth: 300 }}>
         <Card.Header as="h5">Post {post.id}</Card.Header>
         <Card.Body>
            <Card.Title><h4>Author: {post.id}</h4> Title: {post.title}</Card.Title>
            <Card.Text>
               {post.body}
            </Card.Text>
            <Card.Footer>
               <SectionComments post={post} />
            </Card.Footer>
         </Card.Body>
      </Card>
   );
};

export default PostItem;