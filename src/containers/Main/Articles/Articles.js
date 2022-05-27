import React from 'react'
import './Articles.css'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Button } from '@mui/material'
import { connect } from 'react-redux'

const Articles = ({
    id,
    image,
    category,
    title,
    title_Link,
    category_Link,
    text,
    read,
    isLiked,
    removeLike,
    addLike,
}) => {
    return (
        <>
            <div className="article">
                <div className="article-image">
                    <img src={image} alt="" />
                </div>
                <div className="category-favorit">
                    <Link to={`/category/${category_Link}`}>{category}</Link>
                    <Button
                        onClick={() => (isLiked ? removeLike(id) : addLike(id))}
                    >
                        {isLiked ? (
                            <FavoriteIcon className="favorite-icon" />
                        ) : (
                            <FavoriteBorderIcon className="favorite-border-icon" />
                        )}
                    </Button>
                </div>
                <div className="aticle-title">
                    <h4>
                        <Link to={`/article/${title_Link}`}>{title}</Link>
                    </h4>
                </div>
                <div className="article-text">{text}</div>
                <div className="read-more">
                    <Link to={`/article/${title_Link}`}>{read}</Link>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state, { id }) => ({
    isLiked: state.articleLikeState[id],
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (id) =>
        dispatch({
            type: 'LIKE',
            id,
        }),
    removeLike: (id) =>
        dispatch({
            type: 'DISLIKE',
            id,
        }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
