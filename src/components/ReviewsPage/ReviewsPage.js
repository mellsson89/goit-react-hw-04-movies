import React, {useEffect, useState} from "react";
import {appReviewsPage} from "../../services/app-api";
import PropTypes from 'prop-types'

export default function ReviewsPage({id}) {

    const [reviews,setReviews] = useState([]);

    useEffect(() => {
        (async () => {
           const data = await appReviewsPage(id);
           setReviews(data);
        })()
    },[id])


        return (
            reviews && <ul>
                {reviews.length > 0 ? reviews.map(({id, author, content}) => (
                    <li key={id}><p>Author: {author}</p> {content}</li>
                )) : "We don't have any reviews for this movies"}
            </ul>
        )
    }

ReviewsPage.propTypes ={
    reviews:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        author:PropTypes.string.isRequired,
        content:PropTypes.string.isRequired,
    }))
}