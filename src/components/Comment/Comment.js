import React from 'react';
import userImages from '../../userImages';
import './Comment.css';

const Comment = (props) => {
    const { email, body, id } = props.comment;
    const userImage = userImages.find(image => image.id === id);
    // console.log(userImage);
    return (
        <div className="comment__box">
            <div className="comment__user">
                <img src={userImage.img} alt=""/>
                <h5>{email}</h5>
            </div>
            <p><small>{body}</small></p>
        </div>
    );
};

export default Comment;