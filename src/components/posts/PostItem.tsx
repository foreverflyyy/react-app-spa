import IPost from "../../models/IPost";
import Card from 'react-bootstrap/Card';
import SectionComments from "../comments/SectionComments";
import UserSection from '../UserSection';

interface PostProps {
   post: IPost
}

const PostItem = ({ post }: PostProps) => {
   return (
      <Card style={{ marginBottom: 15, minWidth: 300 }}>
         <Card.Header as="h5">Post {post.id}</Card.Header>
         <Card.Body>
            <Card.Title>
               <UserSection userId={post.userId} />
               Title: {post.title}</Card.Title>
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