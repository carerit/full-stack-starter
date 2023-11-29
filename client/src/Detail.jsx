import placeholder from './assets/placeholder.jpg'
import YouTube from "react-youtube";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'



function Detail() {

    const date = new Date();

    const { id } = useParams();
    const [data, setData] = useState();
    // Previous AirTable code:
    // useEffect(() => {
    //     const token = 'patpzeJGcJ0aHfK6J.e9011b3d993570931a90fb1f5597cd7c07304a39fd3cbbd97b5eb2c2c5c4cbe5';
    //     const url = `https://api.airtable.com/v0/appvoUbpT81hh1l9f/Table%201/${id}`;

    //     fetch(url, {
    //         headers: { Authorization: `Bearer ${token}` }
    //     })
    //         .then((response) => response.json())
    //         .then((data) => setData(data));
    // }
    //     , [id]);

    useEffect(() => {
        fetch(`/api/items/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [id]);

    let videoLink = data?.VideoLink;
    let videoId = videoLink?.split('v=')[1].split("&")[0];
    console.log(videoId);

    return (

        <main className="container">
            <h1>Details</h1>
            <div className='py-4'>
                <div className="card text-center">
                    <div className="card-header">
                        {data?.Title}
                    </div>
                    <div className="card-body">

                        <YouTube
                            videoId={videoId}
                        />

                        <h5 className="card-title">{data?.Name}</h5>
                        <p className="card-text" >

                            {data?.Text}

                        </p>
                        <a href="/" className="btn btn-primary">Contact</a>
                    </div>
                    <div className="card-footer text-muted">

                        {printDate((data?.createdAt), date)}
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