import { Grid } from '@material-ui/core';
import React from 'react';
import userImages from '../../fakeData/commentUser';
import './Comment.css';

const Comment = (props) => {
    const { email, body, id } = props.comment;
    const userImage = userImages.find(image => image.id === id);
    return (
        <Grid container md={6} className="comment__box">
            <div className="comment__user">
                <img src={userImage.img} alt=""/>
                <h5>{email}</h5>
            </div>
            <p className="comment__body"><small>{body}</small></p>
        </Grid>
    );
};

export default Comment;