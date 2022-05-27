import React from 'react'
import 'common/Grid/Grid.css'
import './HomePage.css'
import { SliderSlick } from 'components/Slider/SliderSlick'
import { HomeArticleItem } from './HomeArticleItem'
import { HomeNavigationButton } from './HomeNavigationButton'
import { ContactsForma } from 'containers/ContactsForma/ContactsForma'
import { ImageGalery } from 'containers/ImageGalery/ImageGalery'

export const HomePage = ({ changeSlice, sliceFrom, sliceTo }) => {
    return (
        <>
            <main className="main">
                <SliderSlick />
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1 className="title">
                                    Ласкаво просимо! Запрошуємо Вас поринути у
                                    світ гармонії та краси!
                                </h1>
                            </div>
                            <HomeArticleItem
                                changeSlice={changeSlice}
                                sliceFrom={sliceFrom}
                                sliceTo={sliceTo}
                            />
                            <div className="col-xs-12">
                                <HomeNavigationButton
                                    changeSlice={changeSlice}
                                />
                            </div>
                            <ImageGalery />
                            <ContactsForma />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
