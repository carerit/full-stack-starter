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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies semper lacus, non pharetra risus sollicitudin eget. Nulla eu justo sem. Morbi venenatis non libero nec tristique. Suspendisse porttitor tellus nec ante commodo, vitae ullamcorper lacus mattis. Nam quis quam purus. In purus ligula, efficitur at enim id
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
