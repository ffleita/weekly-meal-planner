import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { MainPage } from '../pages/MainPage'
import { RecetasPage } from '../pages/RecetasPage'
import { RecetasDetailPage } from '../pages/RecetasDetailPage'
import { IngredientesPage } from '../pages/IngredientesPage'
import { CrearRecetaPage } from '../pages/CrearRecetaPage'
import { EditarRecetaPage } from '../pages/EditarRecetaPage'
import { PlanesPage } from '../pages/PlanesPage'
import { PlanDetailPage } from '../pages/PlanDetailPage'
import { FormularioNuevoIngrediente } from '../components/FormularioNuevoIngrediente'
import { EditarIngredientePage } from '../pages/EditarIngredientePage'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/*' element={<MainPage />} />
            <Route path='/recetas' element={<RecetasPage />} />
            <Route path='/recetas/:idReceta' element={<RecetasDetailPage />} />
            <Route path='/recetas/crear-receta' element={<CrearRecetaPage />} />
            <Route path='/recetas/editar-receta/:idReceta' element={<EditarRecetaPage />} />
            <Route path='/ingredientes' element={<IngredientesPage />} />
            <Route path='/ingredientes/crear-ingrediente' element={<FormularioNuevoIngrediente />} />
            <Route path='/ingredientes/editar-ingrediente/:idIngrediente' element={<EditarIngredientePage />} />
            <Route path='/planes' element={<PlanesPage />} />
            <Route path='/planes/:idPlan' element={<PlanDetailPage />} />
        </Routes>
    )
}
