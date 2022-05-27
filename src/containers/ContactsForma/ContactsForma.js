import React from 'react'
import 'containers/ContactsForma/ContactsForma.css'

export const ContactsForma = () => {
    return (
        <>
            <section className="forma">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 ">
                            <div className="forma-subscribe">
                                <p className="forma-title">
                                    Підписавшись на нашу розсилку, ви отримаєте
                                    корисні поради щодо вирощування квітів,
                                    оголошення та всілякі цікавинки від Flowers.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-2 col-md-3"></div>

                        <div className="col-xs-12 col-sm-8 col-md-6">
                            <form className="forma">
                                <div className="email">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Введіть ваш e-mail"
                                    />
                                </div>
                                <div className="subscribe">
                                    <input
                                        type="submit"
                                        value="Підписатися на розсилку"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-2 col-md-3"></div>
                    </div>
                </div>
            </section>
        </>
    )
}
