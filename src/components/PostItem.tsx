import React, {useState} from 'react';
import {IPost} from "../models/IPost";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListComment from "./ListComment";

interface PostProps {
    post: IPost
}

const PostItem = ({post}: PostProps) => {

    const [visibleComment, setVisibleComment] = useState(false);

    return (
        <Card style={{marginBottom: 15, marginRight: 20, width: 300}}>
            <Card.Header as="h5">Post {post.id}</Card.Header>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.body}
                    {visibleComment && <ListComment/>}
                </Card.Text>
                <Button
                    variant="outline-secondary"
                    onClick={() => setVisibleComment(!visibleComment)}
                >
                    {!visibleComment ? 'Comments' : 'Hide'}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default PostItem;