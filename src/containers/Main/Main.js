import React from 'react'
import { HomePage } from './pages/Home/HomePage'
import { Routes, Route } from 'react-router-dom'
import { GaleryPage } from 'containers/Main/pages/GaleryPage/GaleryPage'
import { Flowers } from 'containers/Main/pages/Category/Flowers'
import { Interesting } from './pages/Category/Interesting'
import { Advices } from './pages/Category/Advices'
import FavoritesPage from 'containers/Main/pages/FavoritesPage/FavoritesPage'
import { PageArticle } from 'containers/Main/PageArticle/PageArticle'

export const Main = ({ changeSlice, sliceFrom, sliceTo, category }) => {
    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <HomePage
                                changeSlice={changeSlice}
                                sliceFrom={sliceFrom}
                                sliceTo={sliceTo}
                            />
                        </>
                    }
                />
                <Route path="/category/flowers" element={<Flowers />} />
                <Route path="/category/interesting" element={<Interesting />} />
                <Route path="/category/advices" element={<Advices />} />
                <Route path="/galery" element={<GaleryPage />} />
                <Route
                    path={`/article/:title_Link`}
                    element={<PageArticle category={category} />}
                />

                <Route
                    path="/favorites"
                    element={<FavoritesPage category={category} />}
                />
            </Routes>
        </main>
    )
}
