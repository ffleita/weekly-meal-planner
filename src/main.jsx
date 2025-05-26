import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { WeeklyMealPlannerApp } from './WeeklyMealPlannerApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeeklyMealPlannerApp />
  </StrictMode>,
)
