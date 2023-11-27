import { Link } from 'react-router-dom'

function Item({ record }) {
    const url = `/detail/${record.id}`
    let videoLink = record?.VideoLink;
    let videoId = videoLink?.split('v=')[1].split("&")[0];
    let thumbnail = `http://img.youtube.com/vi/${videoId}/mqdefault.jpg`

    return (
        <>
            <div className="card mb-5 mt-5">
                <div className='row-auto p-2' >
                    <span style={{ fontSize: '28px' }}>
                        {record.Title}
                    </span>
                </div>
                <div className='row'>
                    <div className="col-auto">
                        {/* {record?.fields.Attachments && Object.keys(record.fields.Attachments).map((key) => (
                            <img
                                key={key}
                                src={record.fields.Attachments[key].thumbnails.large.url}
                                width={175}
                                height={120}
                                alt={`Image ${key}`}
                            />
                        ))} */}
                        <img
                            key={record.id}
                            src={thumbnail}
                            width={175}
                            height={120}
                            alt={`Image ${record.id}`}
                        />
                    </div>

                    <div className='col-lg'>
                        <div className='row-auto pr-5'>
                            {record.Text}
                        </div>
                        <div className='row-auto pt-2'>
                            <Link to={url}>Details</Link>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Item;
