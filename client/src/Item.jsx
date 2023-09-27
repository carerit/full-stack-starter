import { Link } from 'react-router-dom'

function Item({ title }) {
    return (
        <div className="card mb-3">
            {title}
            <Link to="/detail">details</Link>
        </div>
    );
}

export default Item;
