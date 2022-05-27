import React from 'react'
import { ArticlesItem } from 'containers/Main/Articles/ArticlesItem'
import './Category.css'
import { ContactsForma } from 'containers/ContactsForma/ContactsForma'

export const Advices = () => {
    return (
        <main className="main">
            <section>
                <div className="category-title">Поради</div>
                <div className="container">
                    <div className="row">
                        <ArticlesItem category="Поради" />
                    </div>
                </div>
                <ContactsForma />
            </section>
        </main>
    )
}
