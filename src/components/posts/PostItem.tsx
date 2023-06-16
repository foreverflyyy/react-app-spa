import IPost from "../../models/IPost";
import Card from 'react-bootstrap/Card';
import SectionComments from "../comments/SectionComments";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";

interface PostProps {
   post: IPost
}

const PostItem = ({ post }: PostProps) => {
   return (
      <Card style={{ marginBottom: 15, minWidth: 300 }}>
         <Card.Header as="h5">Post {post.id}</Card.Header>
         <Card.Body>
            <Card.Title>
                <Link to={`/user/${post.userId}`} style={{paddingRight: 5}}>
                    <Image style={{cursor: 'pointer'}} src="userAvatar.jpg" rounded fluid />
                </Link>
               {post.title}
            </Card.Title>
             <div style={{fontSize: 18}}>Description:</div>
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