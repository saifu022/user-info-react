import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from '../ProfileImage/ProfileImage';
import './UserCard.css';

const UserCard = (props) => {
    const { id, name, username, website } = props.singleUserData;
    const websiteLink = `http://${website}`;
    return (
        <div className="card user-card">
            <div className="card-body">
                <ProfileImage name={name} />
                <h5 className="card-title">{name}</h5>
                <p className="card-text user-name">@{username}</p>
                <a href={websiteLink} target="_blank" rel='noreferrer' className="website-link">{websiteLink}</a> <br />
                <Link to={`/user/${id}`}><button type="button" className="btn btn-primary card-button">More Details</button></Link>
            </div>
        </div>
    );
};

export default UserCard;
