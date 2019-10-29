import React from 'react';
import Data from './Data';
import { Link } from 'react-router-dom';
import './User.css'


function User(props) {

    console.log(props)

    const id = props.match.params.id

    const user = Data.find(user => user.id === Number(id))

    return (
    <div id='container2'>
        <Link className="link" to='/'>&larr;</Link> 
        <div className="picture">
            <img src={user.picture.large} alt=""></img>
        </div>
        <div>
            <div className="name">
                {user.name.title}. {user.name.first} {user.name.last}
            </div>
            <div className="email">
                {user.email}
            </div>
            <div className="cell">
                {user.cell}
            </div>
            <div className="local">
                {user.location.city}, {user.location.state}
            </div>
        </div>
    </div>
    );
}

export default User;
