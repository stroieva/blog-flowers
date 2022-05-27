import React from 'react'
import { keys } from 'lodash'
import { connect } from 'react-redux'
import articlesArray, {
    getArticlesArrayObject,
} from 'containers/Main/Articles/articlesArray'
import 'common/Grid/Grid.css'
import 'containers/Main/pages/Category/Category.css'
import { ArticleCard } from 'containers/Main/Articles/ArticleCard'
import { ContactsForma } from 'containers/ContactsForma/ContactsForma'
import { ImageGalery } from 'containers/ImageGalery/ImageGalery'

const FavoritesPage = ({
    articlesArrayObject = getArticlesArrayObject(articlesArray),
    isLiked,
}) => {
    return (
        <>
            <section className="favorites">
                <div className="category-title">Favorites</div>
                <div className="container">
                    <div className="row">
                        {keys(isLiked)
                            .filter((articleId) => isLiked[articleId] === true)
                            .map((articleId) => (
                                <div
                                    className="col-xs-12 col-sm-6 col-md-4"
                                    key={articlesArrayObject[articleId].id}
                                >
                                    <ArticleCard
                                        id={articlesArrayObject[articleId].id}
                                        image={
                                            articlesArrayObject[articleId].image
                                        }
                                        category={
                                            articlesArrayObject[articleId]
                                                .category
                                        }
                                        category_Link={
                                            articlesArrayObject[articleId]
                                                .category_Link
                                        }
                                        title={
                                            articlesArrayObject[articleId].title
                                        }
                                        title_Link={
                                            articlesArrayObject[articleId]
                                                .title_Link
                                        }
                                        text={
                                            articlesArrayObject[articleId].text
                                        }
                                        read={
                                            articlesArrayObject[articleId].read
                                        }
                                    />
                                </div>
                            ))}
                    </div>
                </div>
                <ImageGalery />
                <ContactsForma />
            </section>
        </>
    )
}

const mapState = (state) => ({
    isLiked: state.articleLikeState,
})

export default connect(mapState)(FavoritesPage)
