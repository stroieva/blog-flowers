import React from 'react'
import { ArticleCard } from './ArticleCard'
import articlesArray from './articlesArray'

export const ArticlesItem = ({ category }) => {
    return (
        <>
            {articlesArray
                .filter((el) => el.category === category)
                .map(
                    ({
                        id,
                        image,
                        category,
                        category_Link,
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
                                title={title}
                                title_Link={title_Link}
                                text={text}
                                read={read}
                            />
                        </div>
                    )
                )}
        </>
    )
}
