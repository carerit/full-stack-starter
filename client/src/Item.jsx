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
        // <>
        //     <div className="card mb-5 mt-5">
        //         <div className='row-auto p-2' >
        //             <span style={{ fontSize: '28px' }}>
        //                 {record.Title}
        //             </span>
        //         </div>
        //         <div className='row'>
        //             <div className="col-auto">
        //                 <img
        //                     key={record.id}
        //                     src={thumbnail}
        //                     width={175}
        //                     height={120}
        //                     alt={`Image ${record.id}`}
        //                 />
        //             </div>

        //             <div className='col-lg'>
        //                 <div className='row-auto pr-5'>
        //                     {record.Text}
        //                 </div>
        //                 <div className='row-auto pt-2'>
        //                     <Link to={url} className="me-2">Details</Link>
        //                     {user && <Link to={`/items/${record.id}/edit`}>Edit</Link>}
        //                 </div>

        //             </div>
        //         </div>


        //     </div>
        // </>
        <Card>
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
    );
}

export default Item;
