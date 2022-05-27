import React from 'react'
import { ArticlesItem } from 'containers/Main/Articles/ArticlesItem'
import { ContactsForma } from 'containers/ContactsForma/ContactsForma'

export const Interesting = () => {
    return (
        <>
            <main className="main">
                <div className="category-title">Цікаве</div>
                <section>
                    <div className="container">
                        <div className="row">
                            <ArticlesItem category="Цікаве" />
                        </div>
                    </div>
                    <ContactsForma />
                </section>
            </main>
        </>
    )
}
