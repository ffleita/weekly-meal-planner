import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { MainPage } from '../pages/MainPage'
import { RecetasPage } from '../pages/RecetasPage'
import { RecetasDetailPage } from '../pages/RecetasDetailPage'
import { MisRecetas } from '../pages/MisRecetasPage'
import { MisRecetasDetailPage } from '../pages/MisRecetasDetailPage'
import { AgregarIngredientePage } from '../pages/AgregarIngredientePage'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/*' element={<MainPage />} />
            <Route path='/recetas' element={<RecetasPage />} />
            <Route path='/recetas/:idReceta' element={<RecetasDetailPage />} />
            <Route path='/mis-recetas' element={<MisRecetas />} />
            <Route path='/mis-recetas/:idReceta' element={<MisRecetasDetailPage />} />
            <Route path='/mis-recetas/:idReceta/crear-ingrediente' element={<AgregarIngredientePage />} />
        </Routes>
    )
}
