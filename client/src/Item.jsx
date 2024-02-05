import { Link } from 'react-router-dom'
import { useAuthContext } from './AuthContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


function Item({ record }) {
    const { user } = useAuthContext();
    const url = `/detail/${record.id}`
    let videoLink = record?.VideoLink;
    let videoId = videoLink?.split('v=')[1].split("&")[0];
    let thumbnail = `http://img.youtube.com/vi/${videoId}/mqdefault.jpg`

    


    return (
        <>
            <Card className="mb-4">
                <Card.Img variant="top" as={Image} src={thumbnail} />
                <Card.Body>
                    <Card.Title>{record.Title}</Card.Title>
                    <Card.Text>
                        {record.Text}
                    </Card.Text>
                    <div>
                        <Link to={url} className="text-decoration-none me-1">
                            <Button variant="info">
                                Details
                            </Button>
                        </Link>
                        {user && <Link to={`/items/${record.id}/edit`} className="text-decoration-none">
                            <Button variant="warning">
                                Edit
                            </Button>
                        </Link>}

                    </div>
                </Card.Body>
            </Card>

            
        </>
    );
}

export default Item;
