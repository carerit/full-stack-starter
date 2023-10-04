import { Link } from 'react-router-dom'
import placeholder from './assets/placeholder.jpg'

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
                        <img id="placeholder" src={placeholder} width={150} height={100}></img>
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
