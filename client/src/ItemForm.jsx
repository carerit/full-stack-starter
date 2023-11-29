import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

function ItemForm() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({
        Title: '',
        Text: '',
        VideoLink: ''
    });

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

    return (
        <div className="container">
            <h1> Item Form </h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Title</label>
                    <input type="text" id="Title" name="Title" className="form-control" onChange={onChange} value={data.Title} />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Text</label>
                    <input type="text" id="Text" name="Text" className="form-control" onChange={onChange} value={data.Text} />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Video Link</label>
                    <input type="text" id="VideoLink" name="VideoLink" className="form-control" onChange={onChange} value={data.VideoLink} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}
export default ItemForm;