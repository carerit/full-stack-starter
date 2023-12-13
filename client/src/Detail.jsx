import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import YouTube from "react-youtube";



function Detail() {

    const date = new Date();

    const { id } = useParams();
    const [data, setData] = useState();

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