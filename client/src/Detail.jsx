import placeholder from './assets/placeholder.jpg'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'



function Detail() {

    const date = new Date();

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
                        {data?.fields.Attachments && Object.keys(data.fields.Attachments).map((key) => (
                            <img
                                key={key}
                                src={data.fields.Attachments[key].url}
                                alt={`Image ${key}`}
                            />
                        ))}
                        <h5 className="card-title">{data?.fields.Name}</h5>
                        <p className="card-text">

                            {data?.fields.detailsText}

                        </p>
                        <a href="/" className="btn btn-primary">Contact</a>
                    </div>
                    <div className="card-footer text-muted">

                        {printDate((data?.fields.DatePosted), date)}
                    </div>
                </div>
            </div>

        </main>
    );
}

function printDate(datePosted, todayDate) {
    const convertedDate = new Date(datePosted);
    const diff = todayDate - convertedDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days == 1) {
        return <>{days} Day ago</>;
    } else {
        return <>{days} Days ago</>;
    }
}


export default Detail;