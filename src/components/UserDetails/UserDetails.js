import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProfileImage from '../ProfileImage/ProfileImage';
import './UserDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone, faBriefcase, faGlobeAsia, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserDetails = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(userData => setUser(userData))
    }, [url]);
    const { name, username, email, phone, company, website, address } = user;
    const { street, suite, city, zipcode } = address || {};
    const spinner = <div className="spinner">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>

    return (
        <div>
            {!user.name ? spinner :
                <>
                    <div className="container details-container">
                        <div className="card user-details">
                            <ProfileImage name={name}></ProfileImage>
                            <div className="card-body">
                                <h1 className="card-title"> {name} </h1>
                                <h5 className="card-text"> <FontAwesomeIcon icon={faAt} />{username} </h5>
                                <h5 className="card-text"> <FontAwesomeIcon icon={faPaperPlane} /> {email}</h5>
                                <h5 className="card-text"> <FontAwesomeIcon icon={faPhone} /> {phone} </h5>
                                <h5 className="card-text"> <FontAwesomeIcon icon={faBriefcase} /> {company ? company.name : ''}</h5>
                                <h5 className="card-text"> <FontAwesomeIcon icon={faGlobeAsia} /> {website}</h5>
                                <h5 className="card-text"> <u><FontAwesomeIcon icon={faMapMarkerAlt} /> Address:</u></h5>
                                <p className="card-text">{street}, {suite} <br />{city}, zipcode: {zipcode}.</p>
                            </div>
                        </div>
                    </div>
                    <Link to={`/home`}><button type="button" className="btn btn-primary card-button">Back</button></Link>
                </>}
        </div>
    );
};

export default UserDetails;