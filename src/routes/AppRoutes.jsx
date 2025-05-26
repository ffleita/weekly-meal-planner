import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { MainPage } from '../pages/MainPage'
import { RecetasPage } from '../pages/RecetasPage'
import { RecetasDetailPage } from '../pages/RecetasDetailPage'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/*' element={<MainPage />} />
            <Route path='/recetas' element={<RecetasPage />} />
            <Route path='/recetas/:idReceta' element={<RecetasDetailPage />} />
        </Routes>
    )
}
