import React from 'react'
import articlesArray from 'containers/Main/Articles/articlesArray'
import { ArticleCard } from 'containers/Main/Articles/ArticleCard'

export const HomeArticleItem = ({ changeSlice, sliceTo, sliceFrom }) => {
    return (
        <>
            {articlesArray
                .slice(`${sliceFrom}`, `${sliceTo}`)
                .map(
                    ({
                        id,
                        image,
                        category,
                        category_Link,
                        like,
                        title,
                        title_Link,
                        text,
                        read,
                    }) => (
                        <div className="col-xs-12 col-sm-6 col-md-4" key={id}>
                            <ArticleCard
                                id={id}
                                image={image}
                                category={category}
                                category_Link={category_Link}
                                like={like}
                                title={title}
                                title_Link={title_Link}
                                text={text}
                                read={read}
                                changeSlice={changeSlice}
                                sliceTo={sliceTo}
                                sliceFrom={sliceFrom}
                            />
                        </div>
                    )
                )}
        </>
    )
}
