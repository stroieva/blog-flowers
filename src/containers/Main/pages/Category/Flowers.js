import React from 'react'
import { ArticlesItem } from 'containers/Main/Articles/ArticlesItem'
import { ContactsForma } from 'containers/ContactsForma/ContactsForma'

export const Flowers = () => {
    return (
        <>
            <main className="main">
                <section>
                    <div className="category-title">Квіти</div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12"></div>
                            <ArticlesItem category="Квіти" />
                        </div>
                    </div>
                    <ContactsForma />
                </section>
            </main>
        </>
    )
}
