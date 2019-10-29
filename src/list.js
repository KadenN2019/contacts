import React from 'react';
import { Link} from 'react-router-dom';
import Data from './Data';
import './list.css';

function List() {
    return (
    <div id='container2'>
        <div className="peeps">
        My Peeps
        </div>
        <div className="list">
            {Data.map(user => (
                <Link to={"/user/" + user.id} className="user"><img className="img" src={user.picture.large} alt=""></img> {user.name.title} {user.name.first} {user.name.last}</Link>
            ))}
        </div>
    </div>
    );
}

export default List;
