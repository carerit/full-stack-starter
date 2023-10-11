import { Link } from 'react-router-dom'

function Item({ record }) {
    const url = `/detail/${record.id}`

    return (
        <>
            <div className="card mb-5 mt-5">
                <div className='row-auto p-2' >
                    <span style={{ fontSize: '28px' }}>
                        {record.fields.Title}
                    </span>
                </div>
                <div className='row'>
                    <div className="col-auto">
                        {record?.fields.Attachments && Object.keys(record.fields.Attachments).map((key) => (
                            <img
                                key={key}
                                src={record.fields.Attachments[key].thumbnails.large.url} width={175} height={120}
                                alt={`Image ${key}`}
                            />
                        ))}
                    </div>

                    <div className='col-lg'>
                        <div className='row-auto pr-5'>
                            {record.fields.Text}
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
