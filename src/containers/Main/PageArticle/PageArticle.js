import React from 'react'
import { useParams } from 'react-router-dom'
import articlesArray, {
    getArticlesArrayObject,
} from 'containers/Main/Articles/articlesArray'
import 'common/Grid/Grid.css'
import { ContactsForma } from 'containers/ContactsForma/ContactsForma'

export const PageArticle = ({
    articlesArrayObject = getArticlesArrayObject(articlesArray),
}) => {
    const { title_Link } = useParams()
    const linkTitle = articlesArray.filter(
        (article) => article.title_Link === title_Link
    )
    const id = linkTitle[0].id

    return (
        <>
        <div className="container">
            <div
                className="row"
                dangerouslySetInnerHTML={{
                    __html: articlesArrayObject[id].pageArticle,
                }}
            ></div>
        </div>
        <ContactsForma />
        </>
        
    )
}
