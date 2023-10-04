import placeholder from './assets/placeholder.jpg'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function Detail() {
    const { id } = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        const token = 'patpzeJGcJ0aHfK6J.e9011b3d993570931a90fb1f5597cd7c07304a39fd3cbbd97b5eb2c2c5c4cbe5';
        const url = `https://api.airtable.com/v0/appvoUbpT81hh1l9f/Table%201/${id}`;

        fetch(url, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => response.json())
            .then((data) => setData(data));
    }
        , [id]);

    console.log(data);
    return (

        <main className="container">
            <h1>Details</h1>
            <div className='py-4'>
                <div className="card text-center">
                    <div className="card-header">
                        {data?.fields.Title}
                    </div>
                    <div className="card-body">
                        <img src={placeholder}></img>
                        <h5 className="card-title">Name</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum maximus nunc at vestibulum. Ut ac sem eget elit tincidunt euismod at eu arcu. Praesent neque ipsum, sodales quis luctus in, elementum et felis. Aenean vehicula malesuada dignissim. Duis non lorem sodales, lobortis odio vitae, egestas ligula. Donec vel cursus sapien, elementum rutrum libero. Curabitur lectus arcu, efficitur in vestibulum vel, placerat in quam. Aenean at posuere nunc. Suspendisse eget congue leo. Nunc eu mi in massa viverra rutrum quis vel quam. Suspendisse a turpis vel dui convallis vulputate. In quis tortor diam. Nullam id risus sed ipsum condimentum suscipit at ut metus.
                            <br></br>
                            Maecenas rutrum mauris at velit ornare vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In elementum sit amet nisl quis vulputate. Mauris semper ultricies semper. Morbi euismod sem ac hendrerit ornare. Mauris ultricies, dolor id luctus eleifend, magna purus tristique justo, in faucibus mi sapien quis nibh. Proin euismod egestas sollicitudin.</p>
                        <a href="/" className="btn btn-primary">Contact</a>
                    </div>
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Detail;