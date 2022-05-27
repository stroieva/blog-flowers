import React from 'react'
import Articles from './Articles'

export const ArticleCard = ({
    id,
    image,
    category,
    category_Link,
    title,
    title_Link,
    text,
    read,
}) => {
    return (
        <div>
            <Articles
                key={id}
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
}
