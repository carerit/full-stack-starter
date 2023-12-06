import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ItemForm() {


    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({
        Title: '',
        Text: '',
        VideoLink: '',
    });

    const [isConfirmDeleteShowing, setConfirmDeleteShowing] = useState(false);


    useEffect(() => {
        if (id) {
            fetch(`/api/items/${id}`)
                .then((response) => response.json())
                .then((json) => setData(json));
        }
    }, [id]);

    function onChange(event) {
        const newData = { ...data };
        newData[event.target.id] = event.target.value;;
        setData(newData);
    }

    function showConfirmDeleteModal() {
        setConfirmDeleteShowing(true);

    }

    function handleClose() {
        setConfirmDeleteShowing(false);
    }

    async function onDelete() {
        try {
            const response = await fetch(`/api/items/${id}`, {
                method: 'DELETE'
            });
            const json = await response.json();
            console.log(json);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    async function onSubmit(event) {
        event.preventDefault();
        try {
            let path = '/api/items';
            let method = 'POST';
            if (id) {
                path = `/api/items/${id}`;
                method = 'PATCH';
            }


            const response = await fetch(path, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            console.log(json);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    return <div className="container">
            <h1> Item Form </h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="Title" >Title</label>
                    <input type="text" id="Title" name="Title" className="form-control" onChange={onChange} value={data.Title} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Text" >Text</label>
                    <input type="text" id="Text" name="Text" className="form-control" onChange={onChange} value={data.Text} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Link" >Video Link</label>
                    <input type="text" id="VideoLink" name="VideoLink" className="form-control" onChange={onChange} value={data.VideoLink} />
                </div>
                <div>
                    <button type="submit" className="me-2 btn btn-primary">Submit</button>
                    {id && <button onClick={showConfirmDeleteModal} type="button" className="btn btn-danger">Delete</button>}
                </div>
                <Modal centered show={isConfirmDeleteShowing} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={onDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </form>

        </div>;
}
export default ItemForm;