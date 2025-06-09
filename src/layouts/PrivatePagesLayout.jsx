import React from 'react'
import { NavigationBar } from '../components/NavigationBar'

export const PrivatePagesLayout = ({children}) => {
    return (
        <>
            <NavigationBar />
            <div className='container'>
                {children}
            </div>
        </>
    )
}
