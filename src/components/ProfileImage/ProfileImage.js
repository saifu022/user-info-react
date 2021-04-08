import React from 'react';
import './ProfileImage.css';

const ProfileImage = (props) => {
    return (
        <div className="image-container">
            <div className="profile-image">
                {props.name? props.name[0] : ''}
            </div>
        </div>
    );
};

export default ProfileImage;